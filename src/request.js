const _apiKey = "1655ca58bc63dc76eb67fe7a0f9f9ef7";

const requests = {
    _popular: `https://api.themoviedb.org/3/movie/popular?api_key=${_apiKey}&language=en-US&page=1`,
    _topRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${_apiKey}&language=en-US&page=1`,
    _trending: `https://api.themoviedb.org/3/trending/all/day?api_key=${_apiKey}`,
    _horror: `https://api.themoviedb.org/3/search/movie?api_key=${_apiKey}&language=en-US&page=1&include_adult=false`,
    _upComing: `https://api.themoviedb.org/3/movie/upcoming?api_key=${_apiKey}&language=en-US&page=1`
}

export default requests