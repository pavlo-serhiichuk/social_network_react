import './App.css';
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import Music from "./components/NavLinks/Music/Music";
import News from "./components/NavLinks/News/News";
import Settings from "./components/NavLinks/Settings/Settings";
import React from "react";
import DialogsContainer from "./components/NavLinks/Dialogs/DialogsContainer";
import UsersContainer from "./components/NavLinks/Users/UsersContainer";
import ProfileContainer from "./components/NavLinks/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/NavLinks/Login/Login";


function App(props) { //props - объект для передачи данных
    // debugger
    return (
            <div className="wrapper">
                <HeaderContainer />
                <div className="wrapper_content">
                    <Navigation />
                    <div>
                        <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
                        <Route path="/users" render={() => <UsersContainer />}/>
                        <Route path="/dialogs" render={() => <DialogsContainer />} />
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                        <Route path="/login" render={() => <Login/>}/>
                    </div>
                </div>
            </div>
    );
}

export default App;
