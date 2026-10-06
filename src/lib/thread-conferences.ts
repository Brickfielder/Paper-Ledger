import { z } from 'zod';

const noteSchema = z.object({
  id: z.string().min(1), title: z.string().min(1), summary: z.string().min(1),
  speaker: z.string(), day: z.string(), time: z.string(), session: z.string(),
  verification_note: z.string(),
}).strict();
const conferenceSchema = z.object({
  format_version: z.literal(1), slug: z.string().regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/),
  name: z.string().min(1), dates: z.string(), location: z.string(), description: z.string(),
  programme_url: z.union([z.literal(''), z.string().url().startsWith('https://')]),
  updated_at: z.string().datetime(), notes: z.array(noteSchema).min(1),
}).strict();

export const threadConferences = Object.entries(
  import.meta.glob('../data/thread-conferences/*.json', { eager: true, import: 'default' }),
).map(([path, data]) => {
  const conference = conferenceSchema.parse(data);
  if (!path.endsWith(`/${conference.slug}.json`)) throw new Error(`Conference address does not match ${path}`);
  if (new Set(conference.notes.map((note) => note.id)).size !== conference.notes.length) {
    throw new Error(`Duplicate notes in ${path}`);
  }
  return conference;
}).sort((a, b) => b.updated_at.localeCompare(a.updated_at));
