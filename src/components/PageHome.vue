<template>
  <h1>Welcome to the Forum</h1>
  <ThreadList :threads="threads" />
</template>

<script setup lang="ts">
import sourceData from '@/data.json';
import { reactive } from "vue";
import ThreadList from '@/components/ThreadList.vue'

const threads = reactive(sourceData.threads);
</script>


<style scoped>
</style>
