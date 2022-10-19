import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.scss';
import { SignInForm } from './component/auth-forms/SignInForm';
import { SignUpForm } from './component/auth-forms/SignUpForm';
import { HomePage } from './component/HomePage';
import { MainLayout } from './component/layouts/MainLayout';
import { MessageRoom } from './component/MessageRoom';
import { Profile } from './component/Profile';
import { setUser, setUserIsLoading } from './reudx/profile';
import { useEffect } from 'react';
import { ProfileCastomizationForm } from './component/ProfileCгstomiztionForm';



function App() {
  const dispatch = useDispatch()
  const auth = getAuth();
  const navigate = useNavigate()
  useEffect(() => {
    dispatch(setUserIsLoading(true))
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setUser(user.toJSON()))
        dispatch(setUserIsLoading(false))
      }
      else {
        dispatch(setUser({}))
        navigate('/sign_in')
      }
    })
  }, [auth]);

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
        <Route path='/customize_hero' element={<ProfileCastomizationForm />} />
      </Routes>
    </div>
  );
}

export default App;
