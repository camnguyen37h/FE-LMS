<template>
  <div class="flex flex-row w-full h-full gap-x-5 page-content">
    <section class="grid gap-x-6 gap-y-5 grid-cols-2 w-full">
      <article class="flex flex-col w-full px-6 py-3 border rounded-lg border-gray-300 bg-white">
        <a href="/admin/students/classes" class="text-green-100 font-semibold" >Danh sách lớp học</a>
      </article>
      <article class="flex flex-col w-full px-6 py-3 border rounded-lg border-gray-300 bg-white">
        <a href="/admin/students/classes" class="text-green-100 font-semibold" >Danh sách lớp học</a>
      </article>
    </section>
  </div>
</template>

<script>
export default {
  layout: 'admin',
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
</style>