import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { User } from './User';

export function Users() {
  return (
      <Routes>
        <Route path="/:id" element={<User/>}/>
      </Routes>
  );
}
