import React from "react";
import PropTypes from "prop-types";
import CustomModal from "./CustomModal";
import UserTable from "./UserTable";
import UserDetail from "./UserDetails";
import { useModalWithData } from "../hooks/useModalWithData";

const UserInformation = props => {
  const {
    modalOpen,
    selected,
    setSelected,
    setModalState
  } = useModalWithData();
  const { data } = props;

  return (
    <div>
      <div style={{ padding: "1rem" }} />
      <CustomModal
        title="User Detail"
        isActive={modalOpen}
        handleClose={() => setModalState(false)}
      >
        <UserDetail data={selected} />
      </CustomModal>

      <UserTable
        data={data}
        setSelected={setSelected}
        setModalState={setModalState}
      />
    </div>
  );
};

UserInformation.propTypes = {
  data: PropTypes.object.isRequired
};
export default UserInformation;
