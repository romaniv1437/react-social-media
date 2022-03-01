import React from "react";
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
    debugger
    return (
        <BrowserRouter>
            <div className='wrapper'>

                <Header />

                <Navbar data={props.state.sidebar} />

                <div className='wrapper-content'>
                    <Routes>
                        <Route path='/Messages/*' element={<DialogsContainer store={props.store} />} />
                        <Route path='/Profile' element={<Profile store={props.store} />} />
                        <Route path='/News' element={<News />} />
                        <Route path='/Music' element={<Music />} />
                        <Route path='/Settings' element={<Settings />} />
                    </Routes>
                </div>

                <Footer />

            </div>
        </BrowserRouter>

    );
}

export default App;
