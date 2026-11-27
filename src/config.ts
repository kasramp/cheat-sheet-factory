export const site = {
  url: 'https://cheatsheetfactory.geekyhacker.com',
  title: 'Cheat Sheet Factory'
} as const

export const disqus = {
  enabled: false,
  host: ''
} as const

export const googleAnalytics = {
  enabled: false,
  measurementId: ''
} as const

export const github = {
  repositoryUrl: 'https://github.com/kasramp/cheat-sheet-factory',
  branch: 'gh-pages'
} as const

export const urls = {
  newCheatsheetUrl:
    'https://github.com/kasramp/cheat-sheet-factory/issues/new'
} as const

export const carbon = {
  enabled: false,
  // src: 'https://cdn.carbonads.com/carbon.js?serve=CE7IK5QM&placement=devhintsio'
  src: 'https://pubsrv.devhints.io/carbon.js?serve=CE7IK5QM&placement=devhintsio',
  // Cover format, A/B tested against the zone above
  coverSrc:
    'https://pubsrv.devhints.io/carbon.js?serve=CWYIL2JI&placement=devhintsio&format=cover'
} as const

// Nav order. Every category except Others holds 3-16 non-snippet sheets;
// Others holds at most 12. Enforced by src/lib/categories.test.ts.
export const categories = [
  'Linux',
  'macOS',
  'FreeBSD',
  'Container',
  'Ops',
  'Database',
  'Kafka',
  'Java',
  'Kotlin',
  'Python',
  'Javascript',
  'JavaScript',
  'Front-end',
  'IDE',
  'Version Control',
  'Web Server',
  'SaaS',
  'Others'
]

export const announcement = {
  id: '2026-10-03',
  title: `From the blog`,
  body: `I've started a new blog with some insights on web development. Have a look! [**ricostacruz.com/posts**](https://ricostacruz.com/posts?utm_source=devhints)`,
  // Display probability; bump `id` when retuning (existing visitors keep their roll).
  chance: 0
}
