import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import {Route} from 'react-router-dom';
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {RootStateType} from "./Redux/state";

type AppType = {
    state: RootStateType
    addPost: (message: string) => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Navbar state={props.state.friendsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile state={props.state.profilePage} addPost={props.addPost}/>}/>
                <Route path='/dialogs'
                       render={() => <Dialogs state={props.state.messagesPage}/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;