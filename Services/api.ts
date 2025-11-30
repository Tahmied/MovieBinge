export const TMDB_CONFIG = {
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_AUTH_KEY,
    Headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_AUTH_KEY}`
    }
}

export const fetchMovies = async (query: string) => {
    const endpoint = query ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}` : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`

    const response = await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.Headers
    })
    // console.log(`response - ${response}`);
    if (!response.ok) {
        //@ts-ignore
        throw new Error(`failed to fetch movies`, response.statusText)
    }
    const results = await response.json()
    // console.log(`result - ${(results)}`);
    return results
}