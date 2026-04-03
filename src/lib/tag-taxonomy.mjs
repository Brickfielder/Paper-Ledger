const TAG_TREE = [
  {
    tag: "neuroscience",
    children: [
      {
        tag: "brain development",
        children: ["fetal brain", "infant brain", "neurodevelopment"],
      },
      {
        tag: "neuroimaging",
        children: [
          {
            tag: "mri",
            children: [
              {
                tag: "diffusion mri",
                children: ["tractography", "multi-dimensional diffusion mri", "ultra-high gradient mri"],
              },
              {
                tag: "functional mri",
                children: ["resting-state fmri"],
              },
            ],
          },
          {
            tag: "connectomics",
            children: ["structural connectome", "brain network", "connectome 2.0"],
          },
        ],
      },
      {
        tag: "comparative neuroanatomy",
        children: ["primate brain", "microstructure"],
      },
    ],
  },
  {
    tag: "methods",
    children: [
      {
        tag: "machine learning",
        children: ["deep learning", "multi-task learning"],
      },
      {
        tag: "datasets",
        children: ["post-mortem imaging"],
      },
    ],
  },
];

const TAG_ALIASES = new Map([
  ["dmri", "diffusion mri"],
  ["diffusion mri tractography", "tractography"],
  ["fmri", "functional mri"],
  ["functional connectivity", "functional mri"],
  ["rs-fmri", "resting-state fmri"],
  ["rs fmri", "resting-state fmri"],
  ["resting-state fmri", "resting-state fmri"],
  ["resting state fmri", "resting-state fmri"],
  ["connectome", "structural connectome"],
  ["network neuroscience", "connectomics"],
  ["ultra-high gradient", "ultra-high gradient mri"],
]);

const TAG_PATHS = new Map();
const TAG_ORDER = new Map();

let nextOrder = 0;

for (const branch of TAG_TREE) {
  indexBranch(branch, []);
}

function indexBranch(branch, parentPath) {
  const node = typeof branch === "string" ? { tag: branch, children: [] } : branch;
  const tag = normalizeTagName(node.tag);
  const path = [...parentPath, tag];

  TAG_PATHS.set(tag, path);
  TAG_ORDER.set(tag, nextOrder);
  nextOrder += 1;

  for (const child of node.children || []) {
    indexBranch(child, path);
  }
}

export function normalizeTagName(tag) {
  const normalized = String(tag).trim().toLowerCase().replace(/\s+/g, " ");
  return TAG_ALIASES.get(normalized) || normalized;
}

export function normalizePaperTags(tags) {
  return sortTagsByHierarchy([...new Set(tags.map((tag) => normalizeTagName(tag)).filter(Boolean))]);
}

export function expandPaperTags(tags) {
  const expanded = new Set();

  for (const tag of normalizePaperTags(tags)) {
    for (const ancestor of getTagPath(tag)) {
      expanded.add(ancestor);
    }
  }

  return sortTagsByHierarchy([...expanded]);
}

export function getTagPath(tag) {
  const normalized = normalizeTagName(tag);
  return TAG_PATHS.get(normalized) || [normalized];
}

export function getTagDepth(tag) {
  return getTagPath(tag).length - 1;
}

export function getTagRoot(tag) {
  return getTagPath(tag)[0];
}

export function sortTagsByHierarchy(tags) {
  return [...tags].sort((left, right) => {
    const leftPath = getTagPath(left);
    const rightPath = getTagPath(right);
    const leftRootOrder = TAG_ORDER.get(leftPath[0]) ?? Number.MAX_SAFE_INTEGER;
    const rightRootOrder = TAG_ORDER.get(rightPath[0]) ?? Number.MAX_SAFE_INTEGER;

    if (leftRootOrder !== rightRootOrder) {
      return leftRootOrder - rightRootOrder;
    }

    const leftOrder = TAG_ORDER.get(normalizeTagName(left)) ?? Number.MAX_SAFE_INTEGER;
    const rightOrder = TAG_ORDER.get(normalizeTagName(right)) ?? Number.MAX_SAFE_INTEGER;

    if (leftOrder !== rightOrder) {
      return leftOrder - rightOrder;
    }

    return normalizeTagName(left).localeCompare(normalizeTagName(right));
  });
}

export function groupTagsByRoot(tags) {
  const grouped = new Map();

  for (const tag of sortTagsByHierarchy(tags)) {
    const root = getTagRoot(tag);
    const entries = grouped.get(root) || [];
    entries.push({
      tag: normalizeTagName(tag),
      depth: getTagDepth(tag),
      path: getTagPath(tag),
    });
    grouped.set(root, entries);
  }

  return [...grouped.entries()].map(([root, entries]) => ({ root, entries }));
}

export function formatTagPath(tag) {
  return getTagPath(tag).join(" / ");
}

export const canonicalTagPrompt = [...TAG_ORDER.keys()].join(", ");
