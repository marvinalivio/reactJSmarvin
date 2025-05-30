import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './myStyle.css'
import './mobile.css'
import './animation.css'
import Header from './Components/Header'
import { UserProvider } from './useContext/useContext'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from './Components/Footer';
import Page from './Components/Page';
import BackToTopButton from './Components/backToTopButton'

const App = () => {
    return (
      <UserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="*" element={<Page />} />
          </Routes>
          <BackToTopButton />
          <Footer />
        </Router>
      </UserProvider>
    );
  };
  


//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

export default App;
