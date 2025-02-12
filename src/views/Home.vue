<template>
  <div class="container mt-4">
    <div class="card shadow-sm p-3">
      <h2 class="text-primary">Recording List</h2>
      <RecordingList />
    </div>
  </div>
</template>

<script>
import RecordingList from "@/components/RecordingList.vue";

export default {
  components: { RecordingList },
};
</script>
