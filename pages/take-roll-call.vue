<template>
  <div class="flex flex-row w-full h-full gap-x-5 page-content">
    <section class="flex flex-col gap-y-5 w-2/3">
      <article class="flex flex-col w-full border rounded-lg border-gray-300 bg-white">
        <div class="flex flex-col w-full py-7 px-6 text-white h-2 rounded-t-lg bg-green-100 min-h-[210px]">
          <span class="text-lg">T5, 25 Th11 năm 2021</span>
          <div class="flex h-full items-center flex-row">
            <span>
              <span class="text-5xl">11:00 </span>
              <span class="text-lg">AM /</span>
              <span class="text-5xl">12:00 </span>
              <span class="text-lg">PM</span>
            </span>
          </div>
        </div>
        <div class="py-7 px-6 class-base-info">
          <div class="flex flex-col gap-y-3 justify-center">
            <div class="flex flex-row justify-between">
              <span class="font-bold">Conversation English lesson</span>
              <span>12 bài học</span>
            </div>
            <span class="border rounded-sm border-green-100 w-5"></span>
            <span class="font-bold">Trạng thái: <span class="text-green-100">Đang học</span></span>
          </div>
          <div class="flex flex-col gap-y-3 justify-center">
            <span class="font-bold">Mô tả khóa học</span>
            <span class="text-justify"
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae cumque quae sequi dolorum praesentium
              eveniet vero temporibus non facere velit consequatur perferendis sit omnis, at accusamus, qui possimus
              reiciendis est.</span
            >

            <span class="font-bold">Mô tả bài học</span>
            <span class="text-justify"
              >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ratione iste totam recusandae
              tenetur, cum reiciendis ducimus corrupti vel nam aspernatur quia, corporis minima ex consequatur.
              Reiciendis hic officia non.</span
            >
          </div>
        </div>
      </article>
      <article class="flex flex-col w-full py-7 px-6 border rounded-lg border-gray-300 bg-white">
        <div class="flex flex-col gap-y-5 justify-center">
          <div class="flex flex-col gap-y-3">
            <span class="font-bold">Danh sách bài học</span>
            <span class="border rounded-sm border-green-100 w-5"></span>
          </div>

          <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
            <div class="flex items-center gap-x-5">
              <div>
                <img src="@/assets/images/e-learning.png" alt="e-learning" />
              </div>
              <div class="flex flex-col gap-y-2 w-full">
                <div class="flex gap-y-1 justify-between">
                  <span class="font-semibold">Bài 5</span>
                  <span class="text-green-100">Đang học</span>
                </div>
                <div class="flex gap-y-1 justify-between items-end">
                  <span class="">02:30 - 03:00, thứ 3/ 20-10-2021 </span>
                  <button
                    class="px-10 py-2 min-w-[150px] rounded-lg border border-green-100 bg-green-100 text-white text-sm font-semibold capitalize"
                  >
                    Vào lớp
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="flex flex-col w-full py-7 px-6 border rounded-lg border-gray-300 bg-white">
        <div class="flex flex-col gap-y-5 justify-center">
          <div class="flex flex-col gap-y-3">
            <span class="font-bold">Công cụ giao tiếp</span>
            <span class="border rounded-sm border-green-100 w-5"></span>
          </div>

          <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
            <div class="flex flex-col gap-y-3 justify-center">
              <div class="flex flex-row items-center justify-between gap-y-7">
                <div class="flex flex-col">
                  <span class="font-semibold">Zoom class room</span>
                  <span class="text-green-100">0364111222</span>
                </div>
                <img src="@/assets/images/zoom.png" alt="zoom" />
              </div>
            </div>
          </div>
        </div>
      </article>
      <article class="flex flex-col w-full py-7 px-6 border rounded-lg border-gray-300 bg-white">
        <div class="flex flex-col gap-y-5 justify-center">
          <div class="flex flex-col gap-y-3">
            <span class="font-bold">Hồ sơ</span>
            <span class="border rounded-sm border-green-100 w-5"></span>
          </div>

          <div class="h-full pl-2.5">
            <ul class="grid gap-y-5 grid-cols-1 relative text-center progress-bar">
              <li class="relative flex justify-start items-center pl-12">
                <div class="progress-point"></div>
                <div class="flex flex-col py-3 gap-y-3">
                  <span>Học viên đã chấp nhận các thay đổi với yêu cầu bài học</span>
                  <div class="flex gap-x-3">
                    <span>5:00</span>
                    <span>26/5/2021</span>
                  </div>
                </div>
              </li>
              <li class="relative flex justify-start items-center pl-12">
                <div class="progress-point"></div>
                <div class="flex flex-col py-3 gap-y-3">
                  <span>Học viên đã chấp nhận các thay đổi với yêu cầu bài học</span>
                  <div class="flex gap-x-3">
                    <span>5:00</span>
                    <span>26/5/2021</span>
                  </div>
                </div>
              </li>
              <li class="relative flex justify-start items-center pl-12">
                <div class="progress-point"></div>
                <div class="flex flex-col py-3 gap-y-3">
                  <span>Học viên đã chấp nhận các thay đổi với yêu cầu bài học</span>
                  <div class="flex gap-x-3">
                    <span>5:00</span>
                    <span>26/5/2021</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <!-- <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
            <div class="flex flex-col gap-y-3 justify-center">
              <div class="flex flex-row items-center justify-between gap-y-7">
                <div class="flex flex-col">
                  <span class="font-semibold">Zoom class room</span>
                  <span class="text-green-100">0364111222</span>
                </div>
                <img src="@/assets/images/zoom.png" alt="zoom" />
              </div>
            </div>
          </div> -->
        </div>
      </article>
    </section>
    <section class="flex w-1/3 h-full">
      <article class="flex flex-col w-full border rounded-lg border-gray-300 bg-white">
        <span class="w-full h-2 rounded-lg bg-green-100"></span>
        <div class="flex flex-col gap-y-3 py-7 px-6">
          <h2 class="uppercase font-bold text-xl text-center">xác nhận điểm danh</h2>
          <span
            >Bài học của bạn đã được xác nhận 29 tháng 08 năm 2022 08:30. Bạn không được phép hủy bài học trong vòng 24h
            trước giờ đã lên lịch</span
          >
          <button
            @click="activePopupAttendance = true"
            class="mt-3 py-2.5 rounded-lg border border-green-100 bg-green-100 text-white font-semibold capitalize"
          >
            điểm danh
          </button>
        </div>
      </article>
    </section>
    <modal :show="activePopupAttendance" @close="activePopupAttendance = false" width="480">
      <div class="flex flex-col gap-y-8 items-center justify-center px-7">
        <h2 class="font-bold text-xl capitalize">Điểm danh</h2>
        <ValidationObserver ref="form" class="flex w-full">
          <form @submit.prevent="onsubmit" class="w-full">
            <div class="flex flex-col gap-y-5 w-full">
              <span class="font-bold">Mã học viên</span>
              <ValidationProvider rules="required|numeric" v-slot="{ errors }" class="flex flex-col gap-y-3">
                <!--                <div class="flex flex-col gap-y-5 w-full">-->
                <!--                  -->
                <!--                </div>-->
                <input
                  type="text"
                  name="user_id"
                  v-model="user_id"
                  class="custom-input"
                  :class="{ error: attendance.type === 'error' || errors?.[0] }"
                  placeholder="Nhập mã học viên ..."
                />
                <span class="text-red-500">{{ errors?.[0] || attendance.message }}</span>
              </ValidationProvider>
              <button
                class="py-2.5 min-w-[150px] rounded-lg border border-green-100 bg-green-100 text-white font-semibold capitalize"
                type="submit"
              >
                gửi điểm danh
              </button>
            </div>
          </form>
        </ValidationObserver>
      </div>
    </modal>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import { mapState, mapActions } from 'vuex';
