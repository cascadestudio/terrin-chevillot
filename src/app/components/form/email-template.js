import React from "react";

// A simple email template component that takes props
export const EmailTemplate = ({ firstName }) => {
  return (
    <div>
      <h1>Welcome, {firstName}!</h1>
      <p>We’re excited to have you onboard.</p>
    </div>
  );
};
