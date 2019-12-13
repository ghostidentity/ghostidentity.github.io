const createMessage = function saveToFirebase(email, message) {
    var messageObject = {
        email: email,
        message: message
    }

    firebase.database().ref('clientsMessage').push().set(messageObject)
        .then(function(snapshot) {
            console.log("Message sent")
        }, function(error) {
            console.log('error' + error);
        });

}


