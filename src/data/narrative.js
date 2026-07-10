/**
 * src/data/narrative.js
 *
 * Single source of truth for narrative constants that appear in multiple
 * components simultaneously.
 *
 * WHY THIS FILE EXISTS:
 * Several values — the resume URL, social links, and the role title —
 * were hardcoded independently in Home.jsx, Header.jsx, About.jsx, and
 * Footer.jsx. When one changes (e.g. a new resume link, a role title
 * update for Phase 1), all four files need updating. Missing one
 * produces inconsistencies on the live site.
 *
 * Update a value here; every consumer updates automatically.
 */

/** Resume download / view link. Update here when the document changes. */
export const RESUME_URL =
  'https://drive.google.com/file/d/1l0ZqMl5uNvoKYu29ikyj8A5FS1PVzO7T/view?usp=sharing'

/** Social and contact links. */
export const GITHUB_URL   = 'https://github.com/Savics407'
export const LINKEDIN_URL = 'https://www.linkedin.com/in/victor-adighibe-b4a89923a/'
export const X_URL  = 'https://x.com/intent/follow?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1618149381307498498%7Ctwgr%5Ee18da2e5388b93195a7b63bd6073ecff506f3bdd%7Ctwcon%5Es1_&ref_url=https%3A%2F%2Flinktr.ee%2Fsavics&screen_name=_Savics'
export const EMAIL        = 'savicstech@gmail.com'

/**
 * Years of professional experience.
 * Appears in: hero sub-copy, Stats section, About copy, Experience subtitle.
 * Update once per year.
 */
export const YEARS_EXPERIENCE = 7

/**
 * Role title — the primary professional label shown across the site.
 */
export const ROLE_TITLE = 'Senior Software Engineer'

/**
 * Primary hero subtitle/tagline. Leads with domain breadth and scope before tools.
 */
export const HERO_TAGLINE =
  'Senior Software Engineer specializing in real-time communication, embeddable developer tooling, and web platforms. I am drawn to systems where clean architecture and low latency directly determine whether a product feels effortless or broken.'

/**
 * SEO meta description for page title tags and social previews.
 */
export const META_DESCRIPTION =
  'Victor Adighibe is a Senior Software Engineer with 7+ years building enterprise SaaS platforms, real-time communication systems, and developer tooling.'
