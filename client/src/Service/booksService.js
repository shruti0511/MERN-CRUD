import axios from 'axios';
// import authService from '../components/api-authorization/AuthorizeService';


export async function getAllBooks() {

    // const config = {
    //     headers: { Authorization: `Bearer ${await getToken()}` }
    // };
    return axios.get('/api/books');
}

export async function addBook(data) {
    // const config = {
    //     headers: { Authorization: `Bearer ${await getToken()}` }
    // };
    return await axios.post('/api/books', data);
}

export async function getBook(id) {
    // const config = {
    //     headers: { Authorization: `Bearer ${await getToken()}` }
    // };
    return await axios.get(`/api/books/${id}`);
}

export async function editBook(data) {
    // const config = {
    //     headers: { Authorization: `Bearer ${await getToken()}` }
    // };
    return await axios.put(`/api/books`, data);
}

export async function deleteBook(id) {
    // const config = {
    //     headers: { Authorization: `Bearer ${await getToken()}` }
    // };
    return axios.delete(`/api/books/${id}`)
}

// export async function getToken(){
//     return await authService.getAccessToken()
// }
