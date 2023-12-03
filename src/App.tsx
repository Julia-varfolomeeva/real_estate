import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from '@mui/material/Container';

import { Home } from './pages/Home';
import { Login } from './pages/Login';
import { Registration } from './pages/Registration';
import Header from './components/Header/Header';


const App: React.FC = () => {
    return (
        <div className="App">
            <Container
                maxWidth="xl"
                style={{ maxWidth: '100%', paddingLeft: 50, paddingRight: 50 }}
            >
                <Header></Header>
                
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/registration" element={<Registration />} />
                </Routes>
            </Container>
        </div>
    );
};

export default App;
