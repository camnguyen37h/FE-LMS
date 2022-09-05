<template>
  <div class="flex w-full min-h-screen font-sans bg-gray-600 flex-col">
    <StudentSidebar />
    <main class="flex justify-center items-center px-12 py-16 ml-24 overflow-hidden">
      <div class="max-w-[1170px] w-full">
        <Nuxt />
      </div>
    </main>
    <StudentFooter />
  </div>
</template>

<script>
import StudentSidebar from '@/layouts/components/StudentSidebar';
import StudentFooter from '@/layouts/components/StudentFooter';

export default {
  data() {
    return {
      pageName: '',
    };
  },
  components: {
    StudentSidebar,
    StudentFooter,
  },
};
</script>
