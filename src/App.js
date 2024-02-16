import React from 'react';
import AppRouter from './router/Router';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <>
      <AppRouter/>
    </>
    // <Router>
    //   <div>
    //     <nav>
    //       <ul>
    //         <li><Link to="/join">가입</Link></li>
    //         <li><Link to="/login">로그인</Link></li>
    //       </ul>
    //     </nav>

    //     <Routes>
    //       <Route path="/join" element={<UserJoin />} />
    //       <Route path="/login" element={<UserLogin />} />
    //     </Routes>
    //   </div>
    // </Router>
  );
}

export default App;
