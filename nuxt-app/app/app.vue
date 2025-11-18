<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const wrapperRef = ref<HTMLElement | null>(null);
const containerRef = ref<HTMLElement | null>(null);
let ctx: gsap.Context;
// リスナー用の変数を定義
let wheelListener: ((this: Window, ev: WheelEvent) => any) | null = null;

// ★ ここにあった const onWheel = ... は削除しました（下で定義しているので不要）

onMounted(async () => {
  await nextTick();

  ctx = gsap.context(() => {
    const container = containerRef.value!;
    const wrapper = wrapperRef.value!;

    ScrollTrigger.matchMedia({
      "(min-width: 769px)": function () {
        // --- PC用の横スクロール設定 ---

        // PCでのみ動作する onWheel 関数を定義
        wheelListener = (e: WheelEvent) => {
          if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
            window.scrollBy(0, e.deltaX);
            e.preventDefault();
          }
        };

        // イベント登録
        window.addEventListener("wheel", wheelListener, { passive: false });

        const moveDistance = container.scrollWidth - wrapper.clientWidth;

        gsap.to(container, {
          x: -moveDistance,
          ease: "none",
          scrollTrigger: {
            trigger: wrapper,
            pin: true,
            scrub: 1,
            end: () => "+=" + moveDistance,
            invalidateOnRefresh: true,
          },
        });
      },
    });
  }, wrapperRef.value!);
});

onUnmounted(() => {
  if (wheelListener) {
    window.removeEventListener("wheel", wheelListener);
  }
  ctx.revert();
});
</script>

<template>
  <div class="main-wrapper">
    <TheHeader />

    <div class="scroll-outer" ref="wrapperRef">
      <div class="horizontal-container" ref="containerRef">
        <div class="horizontal-item"></div>

        <div class="horizontal-item"></div>

        <div class="horizontal-item"></div>

        <div class="horizontal-item">
          <TheFooter />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
@use "/assets/scss/main.scss";
// スクロール領域の外枠
.scroll-outer {
  width: 100vw;
  height: 100dvh;
  overflow: hidden; // 横にはみ出た分を隠す
}

// 横に移動する長いコンテナ
.horizontal-container {
  display: flex;
  width: fit-content;
  height: 100%;
  will-change: transform;
}

.horizontal-item {
  width: 200vw;
  height: 100%;
  flex-shrink: 0;
  @include center;
}
</style>
