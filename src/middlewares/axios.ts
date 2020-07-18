import axios from 'axios';
const API_KEY = 'http://biblioteca.supero.com.br/api';

axios.defaults.baseURL = API_KEY;

export default axios;
