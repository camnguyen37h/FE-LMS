<template>
  <div class="flex flex-row w-full h-full gap-x-5 page-content">
    <section class="flex flex-col gap-y-5 w-full">
      <article class="flex flex-col w-full px-6 py-7 border rounded-lg border-gray-300 bg-white">
        <div class="flex flex-col gap-y-3 justify-center">
          <div class="flex flex-row justify-between">
            <span class="font-bold">Filter</span>
          </div>
          <span class="border rounded-sm border-green-100 w-5"></span>
          <div class="grid gap-x-6 gap-y-5 grid-cols-2 items-center justify-center">
            <div class="flex flex-col gap-y-3">
              <label class="font-semibold text-green-100">Mã sinh viên</label>
              <input
                type="text"
                name="userId"
                v-model="userId"
                class="custom-input"
                placeholder="Nhập mã sinh viên ..."
              />
            </div>
            <div class="flex flex-col gap-y-3">
              <label class="font-semibold text-green-100">Mã lớp</label>
              <input type="text" name="classId" v-model="classId" class="custom-input" placeholder="Nhập mã lớp ..." />
            </div>
            <div class="flex gap-x-5 w-full h-full">
              <div class="flex items-end w-full h-full">
                <button
                  class="px-10 py-[15px] w-full rounded-lg border border-green-100 text-sm font-semibold capitalize"
                  @click="handleViewReport"
                >
                  Xem báo cáo
                </button>
              </div>
              <div class="flex items-end w-full h-full">
                <button
                  class="px-10 py-[15px] w-full rounded-lg border border-green-100 bg-green-100 text-white text-sm font-semibold capitalize"
                  @click="handleDownloadExcel"
                >
                  Tải báo cáo excel
                </button>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="flex flex-col w-full px-6 py-7 border rounded-lg border-gray-300 bg-white">
        <table class="overflow-hidden rounded-lg text-sm table">
          <thead class="bg-green-100 text-white">
            <tr class="border border-gray-300">
              <th>STT</th>
              <th>Mã Lớp</th>
              <th>Mã Sinh Viên</th>
              <th>Thời gian vào lớp</th>
              <th>Vào trễ?</th>
            </tr>
          </thead>
          <tbody v-if="attendance" class="text-center">
            <tr v-for="(item, index) in attendance" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ item.IdClass }}</td>
              <td>{{ item.user_id }}</td>
              <td class="italic">
                {{ formatClassTime(item.startTime, 'HH:mm:ss') }}<br />{{
                  formatClassTime(item.startTime, 'DD/MM/YYYY')
                }}
              </td>
              <td :class="{ 'text-red-600': checkLateEntrance(item.time, item.endTime) === 'Yes' }">
                {{ checkLateEntrance(item.time, item.endTime) }}
              </td>
            </tr>
          </tbody>
        </table>
      </article>
    </section>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { v1 as uuid } from 'uuid';
import { mapActions, mapState } from 'vuex';
import { parseTime } from '@/utils/functions';

export default {
  layout: 'student',
  async asyncData({ params, store }) {},
  data() {
    return {
      classId: '630e41d528423d9914e71159',
      userId: '2021600108',
    };
  },
  components: {},
  computed: {
    ...mapState({
      attendance: (state) => state.attendances.attendance,
    }),
  },
  methods: {
    ...mapActions({
      actFetchAttendance: 'attendances/actFetchAttendance',
    }),
    async handleViewReport() {
      const query = {
        idClass: this.classId,
        user_id: this.userId,
      };
      await this.actFetchAttendance(query);
    },
    handleDownloadExcel() {
      import('@/vendor/Export2Excel').then((excel) => {
        const tHeader = ['Mã Lớp', 'Mã Sinh Viên', 'Thời gian vào lớp', 'Vào Trễ?'];
        const filterVal = ['IdClass', 'user_id', 'startTime', 'endTime'];
        const list = this.attendance;
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader, //Header Required
          data, //Specific data Required
          filename: uuid(), //Optional
          autoWidth: true, //Optional
          bookType: 'xlsx', //Optional
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map((v) =>
        filterVal.map((j) => {
          if (j === 'timestamp') {
            return parseTime(v[j]);
          } else {
            return v[j];
          }
        }),
      );
    },
    formatClassTime(timestamp, format) {
      return dayjs.unix(timestamp).format(format);
    },
    checkLateEntrance(time, endTime) {
      return time < endTime ? 'No' : 'Yes';
    },
  },
};
</script>

<style lang="scss" scoped>
.custom-input {
  background: #f9f9f9;
  outline: 1px solid #d1d5db;
  border-radius: 10px;
  padding: 14px 12px;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);

  &:focus,
  &:focus-visible {
    outline: 1px solid #65af54;
    caret-color: #65af54;
  }
}

.table {
  th {
    text-align: center;
  }
  td,
  th {
    padding: 10px;
    border: 1px solid #dfe6ec;
    text-overflow: ellipsis;
  }
}
</style>
