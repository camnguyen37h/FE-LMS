<template>
  <transition name="fa">
    <FocusLock :disabled="!show">
      <div
        v-if="show"
        class="transform-position fixed inset-0 h-screen flex items-center justify-center z-50"
        style="background: rgba(0, 0, 0, 0.5)"
      >
        <div
          class="transform-top relative w-10/12 lg:w-4/5 xl:w-4/5 2xl:w-3/5 shadow-lg rounded-lg border-radius-16 object-center modal-container"
          :class="classes"
          :style="cssProps"
          style="overflow-y: auto"
        >
          <div class="border-radius-16 px-5 py-6 bg-white h-full overflow-y-auto overflow-x-hidden relative">
            <button aria-label="close" class="close-btn absolute top-0 right-0 z-10" @click.prevent="$emit('close')" />
            <slot />
            <div class="absolute bottom-0 left-0 w-full">
              <slot name="footer"></slot>
            </div>
          </div>
        </div>
      </div>
    </FocusLock>
  </transition>
</template>

<script>
import FocusLock from 'vue-focus-lock';

export default {
  components: {
    FocusLock,
  },
  computed: {
    cssProps() {
      if (this.classes) return {};
      const styles = {};
      if (this.width) {
        styles.width = Number.parseInt(this.width) + 'px';
      }
      if (this.height) {
        styles.height = Number.parseInt(this.height) + 'px';
      }
      if (this.borderRadius) {
        styles.borderRadius = Number.parseInt(this.radius) + 'px';
      }
      return styles;
    },
  },
  props: {
    title: {
      type: String,
      default: '',
    },
    message: {
      type: String,
      default: '',
    },
    classes: String,
    show: {
      type: Boolean,
      default: false,
    },
    width: {
      type: String,
      default: '300',
    },
    height: {
      type: String,
    },
    radius: {
      type: String,
      default: '16',
    },
  },
};
</script>

<style scoped>
.transform-position {
  padding: 0 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.1s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.border-radius-16 {
  border-radius: 16px;
}
.modal-background {
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  background-size: cover;
}

.close-btn {
  margin-top: 24px;
  margin-right: 20px;
  width: 24px;
  height: 24px;
  background-image: url('~/assets/icons/close-icon.svg');
  cursor: pointer;
}
/* 14 173 241 */

.close-btn:hover {
  background-image: url('~/assets/icons/close-blue-icon.svg');
}
.close-btn:focus {
  outline: none;
}
@media only screen and (max-width: 414px) {
  .modal-container {
    width: 316px !important;
    min-height: 221px;
  }
}
</style>
