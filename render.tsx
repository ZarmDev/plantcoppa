import Index from './src/index';
import React from 'react';
import ReactDOM from 'react-dom/client';

async function getUserInfo() {
  try {
  let test = await fetch('/__replauthuser')
  return await test.json()
  } catch {
    return null
  }
}

// const rootElement = document.getElementsByTagName('body')[0];
const rootElement = document.getElementById('root');

async function test() {
  var userInfo = await getUserInfo();
  // console.log(userInfo);
  var isAuthenticated = false;
  if (userInfo != null) {
    var isAuthenticated = userInfo != null || userInfo.status != 401;
  }
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Index authenticated={isAuthenticated} />
    </React.StrictMode>
  );
}

test()