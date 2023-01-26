import React from "react";

const Success = ({ user }) => {
  console.log(user);
  return (
    <div className="d-flex flex-column align-items-center">
      <h5>Thank you, {user.name}</h5>
      <p>Your order is on the way</p>
    </div>
  );
};

export default Success;
