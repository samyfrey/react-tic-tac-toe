import React, { useState } from 'react'
import Home from './components/Home'

const App = () => {
  const [user, setUser] = useState(null)


  return (
    <div className="App">
      {/* <Logo />
      <Navbar /> */}
      <Home />
      
      {/* <Game /> */}
  
    </div>
  );


}



export default App;
