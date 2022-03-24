import React from 'react'
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header/Header"
import './App.css'
import { Provider } from "react-redux";
import store from './store/index';

const App = ({ name }) => (
    <>
    <Provider store={store}>
        <BrowserRouter>
            <React.Fragment>
                <Header />
            </React.Fragment>
        </BrowserRouter>
    </Provider>
    </>
    
  
)

export default App