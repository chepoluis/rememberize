import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LoginScreen } from '../auth/LoginScreen';
import { RegisterScreen } from '../auth/RegisterScreen';
import { GameDefinitions } from '../game/GameDefinitions';
import { NiceTry } from '../game/NiceTry';
import { Winner } from '../game/Winner';
import { WordDefinition } from '../game/WordDefinition';
import { HomeScreen } from '../home/HomeScreen';
import { NavbarMain } from '../navbar/NavbarMain';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <NavbarMain />

            <Routes>
                <Route path='/' element={ <HomeScreen /> } />
                <Route path='/game' element={ <WordDefinition /> } />
                <Route path='/definitions' element={ <GameDefinitions /> } />
                <Route path='/winner' element={ <Winner /> } />
                <Route path='/nicetry' element={ <NiceTry /> } />

            </Routes>
        </BrowserRouter>
    )
}
