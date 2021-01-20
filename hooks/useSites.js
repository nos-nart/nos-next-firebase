import axios from 'axios';
import { useQuery } from 'react-query';

export function useSites() {
  return useQuery(
    'sites',
    () => axios.get('/api/sites').then(res => res.data)
  )
}
