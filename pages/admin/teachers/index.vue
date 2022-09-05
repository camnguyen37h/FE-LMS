<template>
  <div class="flex flex-row w-full h-full gap-x-5 page-content">
    <h1>AA</h1>
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
      qrcodeValue: `${process.env.APP_URL}/take-roll-call/`,
    };
  },
  methods: {
    handleGenerateQrcode() {
      console.log('handleGenerateQrcode');
    },
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
</style>