import { ValidationObserver, ValidationProvider } from 'vee-validate';

export default {
  layout: 'admin',
  validate({ query, store }) {
    if (!query.class_id || !query.class_id.trim()) {
      return false;
    }
    return true;
  },
  async asyncData({ params, store, route, query }) {
    const classId = query.class_id;
    await Promise.all([store.dispatch('classes/actFetchClassById', { classId })]);
  },
  data() {
    return {
      user_id: '',
      activePopupAttendance: false,
    };
  },
  components: {
    ValidationObserver,
    ValidationProvider,
  },
  computed: {
    ...mapState({
      classDetail: (state) => state.classes.classDetail,
      attendance: (state) => state.attendances.attendance,
    }),
  },
  methods: {
    ...mapActions({
      actNewAttendance: 'attendances/actNewAttendance',
    }),
    onsubmit() {
      this.$refs.form.validate().then((success) => {
        if (success) {
          const data = {
            key: this.classDetail.QRCode.key,
            user_id: Number(this.user_id),
            timeAttendance: dayjs().unix(),
            idClass: this.classDetail._id,
          };
          setTimeout(async () => {
            await this.actNewAttendance(data)
              .then((res) => {
                if (this.attendance.type !== 'error') {
                  this.activePopupAttendance = false;
                  this.$toast.success('Successfully authenticated');
                }
              })
              .catch((error) => {
                console.log('error = ', error);
              });
          }, 200);
        }
      });
    },
    handleAttendance() {},
    handleSubmitAttendance() {},
  },
};
</script>

<style lang="scss" scoped>
.page-content {
  section:nth-child(1) {
    & > div {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }

  section:nth-child(2) {
    & > div {
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
    }
  }
}

.current-course {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

button {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);

  &:hover,
  &:focus-visible,
  &:active {
    opacity: 0.75;
  }
}

.class-base-info {
  & > div {
    padding-bottom: 24px;

    & + div {
      padding-top: 24px;
      border-top: 1px solid #e0e0e0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }
}

.progress-bar {
  &:before {
    content: '';
    position: absolute;
    height: 100%;
    top: 0;
    left: 0;
    border: 0;
    border-left: 1px solid #aeaeae;
  }

  .progress-point {
    position: absolute;
    height: 20px;
    width: 20px;
    left: calc(1px / 2 - 10px);
    border-radius: 50%;
    border: 1px solid #aeaeae;
    background-color: #ffffff;
  }
}

.custom-input {
  background: #f9f9f9;
  outline: 1px solid #efefef;
  border-radius: 10px;
  padding: 14px 12px;

  &.error {
    outline: 1px solid red;
    caret-color: red;
  }

  &:focus,
  &:focus-visible {
    outline: 1px solid #65af54;
    caret-color: #65af54;
  }
}
</style>
