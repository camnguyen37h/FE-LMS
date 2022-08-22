<template>
  <section class="flex flex-col gap-y-4 items-center py-8 w-24 bg-gray-900">
    <button class="p-2 text-white font-bold text-2xl">LMS</button>
    <div class="flex flex-col gap-y-4 items-end self-end">
      <div v-for="(menu, index) in menus" :key="index" @click="handleChangeTitle(menu.name)">
        <nuxt-link v-if="!menu.path.startsWith('http')" :to="menu.path" :title="menu.path">
          <div class="active-menu">
            <button class="p-4 my-4 mr-4 ml-3 rounded-xl text-primary" @click="activeMenu = menu.name">
              <Component :is="menu.icon" class="w-6 h-6 fill-current" />
            </button>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
import HomeIcon from '@/assets/icons/home.svg?inline';
import DiscountIcon from '@/assets/icons/discount.svg?inline';
import GraphIcon from '@/assets/icons/graph.svg?inline';
import MessageIcon from '@/assets/icons/message.svg?inline';
import NotificationIcon from '@/assets/icons/notification.svg?inline';
import SettingsIcon from '@/assets/icons/settings.svg?inline';
import LogoutIcon from '@/assets/icons/logout.svg?inline';

export default {
  props: {
    pageName: String,
  },
  components: {
    HomeIcon,
    DiscountIcon,
    GraphIcon,
    MessageIcon,
    NotificationIcon,
    SettingsIcon,
    LogoutIcon,
  },
  data() {
    return {
      activeMenu: 'Dashboard',
      menus: [
        { name: 'Dashboard', icon: HomeIcon, path: '/admin' },
        { name: 'Teachers', icon: DiscountIcon, path: '/admin/teachers' },
        { name: 'Students', icon: GraphIcon, path: '/admin/students' },
        { name: 'Notifications', icon: NotificationIcon, path: '/admin/notifications' },
        { name: 'Settings', icon: SettingsIcon, path: '/admin/settings' },
        { name: 'Logout', icon: LogoutIcon, path: '/admin/logout' },
      ],
    };
  },
  mounted() {
    this.$emit('changeTitleEvent', { pageName: 'Ahihi' });
  },
  methods: {
    handleChangeTitle(pageName) {
      console.log('xxx');
      this.$emit('changeTitleEvent', { pageName });
    },
  },
};
</script>

<style lang="scss" scoped>
a.nuxt-link-exact-active.nuxt-link-active {
  .active-menu {
    @apply bg-white rounded-l-xl relative before:absolute before:w-4 before:h-8 before:-top-8 before:rounded-br-xl before:right-0 before:shadow-inverse-top after:absolute after:w-4 after:h-8 after:-bottom-8 after:rounded-tr-xl after:right-0 after:shadow-inverse-bottom;

    button {
      @apply text-white shadow-primary bg-primary;
    }
  }
}
</style>
