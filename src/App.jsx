// import './App.css'
// import Login from './components/Login'
// import Profile from './components/Profile'
// import UserContextProvider from './context/UserContextProvider'

// function App() {
 

//   return (
    
//     <UserContextProvider>
//       <h1>Hi there, Please fill the form</h1>
//       <Login />
//       <Profile />
//       </UserContextProvider>
    
//   )
// }

// export default App


// pages/index.tsx (or App.tsx)
'use client'; // if using Next.js App Router

import React from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './components/Document';


export default function Home() {
  return (
    <div style={{ padding: 40 }}>
      <h1>React PDF Example</h1>
      <PDFDownloadLink
        document={<MyDocument />}
        fileName="example.pdf"
        style={{
          textDecoration: 'none',
          padding: '10px 20px',
          backgroundColor: '#0070f3',
          color: '#fff',
          borderRadius: '5px',
        }}
      >
        {({ loading }) => (loading ? 'Preparing document...' : 'Download PDF')}
      </PDFDownloadLink>
    </div>
  );
}
