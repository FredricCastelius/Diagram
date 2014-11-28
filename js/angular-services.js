'use strict';

/* Services */

var diagramServices = angular.module('diagramServices', ['ngResource']);

diagramServices.factory('invoices', ['$resource',
  function($resource){
     return $resource('php/get-data.php', {}, { query: { method:'GET' }, isArray: true }  );
	
}]);
