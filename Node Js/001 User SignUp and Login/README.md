# User Auth

Application working:

i) you can signup and login user by providing relevent credentials
ii) Server will check required credentials if all ok then transfer control to next midleware
iii) after credential, server will check in db is email unique or already in use
iv) If all conditions met, application will bypass to register controller
