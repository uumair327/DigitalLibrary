<?php
session_start();

// If user is already logged in, redirect to home page
if (isset($_SESSION['username'])) {
  header('Location: index.php');
  exit;
}

// If form is submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Get form data
  $username = $_POST['username'];
  $password = $_POST['password'];

  // Connect to database
  $conn = mysqli_connect('localhost', 'username', 'password', 'database_name');

  // Check if user exists
  $query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
  $result = mysqli_query($conn, $query);

  if (mysqli_num_rows($result) === 1) {
    // User exists, set session variable and redirect to home page
    $_SESSION['username'] = $username;
    header('Location: index.php');
    exit;
  } else {
    // User does not exist or password is incorrect, display error message
    $error = 'Invalid username or password';
  }
}

?>

<!DOCTYPE html>
<html>
  <head>
    <title>Login</title>
  </head>
  <body>
    <h1>Login</h1>

    <?php if (isset($error)): ?>
      <p><?php echo $error; ?></p>
    <?php endif; ?>

    <form method="POST">
      <label>Username:</label>
      <input type="text" name="username"><br>

      <label>Password:</label>
      <input type="password" name="password"><br>

      <button type="submit">Login</button>
    </form>
  </body>
</html>
