/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    webpack(config) {
        config.module.rules.push({
            test: /\.svg$/i,
            issuer: /\.[jt]sx?$/,
            loader: '@svgr/webpack',
            options: {
                svgo: true,
                svgoConfig: {
                    plugins: [
                        {
                            name: 'preset-default',
                            params: {
                                overrides: { removeViewBox: false }
                            }
                        }
                    ]
                }
            }
        });

        return config;
    }
};

module.exports = nextConfig;
