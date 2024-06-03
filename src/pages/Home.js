import React from "react";
import { Link } from "react-router-dom";
import Login from "../components/Auth/Login";
import SignUp from "../components/Auth/Signup";
import { Container } from "react-bootstrap";

function Home() {
  return (

    <Container className="text-center">
      <h2>Welcome to the Personal Task Manager</h2>
      <Login />
      <SignUp />
      <Link to="/dashboard" className="btn btn-primary mt-3">
        Got to Dashboard
      </Link>
    </Container>
  );
}

export default Home;
