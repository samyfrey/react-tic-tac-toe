import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.js'
import SignUp from './components/auth/SignUp'

const App = () => {
  return (
		<BrowserRouter>
      <main className='App'>
        <Header />
        <Routes>
          <Route path='/sign-up' element={<SignUp />} />
        </Routes>

      </main>
		</BrowserRouter>
	)
}




export default App;
