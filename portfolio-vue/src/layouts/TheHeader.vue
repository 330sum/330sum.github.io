<template>
  <div>
    <ul class="navbar">
      <li class="nav-item">
        <RouterLink to="/" class="nav-link">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/resume"> resu</RouterLink>
      </li>

      <li class="nav-item">
        <RouterLink to="/portfolio"> port</RouterLink>
      </li>

      <li class="nav-item">
        <RouterLink to="/personal-map"> map</RouterLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<style scoped></style>
