const repoName = 'tats-website-trial';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: `/${repoName}`,
  assetPrefix: `/${repoName}/`,
  images: {
    uno