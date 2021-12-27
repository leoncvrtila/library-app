import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom'
import Layout from './components/Layout';

import AllBooks from './components/Books/AllBooks';
import BorrowedBooks from './components/Books/BorrowedBooks';
import AllUsers from './components/Users/AllUsers';
import AddBook from './components/Books/AddBook';
import AddUser from './components/Users/AddUser';
import EditBook from './components/Books/EditBook';
import EditUser from './components/Users/EditUser';

function App() {

  return (

    <Layout>

      <Routes>

        <Route path="/" exact element={<AllBooks />} />
          
        <Route path="/borrowed-books" exact element={<BorrowedBooks />} />

        <Route path="/all-users" exact element={<AllUsers />} />

        <Route path="/add-book" exact element={<AddBook />} />

        <Route path="/add-user/" exact element={<AddUser />} />
            
        <Route path="/edit-book/:id" exact element={<EditBook />}/>

        <Route path="/edit-user/:id" exact element={<EditUser />}/>
            
        <Route path='*' element={<Navigate to='/' />} />
          
      </Routes>

    </Layout>

  );

}

export default App;
