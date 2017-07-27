require.config({
    baseUrl: '../',
    urlArgs: 'v=2',
    paths: {
        // require.js plugins
        text          : 'lib/requirejs/text',
        // jquery
        jquery        : 'lib/jquery/jquery-2.1.4.min',
		// vue
		vue           : 'lib/vue/vue',
		//其他辅助工具类
        underscore    : 'lib/lodash.min',
        iscroll       : 'lib/iscroll/iscroll-probe',
        moment        : 'lib/moment.min',
		tween         : 'lib/Tween',
		fastclick     : 'lib/fastclick',
		toastr        : 'lib/toastr.min',
		//路径
		componentPath : 'common/component',
		filterPath : 'common/filter',
		servicePath   : 'common/service',
		modulePath    : 'module'
    },
    waitSeconds: 5,
    shim: {
        underscore: {exports: '_'},
        iscroll: {exports: 'IScroll'},
    }
});