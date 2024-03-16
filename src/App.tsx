import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from '@/components/ui/button';
import Home from './components/mycomponents/home';
import { SignInPage } from './components/mycomponents/sign-in';
import { useAuth } from '@clerk/clerk-react';
import { SignUpPage } from './components/mycomponents/sign-up';
import { ChannelForm } from './components/mycomponents/channel-form';
import { ChannelVideo } from './components/mycomponents/channel-video';
import { ChannelAppointment } from './components/mycomponents/channel-appointment';

const App = () => {
  const { userId } = useAuth();
  console.log(userId);
  
  if (!userId) {
  }
  
  return (
    <BrowserRouter> 
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path='' element={<Home/>} />
          <Route path='/channelform' element={<ChannelForm/>} />
          <Route path='/channelvideo' element={<ChannelVideo/>} />
          <Route path='/channelappointment' element={<ChannelAppointment/>} />


        </Routes>
        {!userId && <Button onClick={() => { window.location.pathname = '/sign-in'; }}>Sign In</Button>}
        {!userId && <Button onClick={() => { window.location.pathname = '/sign-up'; }}>Sign Up</Button>}

      </>
    </BrowserRouter>
  );
}

export default App;
