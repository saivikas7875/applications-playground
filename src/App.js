import './App.css';
import React from 'react';
import { Header } from './header/header';
import { Countries } from './body/countries';

export const App = () => (
    <div className="App">
        <Header />
        <Countries />
    </div>
);
