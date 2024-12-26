const baseURL = process.env.REACT_APP_BASE_URL

const fetchRequest = async (method: string, path: string, body: any,  handleUnauthorized: () => void ) => {
  const response = await fetch(baseURL + path, {
    method: method,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body ? JSON.stringify(body) : undefined,
  });

  if (!response.ok) {
    if (response.status === 401) {
      handleUnauthorized();
      return null;
    } else {
      const errorData = await response.json();
      const errorMessage = errorData.message || 'An error occurred';
      console.log(errorMessage);
  
      throw new Error(
        `Error ${response.status}: ${errorMessage}`
      );
    }
  }

  const data = await response.json();
  return data
}

export const logInAJAX = async (email:string, password: string,  handleUnauthorized: () => void) => {
  const postBody = { email, password }
  const data = await fetchRequest('POST', 'auth/logIn', postBody, handleUnauthorized)
  return data as LogInRequest;
}

export const signUpAJAX = async (postBody: SignUpRequest,   handleUnauthorized: () => void) => {
  const data = await fetchRequest('POST', 'auth/signup', postBody, handleUnauthorized);
  return data as SignUpResponse;
}

export const checkLogInAjax = async () => {
  const data = await fetchRequest('POST', 'auth/checklogin', {}, () => {});
  return data as LogInRequest;
}

export const getUserPlaylistsAjax = async () => {
  const data = await fetchRequest('GET', 'playlist/', undefined, () => {});
  return data as GetUserPlaylistsResponse;
}

export const createPlaylistAjax = async (postBody: CreatePlaylistRequest) => {
  const data = await fetchRequest('POST', 'playlist/', postBody, () => {});
  return data as PlaylistInfo;
}


interface SignUpRequest {
  email:string;
  password: string;
  firstName: string;
  lastName: string;
}

interface SignUpResponse {
  firstName: string;
  lastName: string;
  email:string;
}

type LogInRequest = SignUpResponse;

interface PlaylistInfo {
  name: string;
  description?: string;
  id: number;
}

interface GetUserPlaylistsResponse {
  playlists: PlaylistInfo[];
}

interface CreatePlaylistRequest {
  name: string;
  description?: string;
}