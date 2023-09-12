const requests = {
  fetchTrending: process.env.NEXT_PUBLIC_FETCH_TRENDING,
  fetchNetflixOriginals: process.env.NEXT_PUBLIC_FETCH_NETFLITX_ORIGINALS,
  fetchTopRated: process.env.NEXT_PUBLIC_FETCH_TOP_RATED,
  fetchActionMovies: process.env.NEXT_PUBLIC_FETCH_ACTION_MOVIES,
  fetchComedyMovies: process.env.NEXT_PUBLIC_FETCH_COMEDY_MOVIES,
  fetchHorrorMovies: process.env.NEXT_PUBLIC_FETCH_HORROR_MOVIES,
  fetchRomanceMovies: process.env.NEXT_PUBLIC_FETCH_ROMANCE_MOVIES,
  fetchDocumentaries: process.env.NEXT_PUBLIC_FETCH_DOCUMENTARIES,
};

export default requests;
