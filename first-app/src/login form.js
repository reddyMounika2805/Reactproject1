import React from 'react';

function ProfileForm({ user }) {
  return (
    <form>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input type="text" id="firstName" value={user.firstName} readOnly />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input type="text" id="lastName" value={user.lastName} readOnly />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" value={user.email} readOnly />
      </div>
      <div>
        <label htmlFor="phoneNumber">Phone Number</label>
        <input type="tel" id="phoneNumber" value={user.phoneNumber} readOnly />
      </div>
    </form>
  );
}

export default ProfileForm;
