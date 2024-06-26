import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Login
  };

  return (
 
    <div className="container">
        <div className="row flex justify-content-center">
            <div className="col-12 col-sm-8 col-md-6 col-lg-4">
            <Form onSubmit={handleSubmit} className="mb-4">
          <h3 className="form-title">Log in</h3>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit" className="w-100">
            Log in
          </Button>
        </Form>
            </div>
        
        </div>
        
    </div>
        

  );
}

export default Login;
