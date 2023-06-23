import React from 'react';
import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import UsersList from './components/UsersList';
import AddUser from './components/AddUser';
import EditUser from './components/EditUser';

function App() {
  return (
    <Router>
      <Container>
        <Routes>
          <Route exact path="/" Component={UsersList} />
          <Route path="/add" Component={AddUser} />
          <Route path="/edit/:id" Component={EditUser} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
