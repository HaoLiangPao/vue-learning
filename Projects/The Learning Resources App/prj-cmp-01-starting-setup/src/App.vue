<template>
  <ul>
    <StoredResourceVue :resources="storedResources"></StoredResourceVue>
  </ul>
</template>

<script>
import StoredResourceVue from './components/LearningResources/StoredResource.vue';

export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation.',
          link: 'https://vewjs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'The must to have learning tool.',
          link: 'https://google.org',
        },
      ],
    };
  },
  components: { StoredResourceVue },
};
</script>

<style>
@import './styles/app.css';
</style>
