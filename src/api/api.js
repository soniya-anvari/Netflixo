import axios from 'axios';

const api = axios.create({
    baseURL: 'http://moviesapi.ir',
    headers: { 'Content-Type': 'application/json' }
})
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('access_token');
        if (token !== undefined) {
            config.headers.Authorization = `Bearer ${token}`;
            console.log(config.headers);

        }
        return config;
    },
    (error) => Promise.reject(error)
);
api.interceptors.response.use(
    (response) => response,
    async(error) => {
        const originalRequest = error.config;
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const refreshToken = localStorage.getItem('refresh_token');
                const response = await axios.post('http://moviesapi.ir/oauth/token', { grant_type: 'refresh_token', refresh_token: refreshToken });
                const { token } = response.data.access_token;

                localStorage.setItem('access_token', token);

                originalRequest.headers.Authorization = `Bearer ${token}`;
                console.log('o', originalRequest);

                return axios(originalRequest);
            } catch (error) {
                console.log(error);


            }
        }

        return Promise.reject(error);
    }
)
export default api;