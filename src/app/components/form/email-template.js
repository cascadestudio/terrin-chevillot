import React from "react";

export const EmailTemplate = ({
  username,
  email,
  phone,
  projectType,
  budget,
  message,
}) => {
  return (
    <div>
      <p>Nom : {username}</p>
      <p>Email : {email}</p>
      <p>Téléphone : {phone}</p>
      <p>Type de projet : {projectType}</p>
      <p>Budget : {budget}</p>
      <p>Message : {message}</p>
    </div>
  );
};
