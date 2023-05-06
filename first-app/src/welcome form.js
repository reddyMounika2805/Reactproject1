import React, { useState } from "react";

function LandingPage() {
  const [username, setUsername] = useState("");
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

 
  function handleFormSubmit(event) {
    event.preventDefault();
    
    setUsername("mounika"); 
  }

 
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <div>
      {username ? (
        
        <h1>Welcome, {username}!</h1>
      ) : (
      
        <div>
          <h1>Welcome, guest!</h1>
          <form onSubmit={handleFormSubmit}>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                name="password"
                value={formValues.password}
                onChange={handleInputChange}
              />
            </label>
            <br />
            <button type="submit">Log in</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default LandingPage;
