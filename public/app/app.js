// JavaScript Document
angular.module('app',[
					"ui.router",
					"ui.bootstrap"])
/**
 * 把$state和$stateParams这两个对象放到$rootScope上，方便其它地方引用和注入。
 * 这里的run方法只会在angular启动的时候运行一次。
 * @param  {[type]} $rootScope
 * @param  {[type]} $state
 * @param  {[type]} $stateParams
 * @return {[type]}
 */
.run(["$rootScope","$state","$stateParams",function($rootScope, $state, $stateParams) {
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
}])
/**
 * 配置路由。
 * @param  {[type]} $stateProvider
 * @param  {[type]} $urlRouterProvider
 * @return {[type]}
 */
 .config(["$stateProvider","$urlRouterProvider",function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('index');
	$stateProvider
		.state('index',{
			url:"/index",			
			views:{
					'main':{
						templateUrl: 'index.tpl.html',	
						controller :function($scope){
							$scope.Index={"title":"各种语言,工具从下载到启动Hello World教程","rows":[{"href":"angular/AngularDemo/index.html","title":"angular.js","background":"#3498DB","url":true},{"href":"Node","title":"Node.js","background":"#E48632"},{"href":"GitHub","title":"GitHub.js","background":"#F0DB4F"}]}
						}				
					}
				}
		}).state('angularDemo',{
			url:"/angularDemo",
			views:{
					'main':{
						templateUrl: 'angular/AngularDemo/index.html',
						controller: 'uiCtr'					
					}
				}
		})
	
		
}])