/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites(){
        return[
            {
                source: '/odotym/:path*',
                destination: 'http://localhost:3001/odotym/:path*'
            }
        ]
    }
}

module.exports = nextConfig
