import { BrowserRouter, Route, Routes, useNavigate } from 'react-router-dom'
import React from 'react'
//import { Dashboard } from './components/Dashboard'
//import { Landing } from './components/Landing'

// function App() {
  //   return (
//     <>
//     <div style={{background: "black", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>Hey this is topbar</div><br></br>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
//           <Route path="/" element={<Landing></Landing>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }


//----This is not the correct way for client side routing. This will bring every file once again when routing is performed------------------------------
// function App() {
//   return (
//     <>
//       <div>
//         <button onClick={()=>window.location.href = '/'}>Landing Page</button>
//         <button onClick={()=>window.location.href = '/dashboard'}>Dashboard Page</button>
//       </div>
//       <BrowserRouter>
//         <Routes>
//           <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
//           <Route path="/" element={<Landing></Landing>}></Route>
//         </Routes>
//       </BrowserRouter>
//     </>
//   )
// }

//-----------------Right way to do anvigation -----------
// function App() {
  //   return (
    //     <>
    //       <BrowserRouter>
    //         <Appbar></Appbar>
    //         <Routes>
    //           <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
    //           <Route path="/" element={<Landing></Landing>}></Route>
    //         </Routes>
    //       </BrowserRouter>
    //     </>
    //   )
    // }
    
    // function Appbar(){
      //   const navigate = useNavigate();
      //   return <div>
//       <div>
//         <button onClick={()=>{navigate('/')}}>Landing Page</button>
//         <button onClick={()=>{navigate('/dashboard')}}>Dashboard Page</button>
//       </div>
//   </div>
// }

//-----------------Optimal Approach -----------
const DashboardPage = React.lazy(()=> import('./components/Dashboard'));
const LandingPage = React.lazy(()=>import('./components/Landing'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Appbar></Appbar>
        <Routes>
          <Route path="/dashboard" element={<DashboardPage></DashboardPage>}></Route>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function Appbar(){
  const navigate = useNavigate();
  return <div>
      <div>
        <button onClick={()=>{navigate('/')}}>Landing Page</button>
        <button onClick={()=>{navigate('/dashboard')}}>Dashboard Page</button>
      </div>
  </div>
}

export default App
