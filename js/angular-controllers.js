'use strict';

/* Controllers */

var diagramControllers = angular.module('diagramControllers', []);

diagramControllers.controller('diagramGetDataController', ['$scope', 'invoices',
	function($scope, invoices) {
		$scope.invoices = invoices.query();
  	}	

]);