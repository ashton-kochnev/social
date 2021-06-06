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
import {ActionsType, StoreType} from "./Redux/state";

export type AppType = {
    store: StoreType
    dispatch: (action: ActionsType) => void
}

const App: React.FC<AppType> = (props) => {
    const state = props.store.getState()

    return (
        <div className='wrapper'>
            <Header/>
            <Navbar state={state.sidebar}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={state.profilePage}
                           dispatch={props.store.dispatch.bind(props.store)}
                       />}/>
                <Route path='/dialogs'
                       render={() => <Dialogs
                           messagesPage={state.messagesPage}
                           dispatch={props.store.dispatch.bind(props.store)}
                       />}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/news' render={() => <News/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;