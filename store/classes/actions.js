import { getClassDetail, updateStatusClass } from '@/api/classes';

export default {
  async actFetchClassById({ commit }, { classId }) {
    try {
      await getClassDetail(classId).then(({ status, data }) => {
        if ((status === 200 || status === 201) && data) {
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
      return {
        status: false,
      };
    }
  },
  async actUpdateStatusClass({ commit }, { idClass, active }) {
    try {
      const params = { idClass, active };
      await updateStatusClass(params).then(({ data, status }) => {
        if ((status === 200 || status === 201) && data) {
          data = { ...data, QRCode: { ...data.QRCode, active: active } };
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
      return {
        status: false,
      };
    }
  },
};
