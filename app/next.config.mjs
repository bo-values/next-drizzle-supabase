/** @type {import('next').NextConfig} */
const nextConfig = {
    basePath: "/app",
    output: "export",
    images: { unoptimized: true } ,
    // webpack: (config, { webpack }) => {
    //     config.plugins.push(new webpack.IgnorePlugin({
    //         resourceRegExp: /^pg-native$|^cloudflare:sockets$|^node:stream$/,
    //     }))
    //     return config
    // },
}

export default nextConfig