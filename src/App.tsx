import React from 'react';
import './App.css';
import {CounterForm} from "./components/CounterForm";
import {SettingsForm} from "./components/SettingsForm";

export const App = () => {

    return (
        <div className="App">
            <SettingsForm/>
            <CounterForm/>
        </div>
    );
}
