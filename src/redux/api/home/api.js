import axios from 'axios'

const URL = "http://localhost:8080/o/home-rest/1.0.0/homes";

const getConfig = () => ({
    auth: {
        username: 'hoang@dogoo.com',
        password: 'test'
    },
    header: {
        "Access-Control-Allow-Origin": "*"
    }
})

export const loadHomesApi = async (params) => {
    const config = {...getConfig(), params}
    return await axios.get(URL, config)
}

export const loadHomeApi = async (homeId) => {
    const config = {...getConfig()}
    return await axios.get(`${URL}/${homeId}`, config)
}

export const addHomeApi = async (home) => {
    const config = {...getConfig()}
    return await axios.post(URL, {...home}, config)
}

export const updateHomeApi = async (homeId, home) => {
    const config = {...getConfig()}
    return await axios.patch(`${URL}/${homeId}`, {...home}, config)
}

export const deleteHomeApi = async (homeId) => {
    const config = {...getConfig()}
    return await axios.delete(`${URL}/${homeId}`, config)
}





