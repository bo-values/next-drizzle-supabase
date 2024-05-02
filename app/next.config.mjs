/** @type {import('next').NextConfig} */
const nextConfig = {
    // webpack: (config, { webpack,isServer }) => {
    //     // config.plugins.push(new webpack.IgnorePlugin({
    //     //     resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
    //     // }))
    //     if(isServer) {
    //         config.externals.push('node:stream');
    //         config.externals.push('cloudflare:sockets');
    //     }
    //     return config
    // },
}

export default nextConfig