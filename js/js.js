function fetchUserInfo(access_token) {
	//return youraccess_token = access_token;
	/*var userVal = 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+access_token;
	console.log(userVal);*/

	var newT = $.ajax({
		datatype: 'json',
		url: 'https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token='+access_token,
		data: data,
		success: success
	});
	console.log(newT);
}

function showLanding() {
	$('#login').slideUp('fast', function(){
		$('#landing').slideDown('fast');
	});
}

function signinCallback(authResult) {
	if (authResult['status']['signed_in']) {
		// Update the app to reflect a signed in user
		// Hide the sign-in button now that the user is authorized, for example:
		document.getElementById('signinButton').setAttribute('style', 'display: none');
		console.log(authResult);

		fetchUserInfo(authResult.access_token);

		showLanding();

	} else {
		// Update the app to reflect a signed out user
		// Possible error values:
		//   "user_signed_out" - User is signed-out
		//   "access_denied" - User denied access to your app
		//   "immediate_failed" - Could not automatically log in the user
		console.log('Sign-in state: ' + authResult['error']);
	}
}
