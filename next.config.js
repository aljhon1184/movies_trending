/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images:{
    domains: ['image.tmdb.org', 'https:/www.gravatar.com', 'upload.wikimedia.org', 'www.themoviedb.org', 'www.justwatch.com', 'www.gravatar.com']
  }
}

module.exports = nextConfig
