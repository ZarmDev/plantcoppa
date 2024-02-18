export async function getUserInfo() {
  return await fetch('/__replauthuser')
}

export async function fetchData(type: any, url: any, givenInfo: any) {
  const urlTo = 'https://plantcoppaapi.daniala5.repl.co';
  try {
    const user: any = await getUserInfo()
    const userData = await user.json()
    // console.log('ul', `${urlTo}}/api/${url}`);
    let response = await fetch(`${urlTo}/api/${url}`, {
      method: type,
      headers: {
        'Content-Type': 'application/json',
        'Product': givenInfo
      },
      body: JSON.stringify(userData)
    })
    return response
    // console.log(response);
  }
  catch {
    () => {
      console.log("User not found yet")
    }
  }
}

