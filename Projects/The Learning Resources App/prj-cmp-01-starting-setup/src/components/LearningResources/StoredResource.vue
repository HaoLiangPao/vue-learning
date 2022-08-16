<template>
  <ul>
    <LearningResource
      v-for="resource in resources"
      :key="resource.id"
      :title="resource.title"
      :description="resource.description"
      :link="resource.link"
    ></LearningResource>
  </ul>
</template>

<script>
import LearningResource from './LearningResource.vue';

export default {
  props: ['resources'],
  components: {
    LearningResource,
  },
};
</script>

<style scoped>
@import '../../styles/stored-resources.css';
</style>
