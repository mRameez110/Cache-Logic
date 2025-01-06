# User Auth

Application working:

Signup:
i) you can signup and login user by providing relevent credentials
ii) Server will check required credentials if all ok then transfer control to next midleware
iii) after credential, server will check in db is email unique or already in use
iv) If all conditions met, application will bypass to register controller

SignIn:
i) Sign in by providing credential(email and password)
ii)1st login auth will check request body, to pass the request to SignIn controler
