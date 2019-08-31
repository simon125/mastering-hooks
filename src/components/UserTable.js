import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  data: PropTypes.array,
  setSelected: PropTypes.func.isRequired,
  setModalState: PropTypes.func.isRequired
};

const UserTable = ({ data, setSelected, setModalState }) => {
  return (
    <table>
      {/* <thead>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Job Title/th>
          <th>Action</th>
        </tr>
      </thead> */}
      <tbody>
        {data.map(row => {
          const { id, name, age, job_title } = row;
          return (
            <tr key={id}>
              <td>{name}</td>
              <td>{age}</td>
              <td>{job_title}</td>
              <td>
                <button
                  onClick={() => {
                    setSelected(row);
                    setModalState(true);
                  }}
                >
                  View
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

UserTable.propTypes = propTypes;

export default UserTable;
