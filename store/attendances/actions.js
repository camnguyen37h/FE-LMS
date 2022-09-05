import { createAttendance, getAttendances } from '@/api/attendances';

export default {
  async actFetchAttendance({ commit }, query) {
    try {
      await getAttendances(query).then(({ status, data }) => {
        if ((status === 200 || status === 201) && data) {
          commit('setAttendance', data);
          return {
            status: true,
            data,
          };
        }

        return {
          status: false,
        };
      });
    } catch (e) {
      console.log(e.response);
      return {
        status: false,
      };
    }
  },
  async actNewAttendance({ commit, state }, params) {
    await createAttendance(params).then(({ data, status }) => {
      if ((status === 200 || status === 201) && data) {
        commit('setAttendance', data);
        return {
          status: true,
          data,
        };
      }
      return {
        status: false,
      };
    });
  },
};
