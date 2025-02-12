import { describe, it, expect, vi } from "vitest";
import { mount } from "@vue/test-utils";
import RecordingList from "@/components/RecordingList.vue";

async function flushPromises() {
  return new Promise((resolve) => setTimeout(resolve, 100)); // 👈 Give Vue time to update
}

describe("RecordingList.vue - WebSocket", () => {
  it("updates recordings list when WebSocket sends data", async () => {
    const mockSocket = {
      send: vi.fn(),
      close: vi.fn(),
      addEventListener: vi.fn(),
    };

    // Manually trigger WebSocket event after 10ms
    setTimeout(() => {
      console.log("Mock WebSocket sending message...");
      const event = new MessageEvent("message", {
        data: JSON.stringify([
          { id: "1", title: "New Recording", duration: 500, status: "RECORDED" },
        ]),
      });
      mockSocket.onmessage(event);
    }, 10);

    global.WebSocket = vi.fn(() => mockSocket);

    const wrapper = mount(RecordingList);
    console.log("Before WebSocket connection - recordings:", wrapper.vm.recordings);

    await wrapper.vm.connectWebSocket();

    console.log("WebSocket connected, waiting for messages...");

    await flushPromises(); // 👈 Wait for state update

    console.log("After WebSocket message - recordings:", wrapper.vm.recordings);

    expect(wrapper.vm.recordings.length).toBe(1); // ✅ Should now pass
    expect(wrapper.vm.recordings[0].title).toBe("New Recording");
  });
});
