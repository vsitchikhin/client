<template>
<span class="shaved-text">
    <span ref="shavedTextElementRef" :class="shavedTextElementClasses"> {{ text }} </span>
  </span>
</template>

<script lang="ts" src="./TextShaver.code.ts"/>

<style scoped lang="scss">
.shaved-text {
  display: block;
  height: var(--shaved-text-max-height);
  max-height: var(--shaved-text-max-height);

  &__original-text {
    display: inline-block;
    height: var(--shaved-text-max-height);
    max-height: var(--shaved-text-max-height);
    overflow: hidden;
  }
}

</style>
