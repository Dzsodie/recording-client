<template>
  <div class="max-w-4xl mx-auto mt-6">
    <h2 class="text-2xl font-bold text-center">Recording List</h2>

    <div v-if="loading" class="text-center text-gray-500">Loading...</div>

    <div v-else>
      <div v-for="recording in recordings" :key="recording.id" class="mb-4">
        <RecordingItem :recording="recording" :socket="socket" />
      </div>
    </div>
  </div>
</template>

<script>
import RecordingItem from "@/components/RecordingItem.vue";

export default {
  components: { RecordingItem },
  data() {
    return {
      recordings: [],
      loading: true,
      socket: null,
    };
  },
  mounted() {
    console.log("Connecting to WebSocket...");
    this.connectWebSocket();
  },
  methods: {
    connectWebSocket() {
      this.socket = new WebSocket("ws://localhost:8080/ws/recordings");

      this.socket.onopen = () => {
        console.log("WebSocket connected!");
      };

      this.socket.onmessage = (event) => {
        console.log("WebSocket message received:", event.data);
        try {
          this.recordings = JSON.parse(event.data);
          this.loading = false;
        } catch (error) {
          console.error("Error parsing WebSocket data:", error);
        }
      };

      this.socket.onerror = (error) => {
        console.error("WebSocket error:", error);
      };

      this.socket.onclose = () => {
        console.warn("WebSocket disconnected. Reconnecting in 5s...");
        setTimeout(this.connectWebSocket, 5000);
      };
    },
  },
};
</script>
