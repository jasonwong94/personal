var app = angular.module( 'WebsiteApp', [] );

app.controller( 'WebsiteController', WebsiteController );

function WebsiteController(){ 
	var viewInstance = this;

	// variables
	viewInstance.VisitorName = null;
	viewInstance.VisitorType = VisitorList[1];

	viewInstance.Type = VisitorList;
	viewInstance.Interests = Interests;
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

var VisitorList = [ 
	'Recruiter',
	'Visitor',
	'Professor',
	'Friend',
	'NyanCat'
];


var Interests = {
	'Recruiter' : 	[ 0, 0, 0, 0, 1],
	'Visitor' : 	[ 0, 0, 0, 0, 1],
	'Professor' : 	[ 0, 0, 0, 0, 1],
	'Friend' : 		[ 0, 0, 0, 0, 1],
	'NyanCat' : 	[ 0, 0, 0, 0, 1]
};