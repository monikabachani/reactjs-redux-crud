import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const EditUser = () => {
  const { id } = useParams();
  const history = useNavigate();

  const handleSubmit = event => {
    event.preventDefault();
    // Update user logic here
    history('/');
  };

  return (
    <div>
      <h1>Edit User</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name" required />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" required />
        </Form.Group>
        <Button variant="primary" type="submit">Update</Button>
      </Form>
    </div>
  );
};

export default EditUser;
