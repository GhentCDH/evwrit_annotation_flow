<script lang="ts">
import { useIntersectionObserver } from "@vueuse/core";
import { nextTick, ref } from "vue";

function onIdle(cb = () => {}) {
  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(cb);
  } else {
    setTimeout(() => {
      nextTick(cb);
    }, 300);
  }
}

export default {
  props: {
    renderOnIdle: Boolean,
    unrender: Boolean,
    minHeight: Number,
    unrenderDelay: {
      type: Number,
      default: 10000,
    },
  },
  setup(props) {
    const shouldRender = ref(false);
    const targetEl = ref();
    const fixedMinHeight = ref(200);
    let unrenderTimer: number;
    let renderTimer: number;

    const { stop } = useIntersectionObserver(
      targetEl,
      ([{ isIntersecting }]) => {
        if (isIntersecting) {
          // perhaps the user re-scrolled to a component that was set to unrender. In that case stop the unrendering timer
          clearTimeout(unrenderTimer);
          // if we're dealing underndering lets add a waiting period of 200ms before rendering. If a component enters the viewport and also leaves it within 200ms it will not render at all. This saves work and improves performance when user scrolls very fast
          renderTimer = setTimeout(() => (shouldRender.value = true), props.unrender ? 200 : 0);
          shouldRender.value = true;
          if (!props.unrender) {
            stop();
          }
        } else if (props.unrender) {
          // if the component was set to render, cancel that
          clearTimeout(renderTimer);
          unrenderTimer = setTimeout(() => {
            fixedMinHeight.value = targetEl.value.clientHeight ?? 200;
            shouldRender.value = false;
          }, props.unrenderDelay);
        }
      },
      {
        rootMargin: "600px",
      },
    );

    if (props.renderOnIdle) {
      onIdle(() => {
        shouldRender.value = true;
        if (!props.unrender) {
          stop();
        }
      });
    }

    return { targetEl, shouldRender, fixedMinHeight };
  },
};
</script>
<template>
  <div ref="targetEl" :style="`min-height:${fixedMinHeight ? fixedMinHeight : minHeight}px`">
    <slot v-if="shouldRender" />
  </div>
</template>
