<script setup>
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import { GridComponent, DatasetComponent } from "echarts/components";
import { shallowRef, onBeforeUnmount } from "vue";
import VChart from "../../ECharts";
import VExample from "./Example";
import getData from "../data/bar2";

use([BarChart, DatasetComponent, GridComponent]);

const seconds = shallowRef(0);
const loading = shallowRef(false);
const loadingOptions = {
  text: "Loading…",
  color: "#4ea397",
  maskColor: "rgba(255, 255, 255, 0.4)"
};
const option = shallowRef(getData());

let timer = null;

onBeforeUnmount(() => {
  clearInterval(timer);
});

function tick() {
  seconds.value--;

  if (seconds.value === 0) {
    clearInterval(timer);
    loading.value = false;
    option.value = getData();
  }
}

function refresh() {
  // simulating async data from server
  seconds.value = 1;
  loading.value = true;

  timer = setInterval(tick, 1000);
}
</script>

<template>
  <VExample
    id="bar"
    title="Horizontal Bar chart"
    desc="( with async data )"
  >
    <VChart
      :option="option"
      autoresize
      :loading="loading"
      :loadingOptions="loadingOptions"
    />
    <template #extra>
      <p v-if="seconds <= 0">
        <small>Loaded.</small>
      </p>
      <p v-else>
        <small>
          Data coming in
          <b>{{ seconds }}</b>
          second{{ seconds > 1 ? "s" : "" }}...
        </small>
      </p>
      <p class="actions">
        <button @click="refresh" :disabled="seconds > 0">Refresh</button>
      </p>
    </template>
  </VExample>
</template>
