<template>
    <div class="col-full">
      <div class="thread-list">
  
        <h2 class="list-title">Threads</h2>
  
        <div v-if="threads.length">
          <div v-for="thread in props.threads" :key="thread.id" class="thread">
            <div>
              <p>
                <router-link :to="{name: 'ThreadShow', params: {id: thread.id}}">{{ thread.title }}</router-link>
              </p>
              <p class="text-faded text-xsmall">
                By <a href="#">{{ userById(thread.userId)?.name }}</a>, <AppDate :timestamp="thread.publishedAt" />.
              </p>
            </div>
  
            <div class="activity">
              <p class="replies-count">
              {{ thread.repliesCount }} replies
              </p>
  
              <AppAvatarImg class="avatar-medium" :src="userById(thread.userId)?.avatar" />
  
              <div>
                <p class="text-xsmall">
                  <a href="#">{{ userById(thread.userId)?.name }}</a>
                </p>
                <p class="text-xsmall text-faded"><AppDate :timestamp="thread.publishedAt" /></p>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <div v-if="!threads.length" style="padding:10px; text-align: center;">
        <em>No Threads Available</em>
      </div>
    </div>
  </template>

<script setup lang="ts">
import sourceData from '@/data.json';
import type { Thread } from '@/types';
import { reactive, defineProps } from "vue";

const users = reactive(sourceData.users);

const props = defineProps({
  threads: {
    type: Array as () => Thread[],
    required: true
  }
});


const userById = (id: string | undefined) => {
  return users.find(u => u.id === id);
}
</script>


<style scoped>
</style>