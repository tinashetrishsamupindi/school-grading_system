function() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage= document.getElementById('error-message');

    //simulate server-side authentication logic
    //in real-world scenerio, this should be handled on the server

    if(username === 'demo' && password ==='password'){
        //redirect to index.html upon successful login
        window.location.href='index.html';
    }else{
        errorMessage.textContent='Invalid usernameor password';
    }
}