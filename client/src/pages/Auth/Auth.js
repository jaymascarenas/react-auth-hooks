import React, { Component } from "react";
import API from "../../utils/API";
import Login from "../../components/Login";
import Signup from "../../components/Signup";
import "./Auth.scss";
import { UserConsumer } from '../../context';

function Auth(props) {
  return (
    <UserConsumer>
      {({ data, inputChange, handleLogin, handleSignup }) => (
        <div className="authBox">
          {(props.action === "login") ? (
            <Login
              username={data.username}
              password={data.password}
              handleInputChange={inputChange}
              handleLogin={handleLogin}
            />
          ) : (
              <Signup
                firstname={data.firstname}
                lastname={data.lastname}
                email={data.email}
                username={data.username}
                password={data.password}
                handleInputChange={inputChange}
                handleSignup={handleSignup}
              />
            )}
        </div>
      )}
    </UserConsumer>
  );
}


export default Auth;