module.exports = {
    // ...
    resolve: {
        fallback: {
            "http": require.resolve("stream-http"),
            "https": require.resolve("https-browserify"),
            "fs": false,
            "os": require.resolve("os-browserify/browser"),
            "path": require.resolve("path-browserify"),
            "stream": require.resolve("stream-browserify"),
            "tls": false,
            "zlib": require.resolve("browserify-zlib")
        }
    }
};
    