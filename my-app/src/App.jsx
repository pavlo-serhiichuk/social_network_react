import './App.css';
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import {Route} from "react-router-dom";
import Profile from "./components/NavLinks/Profile/Profile";
import Dialogs from "./components/NavLinks/Dialogs/Dialogs";
import Music from "./components/NavLinks/Music/Music";
import News from "./components/NavLinks/News/News";
import Settings from "./components/NavLinks/Settings/Settings";
import React from "react";


function App(props) {
    return (
            <div className="wrapper">
                <Header/>
                <div className="wrapper_content">
                    <Navigation state={props.state.sidebar}/>
                    <div>
                        <Route path="/profile" render={() => <Profile
                            profilePage={props.state.profilePage}
                            addPost={props.addPost}
                            updateNewPostText={props.updateNewPostText}
                        />}

                        />
                        <Route path="/dialogs" render={() => <Dialogs
                            state={props.state.dialogsPage}/>}
                        />
                        <Route path="/music" render={() => <Music/>}/>
                        <Route path="/news" render={() => <News/>}/>
                        <Route path="/settings" render={() => <Settings/>}/>
                    </div>
                </div>
            </div>
    );
}

export default App;
