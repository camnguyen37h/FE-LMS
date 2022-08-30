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
          <span class="font-bold">Trạng thái: <span class="text-green-100">XXX</span></span>
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
    </section>
    <section class="flex w-1/3 h-full"></section>
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

  &:hover,
  &:focus-visible,
  &:active {
    opacity: 0.75;
  }
}

.custom-qrcode {
  width: 100%;
  &:after {
    content: '';
    padding-bottom: 100%;
  }
}
.custom-result-cancel-course {
  background: #f9f9f9;
  outline: 1px solid #efefef;
  border-radius: 10px;
  padding: 14px 12px;

  &:focus,
  &:focus-visible {
    outline: 1px solid #65af54;
    caret-color: #65af54;
  }
}
</style>
