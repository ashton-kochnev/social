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

export type AppType = {
    state: RootStateType
    addPost: (message: string) => void
    updateNewPostText: (message: string) => void
    addMessage: (message: string) => void
    updateNewMessage: (message: string) => void
}

const App: React.FC<AppType> = (props) => {
    return (
        <div className='wrapper'>
            <Header/>
            <Navbar state={props.state.friendsPage}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           addPost={props.addPost}
                           updateNewPostText={props.updateNewPostText}
                       />}/>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           messagesPage={props.state.messagesPage}
                           addMessage={props.addMessage}
                           updateNewMessage={props.updateNewMessage}
                       />}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;