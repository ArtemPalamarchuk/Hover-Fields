import config from './config.json';
import http from "./http";

export const getPresets = () => http.get(`${config.apiBaseUrl}`);