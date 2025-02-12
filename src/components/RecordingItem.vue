<template>
  <div class="border rounded-lg p-4 shadow-md bg-white">
    <h3 class="text-lg font-semibold">{{ recording.title }}</h3>
    <p><strong>Duration:</strong> {{ recording.duration }} seconds</p>
    <p><strong>Status:</strong> <span :class="statusClass">{{ recording.status }}</span></p>

    <div v-if="recording.status === 'RECORDED'" class="mt-2">
      <label class="block">Sedation:</label>
      <input v-model="editableData.sedation" class="border p-2 w-full rounded-md" @input="updateRecording" />

      <label class="block mt-2">Activation:</label>
      <input v-model="editableData.activation" class="border p-2 w-full rounded-md" @input="updateRecording" />

      <label class="block mt-2">Medication:</label>
      <input v-model="editableData.medication" class="border p-2 w-full rounded-md" @input="updateRecording" />
    </div>

    <div v-else>
      <p><strong>Sedation:</strong> {{ recording.sedation }}</p>
      <p><strong>Activation:</strong> {{ recording.activation }}</p>
      <p><strong>Medication:</strong> {{ recording.medication }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["recording", "socket"],
  data() {
    return {
      editableData: { ...this.recording },
    };
  },
  watch: {
    recording: {
      handler(newVal) {
        this.editableData = { ...newVal }; // Update local state if recording changes
      },
      deep: true,
    },
  },
  methods: {
    updateRecording() {
      if (this.socket && this.socket.readyState === WebSocket.OPEN) {
        this.socket.send(JSON.stringify({ action: "update", recording: this.editableData }));
        console.log("Sent updated recording to backend:", this.editableData);
      }
    },
  },
  computed: {
    statusClass() {
      return {
        "text-yellow-500": this.recording.status === "SCHEDULED",
        "text-green-500": this.recording.status === "RECORDED",
        "text-blue-500": this.recording.status === "REPORTED",
      };
    },
  },
};
</script>

<style scoped>
input {
  border: 1px solid #ccc;
  padding: 6px;
  border-radius: 4px;
  width: 100%;
}
</style>
