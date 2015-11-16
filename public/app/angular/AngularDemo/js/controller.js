/**
 * Created by Administrator on 2015/7/20.
 */
angular.module("angularapp",[
					"ui.router",
					"ui.bootstrap"]).controller("uiCtr",["$scope",function($scope){
     $scope.test="tt";
	 $scope.alerts = [
		{ type: 'danger', msg: 'Oh snap! Change a few things up and try submitting again.' },
		{ type: 'success', msg: 'Well done! You successfully read this important alert message.' }
	  ];
	
	  $scope.addAlert = function() {
		$scope.alerts.push({msg: 'Another alert!'});
	  };
	
	  $scope.closeAlert = function(index) {
		$scope.alerts.splice(index, 1);
	  };
  }])