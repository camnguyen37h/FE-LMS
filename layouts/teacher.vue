<template>
  <div class="flex w-full min-h-screen font-sans bg-gray-600 flex-col">
    <AdminSidebar />
    <main class="flex justify-center items-center px-12 py-16 ml-24 overflow-hidden">
      <div class="max-w-[1170px] w-full">
        <Nuxt />
      </div>
    </main>
    <AdminFooter />
  </div>
</template>

<script>
import AdminSidebar from '@/layouts/components/AdminSidebar';
import AdminFooter from '@/layouts/components/AdminFooter';

export default {
  data() {
    return {
      pageName: '',
    };
  },
  components: {
    AdminSidebar,
    AdminFooter,
  },
};
</script>
