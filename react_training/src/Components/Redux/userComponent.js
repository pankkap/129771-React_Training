import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUsers } from "./user/userActions";

function UserComponent({ fetchUsers, userData }) {
  useEffect(() => {
    fetchUsers();
  }, []);
  return (
    <div>
      {userData.loading ? (
        <h2>Loading..</h2>
      ) : userData.err ? (
        <h2>{userData.err}</h2>
      ) : (
        <>
          <h2>List of Users</h2>
          {userData &&
            userData.users &&
            userData.users.map((u) => <li key={u.id}>{u.name}</li>)}
        </>
      )}
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    userData: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserComponent);
