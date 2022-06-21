import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { HomeScreen } from '../home/HomeScreen';
import { InstructionsScreen } from '../instructions/InstructionsScreen';
import { NavbarMain } from '../navbar/NavbarMain';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <NavbarMain />

            <Routes>
                <Route path='/' element={ <HomeScreen /> } />
                <Route path='/login' element={ <LoginScreen /> } />
                <Route path='/register' element={ <RegisterScreen /> } />
                <Route path='/instructions' element={ <InstructionsScreen /> } />

            </Routes>
        </BrowserRouter>
    )
}
