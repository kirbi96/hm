import axios from 'axios';

class InfoAPI {
  getInfo = () => {
    return axios.get('/events');
  };
}

const infoAPI = new InfoAPI();
export default infoAPI;
