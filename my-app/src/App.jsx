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
import DialogsContainer from "./components/NavLinks/Dialogs/DialogsContainer";


function App(props) { //props - объект для передачи данных
    return (
            <div className="wrapper">
                <Header/>
                <div className="wrapper_content">
                    <Navigation state={props.state.sidebar}/>
                    <div>
                        <Route path="/profile" render={() => <Profile store={props.store}/>}/>
                        <Route path="/dialogs" render={() => <DialogsContainer store={props.store}
                            // dialogsPage={props.state.dialogsPage}
                            // dispatch={props.dispatch}
                        />}
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
