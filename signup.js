<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="style.css" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sign up</title>
  </head>
  <body>
    <script src="signin.js"></script>
    <div class="outer-box">
      <div class="inner-box">
        <header class="signUp-header">
          <h1>SignUp</h1>
          <p>it just takes 30 sec</p>
        </header>
        <main class="signUp-body">
          <form action="#">
            <p>
              <label for="FirstName">First Name</label>
              <input
                type="text"
                id="FirstName"
                placeholder="First Name"
                required
              />
            </p>
            <p>
              <label for="LastName">Last Name</label>
              <input
                type="text"
                id="LastName"
                placeholder="Last Name"
                required
              />
            </p>
            <p>
              <label for="email">Email address</label>
              <input type="email" id="email" placeholder="email" required />
            </p>
            <p>
              <label for="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="password"
                required
              />
            </p>
            <p>
              <input type="submit" id="submit" value="create account" />
            </p>
          </form>
        </main>
        <footer class="signUp-footer">
          <p>already have an account <a href="login.html">login</a></p>
        </footer>
      </div>
      <div class="circle c1"></div>
      <div class="circle c2"></div>
    </div>
  </body>
</html>
