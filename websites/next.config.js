/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['react-tsparticles', 'tsparticles', 'tsparticles-engine'],
  output: 'standalone',
}

module.exports = nextConfig 