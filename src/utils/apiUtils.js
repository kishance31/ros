import axios from 'axios';
import AppConfigs from './config';

const {
    serverConfig: {
        defaultRoute,
        employee,
        host,
        port,
        userRoute,
        branch,
        license,
        purchaseLicense,
        serverUrl
    }
} = AppConfigs;

const defaultHeader = {
    'Content-Type': 'application/json'
}
const defaultMethod = "POST"

const serverUrls = {
    getHost: () => host,
    getPort: () => port,
    getDefaulUrl: () => `${host}:${port}/${defaultRoute}`,
    getCorporateUrl() {
        return `${userRoute}`;
    },
    getEmployeeUrl() {
        return `${this.getCorporateUrl()}/${employee}`;
    },
    getLicenseUrl() {
        return `${license}`;
    },
    getBranchUrl() {
        return `${branch}`;
    },
    getPurchaseLicenseUrl() {
        return `${this.getCorporateUrl()}/${purchaseLicense}`
    }
}

const apiCall = async ({url, data, headers, method}) => {
    try {
        let response = await axios({
            url: `${serverUrls.getDefaulUrl()}/${url || ""}`,
            method: method || defaultMethod,
            data: data || "",
            headers: {
                ...defaultHeader,
                ...headers
            },
        })
        return response.data;
    } catch (error) {
        return null;        
    }
}

const getServerCore = () => {
    return {
        serverUrls,
        apiCall,
        serverUrl
    }
}

export default getServerCore;