import axios from 'axios';

class GeoService {

    _apiUrl = process.env.REACT_APP_API_URL;
    _token = process.env.REACT_APP_API_TOKEN;

    auth = {
        username: 'hassio',
        password: 'Scaniascania5'
    }

    _headers = {
        'Authorization': 'Basic Authentication',
        'Content-ype': 'application/json',
    }

    r = {
        method: 'GET',
        headers: this._headers,
        mode: 'cors',
        cache: 'default'
    }  

    async get(url = this._apiUrl, line = 12) {
        try {
            url = url.replace('{line}', line);
            url = 'https://hugueds.duckdns.org:1880/endpoint/hello';           
            const res = await axios.get(url, { auth: this.auth });
            return res.data;
        } catch (err) {
            console.error(err);
            return false;
        }
    }
}


export default GeoService;
