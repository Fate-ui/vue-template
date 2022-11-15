<script setup lang="ts">
  import { ref } from 'vue'
  import { useInterval } from '../hooks/useInterval'

  defineProps<{ msg: string }>()

  const num = ref(1000)

  let countDown = () => {}

  function start() {
    countDown = useInterval(() => {
      num.value--
    })
  }

  function reset() {
    pause()
    num.value = 1000
  }

  function pause() {
    countDown && countDown()
  }
</script>

<template>
  <div w-full>
    <h1>{{ num }}</h1>
    <div flex justify-between>
      <div @click="start" btn mr-4>开始</div>
      <div @click="reset" btn mr-4 bg-pink>重置</div>
      <div @click="pause" btn bg-gray>暂停</div>
    </div>
  </div>
</template>

<style scoped></style>
