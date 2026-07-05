import type { NextConfig } from 'next';

const configuredBasePath =
  process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? '';

const basePath =
  configuredBasePath === '/' ? '' : configuredBasePath.replace(/\/$/, '');

const nextConfig: NextConfig = {
  output: 'export',
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
