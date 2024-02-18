import './App.css'
import React from 'react'

interface AppProps {
  authenticated: Function; // Define the type of the prop
}

export default function App(props: AppProps) {
  // const [user, setUser] = React.useState({ name: null })

  React.useEffect(() => {
    async function fetchData() {
      try {
        const user: any = await getUserInfo()
        const userData = await user.json()
        console.log(userData)
        let response = await fetch('https://plantcoppaapi.daniala5.repl.co/api/adduser', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
        })
        console.log(response);
        // TODO: make sure to check if user id is taken
        props.authenticated(true)
        // setUser(userData)
      }
      catch {
        () => {
          console.log("User not found yet")
        }
      }
    }
    fetchData()
  }, [])

  return (
    <main>
        <div id="attention">
          <h1>PlantCoppa</h1>
          <p>A site where you can sell (and give away!) your plants</p>
          <button id="start" onClick={LoginWithReplit}>Login with replit</button>
        </div>
    </main>
  )
}

async function getUserInfo() {
  return await fetch('/__replauthuser')
}

function LoginWithReplit() {
  window.addEventListener('message', authComplete);
  var h = 500;
  var w = 350;
  var left = screen.width / 2 - w / 2;
  var top = screen.height / 2 - h / 2;

  var authWindow = window.open(
    'https://repl.it/auth_with_repl_site?domain=' + location.host,
    '_blank',
    'modal =yes, toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=' +
    w +
    ', height=' +
    h +
    ', top=' +
    top +
    ', left=' +
    left,
  );

  function authComplete(e: any) {
    if (e.data !== 'auth_complete') {
      return;
    }

    window.removeEventListener('message', authComplete);

    if (!authWindow) {
      return
    }

    authWindow.close();
    location.reload();
  }
}