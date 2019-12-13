const createMessage = async function saveToFirebase(name, email, subject, message) {

    var result = false;
    var messageObject = {
        name: name,
        email: email,
        subject: subject,
        message: message
    }

    firebase.database().ref('message').push().set(messageObject)
        .then(function() {
             result = true;
            console.log("Message sent to firebase db.");
        }, function(error) {
            console.log('error' + error);
    });
    
   return await result

}


