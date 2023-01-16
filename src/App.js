import React, { useEffect, useState } from 'react';
//* Third-party //
import { Route, Routes } from 'react-router-dom';

//* Local imports //
import FormLayout from './components/layouts/FormLayout.jsx';
import ProtectedRoute from './components/routes/ProtectedRoute';
import ActorPage from './pages/ActorPage.jsx';
import BookMark from './pages/BookMark.jsx';
import DetailPage from './pages/DetailPage.jsx';
import Error from './pages/Error.jsx';
import Explore from './pages/Explore.jsx';
import Home from './pages/Home.jsx';
import SignIn from './pages/SignIn.jsx';
import SignUp from './pages/SignUp.jsx';

function App() {
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <Routes>
      <Route exact path="/majestic-kleicha-9e6e37.netlify.app/" element={<Home />} />
      <Route path="movie/:id" element={<DetailPage />} />
      <Route
        path="/login"
        element={
          <FormLayout>
            <SignIn />
          </FormLayout>
        }
      />
      <Route
        path="/register"
        element={
          <FormLayout>
            <SignUp />
          </FormLayout>
        }
      />
      <Route load={load} path="/explore" element={<Explore />} />
      <Route
        path="/bookmark"
        element={
          <ProtectedRoute>
            <BookMark />
          </ProtectedRoute>
        }
      />
      <Route path="actor/:person_id" element={<ActorPage />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
