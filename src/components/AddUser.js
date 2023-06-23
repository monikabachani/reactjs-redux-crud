import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const AddUser = () => {
  const history = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // Add user logic here
    history('/');
  };

  return (
    <div>
      <h1>Add User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Button variant="primary" type="submit">Add</Button>
      </Form>
    </div>
  );
};

export default AddUser;
