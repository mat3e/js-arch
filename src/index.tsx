import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Main } from './Main';
import { Projects } from './projects';
import { Tags } from './tags';
import { Users } from './users';

ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main/>}>
            <Route path="projects/*" element={<Projects/>}/>
            <Route path="tags/*" element={<Tags/>}/>
            <Route path="users/*" element={<Users/>}/>
            <Route
                path="*"
                element={
                  <div style={{padding: "1rem"}}>
                    <p>There's nothing here!</p>
                  </div>
                }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
);
