const axios = require ('axios');

const getReuqest = (url) => {
    let result = await axios.get(url).then((res) => {
        return res.data;
    })

    return result;
}

const postRequest = (url, body) => {
    axios.post(url, body).then((res) => true).catch((err) => false);
}

export {getReuqest, postRequest};