<form action="signup.php" method="post">
  <label for="first_name">First Name: </label>
  <input type="text" id="first_name" name="first_name" minlength="5" required><br><br>
  
  <label for="last_name">Last Name: </label>
  <input type="text" id="last_name" name="last_name"><br><br>
  
  <label for="mobile_number">Mobile Number: </label>
  <input type="tel" id="mobile_number" name="mobile_number" pattern="[0-9]{10}" required><br><br>
  
  <label for="email">Email Address: </label>
  <input type="email" id="email" name="email" required><br><br>
  
  <label for="password">Password: </label>
  <input type="password" id="password" name="password" pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{5,}$" required>
  <br>
  <small>Must contain at least one lowercase letter, one uppercase letter, one number, and one special character. Minimum length is 5 characters.</small>
  <br><br>
  
  <input type="submit" value="Sign Up">
</form>
