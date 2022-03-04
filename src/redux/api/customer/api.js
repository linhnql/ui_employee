import axios from 'axios'

const URL = "http://localhost:8080/o/customer-rest/1.0.0/customers";

const getConfig = () => ({
    auth: {
        username: 'hoang@dogoo.com',
        password: 'test'
    },
    header: {
        "Access-Control-Allow-Origin": "*"
    }
})

export const loadCustomersApi = async (params) => {
    const config = {...getConfig(), params}
    return await axios.get(URL, config)
}

export const loadCustomerApi = async (customerId) => {
    const config = {...getConfig()}
    return await axios.get(`${URL}/${customerId}`, config)
}

export const addCustomerApi = async (customer) => {
    const config = {...getConfig()}
    return await axios.post(URL, {...customer}, config)
}

export const updateCustomerApi = async (customerId, customer) => {
    const config = {...getConfig()}
    return await axios.patch(`${URL}/${customerId}`, {...customer}, config)
}

export const deleteCustomerApi = async (customerId) => {
    const config = {...getConfig()}
    return await axios.delete(`${URL}/${customerId}`, config)
}





