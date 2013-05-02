requirejs.config({
    //enforceDefine: true,
    baseUrl: "/js",
    paths: {
        'jquery': 'jquery-1.9.1',
        'knockout': 'knockout-2.2.1',
        'knockout.mapping': 'knockout.mapping-latest',        
    },
    shim: {
        'knockout': { deps: ['jquery'] }
    }
});