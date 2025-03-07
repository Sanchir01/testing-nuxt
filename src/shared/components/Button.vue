<script lang="ts" setup>
export interface IButtonProps{
  text:string
}
defineProps<IButtonProps>();
</script>
<template>
  <button>
    {text}
  </button>
</template>
