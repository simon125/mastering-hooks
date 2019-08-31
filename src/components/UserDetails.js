import React from "react";
import PropTypes from "prop-types";

function UserDetail({ data }) {
  if (!data) return null;
  const { name, age, job_title, gender, country } = data;

  return (
    <div>
      <h4>Name: {name}</h4>
      <h4>Age: {age}</h4>
      <h4>Job Title: {job_title}</h4>
      <h4>Gender: {gender}</h4>
      <h4>Country: {country}</h4>
    </div>
  );
}

UserDetail.propTypes = {
  data: PropTypes.shape({
    name: PropTypes.string,
    age: PropTypes.number,
    job_title: PropTypes.string,
    gender: PropTypes.string,
    country: PropTypes.string
  })
};

export default UserDetail;
