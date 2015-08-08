var app = angular.module( 'WebsiteApp', [] );

app.controller( 'WebsiteController', WebsiteController );

function WebsiteController(){ 
	var viewInstance = this;

	viewInstance.Name = null;
	viewInstance.enterUser = enterUser; 

	console.log( "Controller succesfully created" );
	console.debug(viewInstance);

	function enterUser( name_ ){
		console.debug( name_ );
		viewInstance.Name = name_;
		return;
	}
}