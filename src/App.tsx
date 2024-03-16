import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { Button } from '@/components/ui/button';
import Home from './components/mycomponents/home';
import { SignInPage } from './components/mycomponents/sign-in';
import { useAuth } from '@clerk/clerk-react';
import { SignUpPage } from './components/mycomponents/sign-up';

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
          <Route path='' />
        </Routes>
        {!userId && <Button onClick={() => { window.location.pathname = '/sign-in'; }}>Sign In</Button>}
        {!userId && <Button onClick={() => { window.location.pathname = '/sign-up'; }}>Sign Up</Button>}

      </>
    </BrowserRouter>
  );
}

export default App;
