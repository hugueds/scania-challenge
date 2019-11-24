const axios = require('axios');

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiIzMTFiMDM1MTlkNDU0YmU4OTUyYjBmZTgyODQzOTk0ZCIsImlhdCI6MTU3NDQ2NzM2MiwiZXhwIjoxODg5ODI3MzYyfQ.kkNERbs4JllShSfnAIjn51DpnrojlFtlsxY6olxYfKM";
const url = 'http://hugueds.duckdns.org/api/states/device_tracker.line12';


async function get() {
    try {
        const headers = {
            'Authorization': 'Bearer ' + token,
            'Content-Type': 'application/json'
        }
        const r = await axios({
            method: 'get',
            url: 'http://hugueds.duckdns.org/api/states/device_tracker.line12', 
            headers
        });
        // const r = await axios.get(url, headers);
        console.log(r.data);
    } catch (err) {
        console.error(err);
    }
}

get();

// async function waitRes() {
//     const r = await get();
//     console.log(r);
// }

// waitRes();