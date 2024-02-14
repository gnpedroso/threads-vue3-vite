<template>
    <div class="col-large push-top" v-if="thread">
        
      <h1>{{ thread.title }}</h1>

      <div class="post-list">
        <div class="post" v-for="postId in thread.posts" :key="postId">
          <div class="user-info">
            <a href="#" class="user-name">{{ userById(postById(postId)?.userId)?.name }}</a>
            
            <a href="#">
              <img class="avatar-large" :src="userById(postById(postId)?.userId)?.avatar" alt="avatar" />
            </a>

            <p class="desktop-only text-small">107 posts</p>
        </div>


          <div class="post-content">
            <div>
              <p>
                {{ postById(postId)?.text }}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import sourceData from '@/data.json';
import { reactive, computed, defineProps } from "vue";

const props = defineProps({
  id: {
    type: String,
    required: true
  }
});

const threads = reactive(sourceData.threads);
const posts = reactive(sourceData.posts);
const users = reactive(sourceData.users);

const thread = computed(() => threads.find(t => t.id === props.id));

const postById = (id: string) => {
  return posts.find(p => p.id === id);
}

const userById = (id: string | undefined) => {
  return users.find(u => u.id === id);
}
</script>


<style scoped>
</style>
