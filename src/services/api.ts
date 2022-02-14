import axios from 'axios';
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

export function setupAPIClient() {
  const api = axios.create({
    baseURL: 'https://books.ioasys.com.br/api/v1',
    headers: {
      Authorization: `Bearer ${cookies.get('access_token')}`,
    },
  });

  return api;
}



