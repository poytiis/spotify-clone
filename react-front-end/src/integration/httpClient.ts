const baseURL = process.env.REACT_APP_BASE_URL

const fetchRequest = async (method: string, path: string, body:any) => {
  const response = await fetch(baseURL + path, {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  const data = await response.json();
  return data
}

export const logInAJAX = async (email:string, password: string) => {
  const postBody = { email, password }
  const data = await fetchRequest('POST', 'auth/logIn', postBody)
}