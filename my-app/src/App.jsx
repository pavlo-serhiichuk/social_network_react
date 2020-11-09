import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {BrowserRouter, Route} from "react-router-dom";
import Profile from "./components/NavLinks/Profile/Profile";
import Dialogs from "./components/NavLinks/Dialogs/Dialogs";
import Music from "./components/NavLinks/Music/Music";
import News from "./components/NavLinks/News/News";
import Settings from "./components/NavLinks/Settings/Settings";
import React from "react";


function App() {
    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className="wrapper_content">
                    <Navigation/>
                    <div>
                        <Route path="/profile" component={Profile}/>
                        <Route path="/dialog" component={Dialogs}/>
                        <Route path="/music" component={Music}/>
                        <Route path="/news" component={News}/>
                        <Route path="/settings" component={Settings}/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
