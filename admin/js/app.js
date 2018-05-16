// config firebase
	var config = {
		apiKey: "AIzaSyA7T_8C8IoNd4_SWIho9-tqe15nOw9RNhU",
		authDomain: "wallpaper-dd7d1.firebaseapp.com",
		databaseURL: "https://wallpaper-dd7d1.firebaseio.com",
		projectId: "wallpaper-dd7d1",
		storageBucket: "wallpaper-dd7d1.appspot.com",
		messagingSenderId: "390687655711"
	};

	firebase.initializeApp(config);
	firebase.auth.Auth.Persistence.LOCAL;

// handle login btn + logout
	$("#btn-login").click(function() {
		var email = $("#email").val();
		var pass =  $("#password").val();

		var result = firebase.auth().signInWithEmailAndPassword(email, pass);
		result.catch(function(error){
			var errCode = error.code;
			var errMsg = error.message;
			console.log(errCode + " : " + errMsg);
		});
	});

	$("#btn-logout").click(function() {
		firebase.auth().signOut();
	});

// switch views
	function switchView(v) {
		$.get({
			url: v,
			cache: false
		}).then(function(data) {
			$("#container").html(data);
		});
	}