import { requestWithoutJwt } from './request';

export const getClassDetail = (id) => {
  return requestWithoutJwt.get(`/class/${id}`);
};
