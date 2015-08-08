var app = angular.module( 'WebsiteApp', [] );

app.controller( 'WebsiteController', WebsiteController );

function WebsiteController(){ 
	var viewInstance = this;
	
	console.log( "Controller succesfully created" );
	console.debug(viewInstance);

}