angular.module('angularDynamicNavigation', []).directive('navItem', ['$location', function($location){
	return {
		restrict: 'A',
		link: function(scope, elem, attrs){
			scope.$watch(function() {
			    return $location.path();
			}, function(route){
				elem.removeClass(attrs['navItemClass']);
				var rootRoute = route.match(/\/[a-z0-9A-Z]+\//);
				if(rootRoute)
					route = rootRoute[0].substring(0, rootRoute[0].length - 1);
				if(route === attrs['navItemRoute'])
					elem.addClass(attrs['navItemClass']);
			});
		}
	}
}]);