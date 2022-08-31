import { createAttendance } from '@/api/attendances';

export default {
  async actNewAttendance({ commit, state }, params) {
    await createAttendance(params).then(({ data, status }) => {
      if ((status === 200 || status === 201) && data) {
        console.log('data = ', data);
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
    // try {
    //
    // } catch (e) {
    //   // console.log(e.response);
    //   console.log('xxx');
    //   return {
    //     status: false,
    //   };
    // }
  },
};
