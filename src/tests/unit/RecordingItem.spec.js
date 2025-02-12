import { describe, it, expect } from "vitest";
import { mount } from "@vue/test-utils";
import RecordingItem from "@/components/RecordingItem.vue";

describe("RecordingItem.vue", () => {
  it("renders recording title correctly", () => {
    const recording = {
      id: "1",
      title: "Brain Scan",
      duration: 300,
      status: "RECORDED",
      sedation: "Midazolam",
      activation: "Stimulated",
      medication: "Ibuprofen",
    };

    const wrapper = mount(RecordingItem, {
      props: { recording },
    });

    expect(wrapper.text()).toContain("Brain Scan");
    expect(wrapper.text()).toContain("300 seconds");
  });

  it("renders input fields when status is RECORDED", async () => {
    const recording = {
      id: "2",
      title: "EEG Study",
      duration: 200,
      status: "RECORDED",
      sedation: "",
      activation: "",
      medication: "",
    };

    const wrapper = mount(RecordingItem, {
      props: { recording },
    });

    const inputs = wrapper.findAll("input");
    expect(inputs.length).toBe(3); // Sedation, Activation, Medication
  });
});
