/** @type {import('next').NextConfig} */
const path= require('path')
const nextConfig = {
    output: 'export',
    images: {
        loader: "default",
        path: "/img",
    }
}

module.exports = nextConfig