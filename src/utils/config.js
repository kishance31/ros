const AppConfigs = {
    paypalConfig: {
        env: 'sandbox',
        client: {
            sandbox: "ASdximpzmvQOFyLCKUggkhg7xcaAmlclkijwSd5E5b5UQlsnDM8ju_7Q633l36iegKRvE-l-d5bqFcmC",
        }
    },
    serverConfig: {
        // host: 'http://localhost',
        // port: '4000',
        host: process.env.REACT_APP_HOST,
        port: process.env.REACT_APP_PORT,
        defaultRoute: 'api',
        userRoute: 'corporate-admin',
        employee: 'employee',
        license: 'license',
        branch: 'branch',
        purchaseLicense:'purchaseLicense',
        // serverUrl: 'http://localhost:4000/api'
        serverUrl: process.env.REACT_APP_SERVER_URL
    }
};

export default AppConfigs;