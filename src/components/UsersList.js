import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Table, Button } from 'react-bootstrap';
import { setUsers } from '../redux/users/usersSlice';
import { useDispatch, useSelector } from 'react-redux';
import usersAPI from '../redux/users/usersAPI';

const UsersList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users?.users);
  const getUsers = async () => {
    const allusers = await usersAPI.getAllUsers();
    dispatch(setUsers(allusers));
  }
  useEffect(() => {
    getUsers();
  }, [])

  return (
    <div>
      <h1>Users List</h1>
      <Link to="/add" className="btn btn-primary mb-3">Add User</Link>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Phone</th>
            <th>City</th>
            <th>Zip Code</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 && users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.username}</td>
              <td>{user.phone}</td>
              <td>{user.address?.city}</td>
              <td>{user.address?.zipcode}</td>
              <td>
                <Link to={`/edit/${user.id}`} className="btn btn-sm btn-primary">Edit</Link>
                <Button variant="danger" size="sm" className="ml-2">Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default UsersList;
