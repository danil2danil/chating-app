import { useSelector } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import { SignInForm } from './component/auth-forms/SignInForm';
import { SignUpForm } from './component/auth-forms/SignUpForm';
import { HomePage } from './component/HomePage';
import { MainLayout } from './component/layouts/MainLayout';
import { MessageRoom } from './component/MessageRoom';
import { Profile } from './component/Profile';
import { useCurentUser } from './firebase/firebase-auth';



function App() {

  useCurentUser()
 
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path='profile' element={<Profile />} />
          <Route path='message_room' element={<MessageRoom />} />
        </Route>
        <Route path='/sign_in' element={<SignInForm />} />
        <Route path='/sign_up' element={<SignUpForm />} />
      </Routes>
    </div>
  );
}

export default App;
