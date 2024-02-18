import React, { useState } from 'react'
import App from './App'
import Main from './main/main';

interface IndexProps {
  authenticated: boolean; // Define the type of the prop
}

function Index(props: IndexProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(props.authenticated);

  // console.log(props.authenticated)
  if (isAuthenticated) {
    return <Main></Main>;
  } else {
    return <App authenticated={setIsAuthenticated}></App>;
  }
}

export default Index;