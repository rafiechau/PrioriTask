import axios from 'axios';

const baseURL = 'http://localhost:5000/';

const urls = {
  ping: 'ping.json',
  users: 'users',
  tasks: 'tasks',
};

export const callAPI = async (endpoint, method, params = {}, headers = {}, data = {}) => {
  const options = {
    baseURL,
    url: endpoint,
    method,
    params,
    headers,
    data,
  };

  const response = await axios(options);
  return response?.data;
};

export const createTask = (task) => callAPI(urls.tasks, 'POST', {}, {}, task);

export const updateTask = (taskId, data) => callAPI(`${urls.tasks}/${taskId}`, 'PUT', {}, {}, data);

export const ping = () => callAPI(urls.ping, 'get');
export const getAllUser = () => callAPI(urls.users, 'GET');

export const getAllTasksByIdApi = (id) => callAPI(`${urls.tasks}?userId=${id}`, 'GET');

export const getTaskByIdApi = (id) => callAPI(`${urls.tasks}/${id}`, 'GET');

export const updateTaskApi = (taskId, data) => callAPI(`${urls.tasks}/${taskId}`, 'PUT', {}, {}, data);
export const addUser = (user) => callAPI(urls.users, 'POST', {}, {}, user);
export const deleteTaskByIdApi = (id) => callAPI(`${urls.tasks}/${id}`, 'DELETE');
