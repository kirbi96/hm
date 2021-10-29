import axios from 'axios';

class InfoAPI {
  getInfo = () => axios.get('/events');
}

const infoAPI = new InfoAPI();
export default infoAPI;
