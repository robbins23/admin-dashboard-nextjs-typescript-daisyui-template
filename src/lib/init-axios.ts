import axios from "axios";
import auth from "./auth";

const initAxios = async () => {
  const token = await auth.getToken();

  console.log(token);

  try {
    if (token) {
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }

    axios.interceptors.request.use(async function (config) {
      document.body.classList.add('loading-indicator');
      
      if (!config.params) {
        config.params = {};
      }
      
      return config;
    }, function (error) {
      document.body.classList.remove('loading-indicator');
      return Promise.reject(error);
    });

    axios.interceptors.response.use(function (response) {
      document.body.classList.remove('loading-indicator');
      return response;
    }, function (error) {
      document.body.classList.remove('loading-indicator');
      
      if (error.response) {
        switch (error.response.status) {
          case 401:
            console.error('Unauthorized access');
          case 403:
            console.error('Forbidden access');
            // Clear auth token
            auth.logout();
            // Redirect to login page
            if (typeof window !== 'undefined') {
              window.location.href = '/login'; // Use this if not in a React component
            } else {
              // window.location.href = '/login'; // Use this if not in a React component
            }
            break;
        }
      }
      
      return Promise.reject(error);
    });

    return token;
  } catch (error) {
    console.error('Error configuring axios:', error);
    return null;
  }
};

export default initAxios;