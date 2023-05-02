import React, { FC } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import { Route, Routes } from 'react-router-dom';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import { ConfigProvider } from 'antd';
import SignUp from './components/Header/SignUp/SignUp';
import LogIn from './components/Header/Buttons/LogIn/LogIn';
const App: FC = () => {
  
    return (
    <ConfigProvider theme={{ token: { colorPrimary: '#651379' } }}>
    <div className='app-wrapper'>
      <div className='app-container'>
        <Header />
        <main className='app-wrapper-content'>
          <Navbar />
          <Routes>
            <Route path='/signup' element={<SignUp></SignUp>}></Route>
            <Route path='/login' element={<LogIn></LogIn>}></Route>
          </Routes>
          <Routes>
            <Route path='/profile' element={<Profile />} />
            <Route path='/dialogs' element={<DialogsContainer />} />
            <Route path='/users' element={<UsersContainer></UsersContainer>} />
          </Routes>
        </main>
      </div>
    </div>
  </ConfigProvider>
  );
};
export default App;