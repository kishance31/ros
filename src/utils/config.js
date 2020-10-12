const AppConfigs = {
    paypalConfig: {
        env: 'sandbox',
        client: {
            sandbox: "Aa2048MyOgNW9UgvO70c2WG2_cXt2wVM05r5kAGVYc6xJYlMw4AS4a1K9DRLB37PUvt11996gF8k4UgN",
        }
    },
    serverConfig: {
        host: 'http://localhost',
        port: '4000',
        defaultRoute: 'api',
        userRoute: 'corporate-admin',
        employee: 'employee',
        license: 'license',
        branch: 'branch',
        purchaseLicense:'purchaseLicense',
        serverUrl: 'http://localhost:4000/api'
    }
};

export default AppConfigs;