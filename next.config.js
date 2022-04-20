const withPlugins = require('next-compose-plugins')
const withImages = require('next-images')

const nextConfig = {
  images: {
    domains: [
      'https://mapa-da-informacao-bucket.s3.sa-east-1.amazonaws.com',
      'mapa-da-informacao-bucket.s3.sa-east-1.amazonaws.com',
      
      'https://mapa-da-informacao-test-bucket.s3.amazonaws.com',
      'mapa-da-informacao-test-bucket.s3.amazonaws.com',

      'https://mapa-da-informacao-multimidia.s3.amazonaws.com/',
      'mapa-da-informacao-multimidia.s3.amazonaws.com',
    ]
  },
  env: {
    STATUS: process.env.NODE_ENV,
  },
  reactStrictMode: true,
}

module.exports = withPlugins([[withImages]], nextConfig)