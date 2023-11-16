import axios from 'axios';
import { ResponseType } from '../types/api';

const API = 'a07d994fd17aca45e6f5f6a87675a1df';
const instanceAxios = axios.create({
   baseURL: `https://api.openweathermap.org/data/2.5/forecast?appid=${API}&lang=en&units=metric&`,
});

export const weatherApi = {
   getWeather(name: string) {
      return instanceAxios
         .get<ResponseType>(`&q=${name}`)
         .then((res) => res.data);
   },
};
