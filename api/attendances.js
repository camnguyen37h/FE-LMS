import { requestWithoutJwt } from './request';

export const createAttendance = (params) => {
  return requestWithoutJwt.post('/attendance', params);
};
