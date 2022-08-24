<template>
  <div class="flex flex-row w-full h-full gap-x-5 page-content">
    <section class="flex flex-col gap-y-5 w-2/3">
      <article class="flex flex-col w-full py-7 px-6 border rounded-lg border-gray-300 bg-white class-base-info">
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

          <span class="font-bold">Mô tả khóa học</span>
          <span class="text-justify"
            >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ratione iste totam recusandae
            tenetur, cum reiciendis ducimus corrupti vel nam aspernatur quia, corporis minima ex consequatur. Reiciendis
            hic officia non.</span
          >
        </div>
      </article>
      <article class="flex flex-col w-full py-7 px-6 border rounded-lg border-gray-300 bg-white">
        <div class="flex flex-col gap-y-5 justify-center">
          <div class="flex flex-col gap-y-3">
            <span class="font-bold">Bài học tiếp theo</span>
            <span class="border rounded-sm border-green-100 w-5"></span>
          </div>

          <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
            <div class="flex items-center gap-x-3">
              <div>
                <img src="@/assets/images/e-learning.png" alt="e-learning" />
              </div>
              <div class="flex flex-col gap-y-1 w-full">
                <div class="flex gap-y-1 justify-between">
                  <span class="font-semibold">Bài 5</span>
                  <span class="text-green-100">Chưa học</span>
                </div>
                <div class="flex gap-y-1 justify-between items-end">
                  <span class="">02:30 - 03:00, thứ 3/ 20-10-2021 </span>
                  <span class="font-semibold"
                    >Bắt đầu sau: <span class="text-green-100 text-2xl font-bold">16h 57m 10s</span></span
                  >
                </div>
              </div>
            </div>
            <div class="flex justify-end gap-y-1 gap-x-3 group-button-next-course">
              <button
                class="px-10 py-3 min-w-[180px] rounded-lg border border-green-100 text-sm font-semibold capitalize"
              >
                Hủy buổi học
              </button>
              <button
                class="px-10 py-3 min-w-[180px] rounded-lg border border-green-100 bg-green-100 text-white text-sm font-semibold capitalize"
              >
                Vào lớp
              </button>
            </div>
          </div>
        </div>
      </article>
      <article class="flex flex-col w-full py-7 px-6 border rounded-lg border-gray-300 bg-white">
        <div class="flex flex-col gap-y-5 justify-center">
          <div class="flex flex-col gap-y-3">
            <span class="font-bold">Danh sách bài học</span>
            <span class="border rounded-sm border-green-100 w-5"></span>
          </div>
          <!-- List Course -->
          <div class="flex flex-col gap-y-3 justify-center">
            <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
              <div class="flex items-center gap-x-3">
                <div>
                  <img src="@/assets/images/e-learning.png" alt="e-learning" />
                </div>
                <div class="flex flex-col gap-y-1 w-full">
                  <div class="flex gap-y-1 justify-between">
                    <span class="font-semibold">Bài 1</span>
                    <span class="font-bold text-red-500">Đã hoàn thành</span>
                  </div>
                  <div class="flex gap-y-1 justify-between items-end">
                    <span class="">02:30 - 03:00, thứ 3/ 20-10-2021 </span>
                    <span class="font-semibold"
                      >Đã xác nhận: <span class="font-normal">03:01, thứ 3/ 20-10-2021 </span></span
                    >
                  </div>
                </div>
              </div>
            </div>

            <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
              <div class="flex items-center gap-x-3">
                <div>
                  <img src="@/assets/images/e-learning.png" alt="e-learning" />
                </div>
                <div class="flex flex-col gap-y-1 w-full">
                  <div class="flex gap-y-1 justify-between">
                    <span class="font-semibold">Bài 2</span>
                    <span class="font-bold text-red-500">Đã hoàn thành</span>
                  </div>
                  <div class="flex gap-y-1 justify-between items-end">
                    <span class="">02:30 - 03:00, thứ 3/ 20-10-2021 </span>
                    <span class="font-semibold"
                      >Đã xác nhận: <span class="font-normal">03:01, thứ 3/ 20-10-2021 </span></span
                    >
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-y-1 gap-x-3 group-button-next-course">
                <span class="font-bold">Đánh giá của giáo viên</span>
                <span class="text-justify"
                  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ratione iste totam recusandae
                  tenetur, cum reiciendis ducimus corrupti vel nam aspernatur quia, corporis minima ex consequatur.
                  Reiciendis hic officia non.</span
                >
              </div>
            </div>

            <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
              <div class="flex items-center gap-x-3">
                <div>
                  <img src="@/assets/images/e-learning.png" alt="e-learning" />
                </div>
                <div class="flex flex-col gap-y-1 w-full">
                  <div class="flex gap-y-1 justify-between">
                    <span class="font-semibold">Bài 3</span>
                    <span class="font-semibold">Đã hủy</span>
                  </div>
                  <div class="flex gap-y-1 justify-between items-end">
                    <span class="">02:30 - 03:00, thứ 3/ 20-10-2021 </span>
                    <span class="font-semibold"
                      >Đã xác nhận: <span class="font-normal">03:01, thứ 3/ 20-10-2021 </span></span
                    >
                  </div>
                </div>
              </div>
              <div class="flex flex-col gap-y-1 gap-x-3 group-button-next-course">
                <span class="font-bold">Lý do hủy</span>
                <span class="text-justify"
                  >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium ratione iste totam recusandae
                  tenetur, cum reiciendis ducimus corrupti vel nam aspernatur quia, corporis minima ex consequatur.
                  Reiciendis hic officia non.</span
                >
              </div>
            </div>

            <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
              <div class="flex items-center gap-x-3">
                <div>
                  <img src="@/assets/images/e-learning.png" alt="e-learning" />
                </div>
                <div class="flex flex-col gap-y-1 w-full">
                  <div class="flex gap-y-1 justify-between">
                    <span class="font-semibold">Bài 4</span>
                    <span class="font-semibold text-red-500">Đã hoàn thành</span>
                  </div>
                  <div class="flex gap-y-1 justify-between items-end">
                    <span class="">02:30 - 03:00, thứ 3/ 20-10-2021 </span>
                    <span class="font-semibold"
                      >Bắt đầu sau: <span class="text-green-100 text-2xl font-bold">00h 00m 00s</span></span
                    >
                  </div>
                </div>
              </div>
              <div class="flex justify-end gap-y-1 gap-x-3 group-button-next-course">
                <button
                  class="px-10 py-3 min-w-[180px] rounded-lg border border-green-100 bg-green-100 text-white text-sm font-semibold capitalize"
                >
                  Xác nhận buổi học
                </button>
              </div>
            </div>

            <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
              <div class="flex items-center gap-x-3">
                <div>
                  <img src="@/assets/images/e-learning.png" alt="e-learning" />
                </div>
                <div class="flex flex-col gap-y-1 w-full">
                  <div class="flex gap-y-1 justify-between">
                    <span class="font-semibold">Bài 5</span>
                    <span class="font-semibold text-green-100">Chưa học</span>
                  </div>
                  <div class="flex gap-y-1 justify-between items-end">
                    <span class="">02:30 - 03:00, thứ 3/ 20-10-2021 </span>
                    <span class="font-semibold"
                      >Bắt đầu sau: <span class="text-green-100 text-2xl font-bold">16h 57m 10s</span></span
                    >
                  </div>
                </div>
              </div>
              <div class="flex justify-end gap-y-1 gap-x-3 group-button-next-course">
                <button
                  class="px-10 py-3 min-w-[180px] rounded-lg border border-green-100 text-sm font-semibold capitalize"
                >
                  Hủy buổi học
                </button>
                <button
                  class="px-10 py-3 min-w-[180px] rounded-lg border border-green-100 bg-green-100 text-white text-sm font-semibold capitalize"
                >
                  Vào lớp
                </button>
              </div>
            </div>

            <div class="w-full py-7 px-6 border rounded-lg border-gray-300 bg-gray-600 current-course class-base-info">
              <div class="flex items-center gap-x-3">
                <div>
                  <img src="@/assets/images/e-learning.png" alt="e-learning" />
                </div>
                <div class="flex flex-col gap-y-1 w-full">
                  <div class="flex gap-y-1 justify-between">
                    <span class="font-semibold">Bài 6</span>
                    <span class="font-semibold text-green-100">Chưa học</span>
                  </div>
                  <div class="flex gap-y-1 justify-between items-end">
                    <span class="">02:30 - 03:00, thứ 3/ 20-10-2021 </span>
                    <span class="font-semibold"
                      >Bắt đầu sau: <span class="text-green-100 text-2xl font-bold">16h 57m 10s</span></span
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- End List Course -->
        </div>
      </article>
      <article class="flex flex-col w-full py-7 px-6 border rounded-lg border-gray-300 bg-white">
        <div class="flex flex-col gap-y-5 justify-center">
          <div class="flex flex-col gap-y-3">
            <span class="font-bold">Tài liệu khóa học</span>
            <span class="border rounded-sm border-green-100 w-5"></span>
          </div>
          <!-- List Media -->
          <div class="grid gap-x-6 gap-y-5 grid-cols-5">
            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-word.png" alt="File type word" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-word.png" alt="File type word" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-word.png" alt="File type word" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-word.png" alt="File type word" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-word.png" alt="File type word" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-mp3-audio-music.png" alt="File type mp3 aution music" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-mp3-audio-music.png" alt="File type mp3 aution music" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-mp3-audio-music.png" alt="File type mp3 aution music" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-mp3-audio-music.png" alt="File type mp3 aution music" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/file-type-mp3-audio-music.png" alt="File type mp3 aution music" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/application-pdf.png" alt="File type pdf" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/application-pdf.png" alt="File type pdf" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/application-pdf.png" alt="File type pdf" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/application-pdf.png" alt="File type pdf" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>

            <div class="flex flex-col gap-y-1 w-full">
              <div class="flex items-center justify-center py-5 bg-gray-100 w-full border rounded-lg border-gray-300">
                <img src="@/assets/images/file-type/application-pdf.png" alt="File type pdf" />
              </div>
              <div class="flex justify-between items-center">
                <span class="font-semibold text-sm">Learn English...</span>
                <div class="p-1 border rounded-lg border-gray-300 bg-gray-100">
                  <DownloadIcon class="w-2.5 h-2.5" />
                </div>
              </div>
            </div>
          </div>
          <!--  End List Media -->
        </div>
      </article>
    </section>
    <section class="flex w-1/3 h-full">
      <article class="flex flex-col w-full py-7 px-6 border rounded-lg border-gray-300 bg-white class-base-info">
        <div class="flex flex-row gap-x-4 w-full">
          <div class="w-16 h-16 rounded-full border border-gray-300 overflow-hidden">
            <img src="@/assets/images/teacher-1.jpg" alt="" />
          </div>
          <div class="flex flex-col justify-center gap-y-1">
            <span class="uppercase font-bold text-base">TRƯƠNG HUYỀN</span>
            <span class="italic text-xs">Giáo viên chuyên nghiệp</span>
            <span class="border rounded-sm border-green-100 w-5 mt-1"></span>
          </div>
        </div>
        <div class="flex flex-row justify-between w-full h-full">
          <span class="font-bold">Thời gian học</span>
          <span>30 phút</span>
        </div>
        <div class="flex flex-col gap-y-3 w-full h-full">
          <span class="font-bold">Công cụ giao tiếp</span>
          <div class="flex flex-row items-center justify-between gap-y-7">
            <div class="flex flex-col">
              <span>Zoom class room</span>
              <span class="text-green-100">0364111222</span>
            </div>
            <img src="@/assets/images/zoom.png" alt="zoom" />
          </div>
        </div>
        <!-- <div class="flex flex-col gap-y-3 w-full h-full">
          <div class="flex flex-row justify-between w-full h-full">
            <span class="font-bold">Tạm tính</span>
            <span>1.500.000 vnđ</span>
          </div>
          <div class="flex flex-row justify-between w-full h-full">
            <span class="font-bold">Số học viên</span>
            <span>1 học viên (10%/1 người)</span>
          </div>
         </div> -->
        <div class="flex flex-col gap-y-3 justify-between w-full h-full">
          <div class="flex justify-center items-center overflow-hidden border bg-white rounded-lg custom-qrcode">
            <qrcode-vue v-if="qrcodeValue" :value="qrcodeValue" :size="250" level="H" class="" />
          </div>
          <div class="">
            <button
              @click="handleGenerateQrcode"
              class="py-3.5 rounded-lg w-full border border-green-100 bg-green-100 text-white text-sm font-semibold capitalize"
            >
              generate QR code
            </button>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import QrcodeVue from 'qrcode.vue';
import DownloadIcon from '@/assets/icons/download.svg?inline';

export default {
  layout: 'admin',
  components: {
    QrcodeVue,
    DownloadIcon,
  },
  data() {
    return {
      data: [],
      qrcodeValue: `${process.env.baseUrl}take-roll-call/`,
    };
  },
  methods: {
    handleGenerateQrcode() {},
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

.current-course {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

button {
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.15);
}

.custom-qrcode {
  width: 100%;
  &:after {
    content: '';
    padding-bottom: 100%;
  }
}
</style>
