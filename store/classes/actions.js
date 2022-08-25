import { getClassDetail } from '@/api/classes';

export default {
  async actFetchClassById({ commit }, { classId }) {
    try {
      await getClassDetail(classId).then(({ status, data }) => {
        if ((status === 200 || status === 201) && data) {
          console.log('data = ', data);
          commit('setClassDetail', data);
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
      // console.error(e.response.data.message);

      return {
        status: false,
      };
    }
  },
};
