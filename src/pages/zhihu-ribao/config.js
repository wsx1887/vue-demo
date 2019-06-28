export default {
    proxy: {
        //baseUrl:'http://127.0.0.1:9090/api/proxy/'
        baseUrl: process.env.NODE_ENV === 'production' ? '/api/proxy/' : 'http://127.0.0.1:9090/api/proxy/'
    }
}