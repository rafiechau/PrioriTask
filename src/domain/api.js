import config from '@config/index';
import { merge } from 'lodash';

import request from '@utils/request';

const urls = {
  ping: 'ping.json',
  users: 'users',
  tasks: 'tasks',
};

export const callAPI = async (endpoint, method, header = {}, params = {}, data = {}) => {
  const defaultHeader = {
    'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  };

  const headers = merge(defaultHeader, header);
  const options = {
    url: config.api.host + endpoint,
    method,
    headers,
    data,
    params,
  };

  return request(options).then((response) => {
    const responseAPI = response.data;
    return responseAPI;
  });
};


export const getAllUser = () => {
  return callAPI(urls.users, 'GET');
}
export const ping = () => callAPI(urls.ping, 'get');

export const getAllTasksApi = () => callAPI(urls.tasks, 'GET');

export const getTaskByIdApi = (id) => callAPI(`${urls.tasks}/${id}`, 'GET');

export const addUser = (user) => callAPI(urls.users, 'POST', {}, {}, user)
