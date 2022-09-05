import { requestWithoutJwt } from './request';

export const createAttendance = (params) => {
  return requestWithoutJwt.post('/attendance', params);
};

export const getAttendances = (query) => {
  return requestWithoutJwt.get('/attendance', { params: query });
};
