import requests from './Request'
import { positions } from 'react-alert'

export const alertOptions = {
  timeout: 5000,
  position: positions.TOP_RIGHT,
}
export const rowOptions = [
  {
    id: 0,
    title: 'Trending Now',
    fetchUrl: requests.fetchTrending,
  },
  {
    id: 1,
    title: 'Top Rated',
    fetchUrl: requests.fetchTopRated,
  },
  {
    id: 2,
    title: 'Action Movies',
    fetchUrl: requests.fetchActionMovies,
  },
  {
    id: 3,
    title: 'Comedy Movies',
    fetchUrl: requests.fetchComedyMovies,
  },
  {
    id: 4,
    title: 'Horror Movies',
    fetchUrl: requests.fetchHorrorMovies,
  },
  {
    id: 5,
    title: 'Romance Movies',
    fetchUrl: requests.fetchRomanceMovies,
  },
  {
    id: 6,
    title: 'Documentaries',
    fetchUrl: requests.fetchDocumentaries,
  },
]
const truncate = (string, n) => {
  return string?.length > n ? string.substr(0, n - 1) + '...' : string
}
export default truncate
