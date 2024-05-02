/** @type {import('next').NextConfig} */
const nextConfig = {
    // basePath: "",
    // output: "export",
    // images: { unoptimized: true },
    webpack: (config, { webpack }) => {
        config.plugins.push(new webpack.IgnorePlugin({
            resourceRegExp: /^pg-native$|^cloudflare:sockets$/,
            // resourceRegExp: /^pg-native$|^cloudflare:sockets$|^node:stream$/,
        }))
        // config.plugins.push(new webpack.NormalModuleReplacementPlugin(/^node:/, (resource) => {
        //     resource.request = resource.request.replace(/^node:/, '');
        //   }))
        return config
    },
}

export default nextConfig