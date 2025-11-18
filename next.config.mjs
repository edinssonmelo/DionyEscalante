/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Si tu repositorio NO se llama "username.github.io", descomenta y ajusta el basePath
  // basePath: '/LandingRMP', // Reemplaza 'LandingRMP' con el nombre de tu repositorio
  // trailingSlash: true,
}

export default nextConfig
