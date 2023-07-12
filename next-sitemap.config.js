/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.NEXT_PUBLIC_WORDPRESS_URL || 'https://cos-laboratories.com/',
    generateRobotsTxt: true, // (optional)
    // ...other options
  }