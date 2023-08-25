/** @type {import('next').NextConfig} */
const path= require('path')
const nextConfig = {
    output: 'export',
    images: {
        loader: "akamai",
        path: "/img",
    }
}

module.exports = nextConfig