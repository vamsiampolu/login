The routes provided by this application are:

1. /auth/local/login

2. /auth/local/register

3. /google

4. /google/callback

5. /twitter

6. /twitter/callback

7. /facebook

8. /facebook/callback

9. /dropbox

10. /dropbox/callback

11. /linkedin

12. /linkedin/callback

All routes have been configured to use `passport`. We will have to use `jsonwebtoken` and `express-jwt` as a middleware to decode the app. There needs to be a frontend app that consumes this and performs authentication in order to test the authentication further.
