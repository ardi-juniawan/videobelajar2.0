import axios from 'axios';

const BASE_URL = 'https://680388070a99cb7408ec463c.mockapi.io/users';

export const getData = () => axios.get(BASE_URL);
export const addData = (user) => axios.post(BASE_URL, user);
export const editData = (id, user) => axios.put(`${BASE_URL}/${id}`, user);
export const deleteData = (id) => axios.delete(`${BASE_URL}/${id}`);