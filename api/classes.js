import { requestWithoutJwt } from './request';

export const getClassDetail = (id) => {
  return requestWithoutJwt.get(`/class/${id}`);
};

export const updateStatusClass = (params) => {
  return requestWithoutJwt.put('/class/update/enable', params);
};
