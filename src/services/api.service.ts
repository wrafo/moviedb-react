import axios from 'axios';

class ApiService {
  getMovies({ language, apiKey, category }: { language: string; apiKey: string, category: string }) {
    const url = `https://api.themoviedb.org/3/movie/${category}?language=${language}&api_key=${apiKey}`;
    return axios.get(url);
  }
}

export default new ApiService();