// GitHub Pages serves this site from a sub-path (e.g. /tats-website-trial),
// so any hardcoded absolute asset path (src="/images/x.png") needs this prefix.
// next/image and next/link handle this automatically; raw <img>/<source>/<a>
// tags do not, so use withBasePath() for those.
export const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

export function withBasePath(path: string): string {
  return `${BASE_PATH}${path}`;
}
