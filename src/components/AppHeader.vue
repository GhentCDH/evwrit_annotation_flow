<template>
  <header class="navbar bg-base-200 px-4">
    <div class="flex-1">
      <router-link to="/" class="text-xl font-semibold">Evwrit</router-link>
    </div>
    <div class="flex-none gap-4">
      <span v-if="user" class="text-sm">
        {{ displayName }}
      </span>
      <button class="btn btn-sm btn-outline" @click="handleLogout">
        Logout
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useAuthStore } from "../stores/auth.store";

const authStore = useAuthStore();

const user = computed(() => authStore.user);

const displayName = computed(() => {
  if (!user.value) return "";
  if (user.value.firstName && user.value.lastName) {
    return `${user.value.firstName} ${user.value.lastName}`;
  }
  return user.value.username || user.value.email || "";
});

const handleLogout = () => {
  authStore.logout();
};
</script>
