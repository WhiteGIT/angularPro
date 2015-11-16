/**
 * Created by Administrator on 2015/7/20.
 */
(function (window, document, undefined) {
	 angular.module("mydir",["mydir.myTa"])
	 angular.module("mydir.myTa",[]).directive("myta",function($http,$q){
		return{
			restrict:'E',
			template:'<div>{{say}}</div>',
			scope:{},
			link :function(scope, element, attrs){
				scope.say="Hello world"
				 delay = $q.defer();
				 var url='/app/angular/test/dr1/my.json'
				  $http.get(url).success(function(data) {
					  return delay.resolve(data);
					});
				  delay.promise.then(function(data) {
					scope.say+=data[0].id
					})
			},
			
		}
	 })
})(window, document);