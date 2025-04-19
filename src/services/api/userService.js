import api from './api';

const resource = '/users';

export const getUsers = () => api.get(resource);

export const getUserByEmail = (email) =>
  api.get(resource, { params: { email } });

export const addUser = (userData) => api.post(resource, userData);
