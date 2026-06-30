const configuredBasePath =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH ??
  (process.env.NODE_ENV === 'production' ? '/otd-website' : '');

export const SITE_BASE_PATH =
  configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');

export function withBasePath(path: `/${string}`) {
  return `${SITE_BASE_PATH}${path}`;
}
