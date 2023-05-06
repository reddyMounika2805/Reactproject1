import React, { useState } from 'react';

const ProfilePage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
    password: '',
  });

  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    emailAddress: '',
    password: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // perform form submission logic here
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.firstName || formData.firstName.length < 5) {
      errors.firstName = 'First name must be at least 5 characters long';
      isValid = false;
    }

    if (!formData.mobileNumber || !/^\d{10}$/.test(formData.mobileNumber)) {
      errors.mobileNumber = 'Mobile number must be 10 digits';
      isValid = false;
    }

    if (!formData.emailAddress) {
      errors.emailAddress = 'Email address is required';
      isValid = false;
    }

    if (!formData.password || !/(?=.*\d)(?=.*[A-Z])(?=.*\W)/.test(formData.password)) {
      errors.password = 'Password must be at least 5 characters long and contain an uppercase letter, a number, and a special character';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="firstName">First name:</label>
        <input type="text" id="firstName" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        {formErrors.firstName && <div className="error">{formErrors.firstName}</div>}
      </div>
      <div>
        <label htmlFor="lastName">Last name:</label>
        <input type="text" id="lastName" name="lastName" value={formData.lastName} onChange={handleInputChange} />
      </div>
      <div>
        <label htmlFor="mobileNumber">Mobile number:</label>
        <input type="text" id="mobileNumber" name="mobileNumber" value={formData.mobileNumber} onChange={handleInputChange} />
        {formErrors.mobileNumber && <div className="error">{formErrors.mobileNumber}</div>}
      </div>
      <div>
        <label htmlFor="emailAddress">Email address:</label>
        <input type="email" id="emailAddress" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} />
        {formErrors.emailAddress && <div className="error">{formErrors.emailAddress}</div>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" value={formData.password} onChange={handleInputChange} />
        {formErrors.password && <div className="error">{formErrors.password}</div>}
      </div>
      <button type="submit" disabled={!validateForm()}>Submit</button>
    </form>
  );
};

export default ProfilePage;
