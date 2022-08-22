<template>
  <div class="wp-admin">
    <h1>Layout Teacher</h1>
    <AdminHeader />
    <div class="content">
      <Nuxt />
    </div>
    <AdminFooter />
  </div>
</template>

<script>
import AdminHeader from '@/layouts/components/AdminHeader';
import AdminFooter from '@/layouts/components/AdminFooter';

export default {
  components: {
    AdminHeader,
    AdminFooter,
  },
};
</script>
