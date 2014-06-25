function display(message) {

	$('.messages').append("<li>"+ message + "</li>");
}

function fetch(callback) {

	 $.ajax({
          type: "GET",
          url: "https://api.parse.com/1/classes/chats?order=-createdAt",
          data: ""
     }).done(function(results){
     	//console.log(callback(results));
     	callback(results);
     });     
}

function send(message) {

	 $.ajax({
          type: "POST",
          url: "https://api.parse.com/1/classes/chats",
          data: JSON.stringify({text: message}),
     }).done(function(results){
     	console.log(results);
     }); 
}


function enableButton() {
	$('.draft').change(function(){

      $('.send').prop('disabled', false);

    });
}
