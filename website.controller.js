var app = angular.module( 'WebsiteApp', [] );

app.controller( 'WebsiteController', WebsiteController );

function WebsiteController(){ 
	var viewInstance = this;

	// variables
	viewInstance.Name = null;
	viewInstance.VisitorType = VisitorType;
	viewInstance.FormSubmitted = false;

	// functions
	viewInstance.submitUser = submitUser; 
	viewInstance.skipSubmit = skipSubmit; 


	console.log( "Controller succesfully created" );
	console.debug(viewInstance);

	function submitUser( name_ ){
		console.debug( "Welcome " + name_ + "!");
		viewInstance.Name = name_;
		viewInstance.FormSubmitted = true;
		return;
	}

	function skipSubmit(){
		console.debug( "Bummer :(" );
		viewInstance.Name = "Visitor";
		viewInstance.FormSubmitted = true;
		return;
	}
}

var VisitorType = [
	'Recruiter',
	'Visitor',
	'Professor',
	'Friend',
	'NyanCat'
];