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

    // 'http://hugueds.duckdns.org:1880/endpoint/hello'
    // 'http://hugueds.duckdns.org/api/states/device_tracker.line12'

    async get(url = this._apiUrl, line = 12) {
        try {
            url = url.replace('{line}', line);
            url = 'http://hugueds.duckdns.org:1880/endpoint/hello';
            // fetch('http://hugueds.duckdns.org:1880/endpoint/hello', this.r).then(res => console.log(res));
            // const res = await axios({
            //     method: 'get',
            //     url: 'http://hugueds.duckdns.org:1880/endpoint/hello', 
            //     headers: this._headers ,
            //     auth: this._auth
            // });
            const res = await axios.get(url, { auth: { username: 'hassio', password: 'Scaniascania5'}});
            return res.data;
        } catch (err) {
            console.error(err);
            return false;
        }
    }



}


export default GeoService;
