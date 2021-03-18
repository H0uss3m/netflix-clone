const API_KEY = '216fcca0938fc8d1fa790e409ad67f93'

const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US&page=1`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213&page=1`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28&page=1`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35&page=1`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27&page=1`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749&page=1`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99&page=1`,
}

export default requests
