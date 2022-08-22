<template>
  <div class="flex w-full min-h-screen font-sans bg-white">
    <AdminHeader :pageName="pageName" v-on:changeTitleEvent="handleChangeTitle" />
    <main class="flex flex-col flex-1 gap-6 p-4">
      <header>
        <h1 class="text-3xl font-semibold leading-loose text-black">{{ pageName }}</h1>
        <div class="text-black">Tuesday 2 Feb, 2021</div>
      </header>
      <hr class="border-gray-700" />
      <Nuxt />
    </main>
    <aside class="flex flex-col gap-y-6 pt-6 pr-6 w-96">Ahihi</aside>
    <AdminFooter />
  </div>
</template>

<script>
import AdminHeader from '@/layouts/components/AdminHeader';
import AdminFooter from '@/layouts/components/AdminFooter';

export default {
  data() {
    return {
      pageName: '',
    };
  },
  components: {
    AdminHeader,
    AdminFooter,
  },
  methods: {
    handleChangeTitle({ pageName }) {
      this.pageName = pageName;
    },
  },
};
</script>
