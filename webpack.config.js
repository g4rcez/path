const path = require("path");
const nodeExternals = require("webpack-node-externals");

module.exports = {
    entry: ["./src/index.ts"],
    watch: false,
    target: "node",
    externals: [nodeExternals({})],
    mode: "development",
    resolve: {
        extensions: [".ts"],
        alias: {
            "@/*": path.resolve(__dirname, "src/")
        }
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.js"
    },
    module: {
        strictExportPresence: false,
        rules: [
            { parser: { requireEnsure: true } },
            {
                test: /.ts?$/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true
                        }
                    }
                ],
                exclude: /node_modules/
            },
            {
                oneOf: [
                    {
                        test: /\.ts$/,
                        include: path.resolve(__dirname, "src/"),
                        loader: require.resolve("babel-loader"),
                        options: {
                            plugins: [
                                [
                                    require.resolve("babel-plugin-module-resolver"),
                                    {
                                        root: [path.resolve(__dirname, "src/")],
                                        extensions: [".ts", ".json"],
                                        alias: {
                                            "@": "./src/"
                                        }
                                    }
                                ]
                            ],
                            cacheDirectory: true,
                            cacheCompression: false,
                            compact: true
                        }
                    }
                ]
            }
        ]
    }
};
