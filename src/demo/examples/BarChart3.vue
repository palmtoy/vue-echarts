<script setup>
import { use } from "echarts/core";
import { BarChart } from "echarts/charts";
import { GridComponent, DatasetComponent } from "echarts/components";
import { shallowRef, onBeforeUnmount } from "vue";
import VChart from "../../ECharts";

use([BarChart, DatasetComponent, GridComponent]);

const id = shallowRef("bar3");
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

function randomData(multiplier) {
  const maxNum = 7;
  const data = [];
  for (let i = 0; i < maxNum; i++) {
    const rdm = Math.round((1 + Math.random()) * multiplier * 100);
    data.push(rdm);
  }
  return data;
}

function getData() {
  return {
    tooltip: {
      trigger: "axis",
      axisPointer: {
        // Use axis to trigger tooltip
        type: "shadow" // 'shadow' as default; can also be 'line' or 'shadow'
      }
    },
    legend: {},
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true
    },
    // Horizontal bar chart so x-axis is value, y-axis is category
    xAxis: {
      type: "value"
    },
    yAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    /*
    // Vertical bar chart so x-axis is category, y-axis is value
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    },
    yAxis: {
      type: "value"
    },
    */
    series: [
      {
        name: "Direct",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        data: randomData(3)
      },
      {
        name: "Mail Ad",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        data: randomData(1)
      },
      {
        name: "Affiliate Ad",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        data: randomData(2)
      },
      {
        name: "Video Ad",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        data: randomData(5)
      },
      {
        name: "Search Engine",
        type: "bar",
        stack: "total",
        label: {
          show: true
        },
        emphasis: {
          focus: "series"
        },
        data: randomData(8)
      }
    ]
  };
}
</script>

<template>
  <h3 :id="id">
    <a :href="`#${id}`">
      Horizontal Bar chart3
      <small>( with async data )</small>
    </a>
  </h3>
  <section>
    <figure class="fig hero">
      <VChart
        :option="option"
        autoresize
        :loading="loading"
        :loadingOptions="loadingOptions"
      />
    </figure>
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
  </section>
</template>

<style>
.fig {
  display: flex;
  justify-content: center;
  width: fit-content;
  margin: 2em auto;

  .echarts {
    width: calc(60vw + 4em);
    height: 360px;
    max-width: 720px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    box-shadow: 0 0 45px rgba(0, 0, 0, 0.2);
  }
}

@media (max-width: 980px) {
  .fig {
    width: 100vw;
    margin: 1em auto;

    .echarts {
      width: 100%;
      min-width: 0;
      height: 60vw;
      border: none;
      border-radius: 0;
      box-shadow: none;
    }
  }
}

@media (min-width: 980px) {
  .fig.half {
    .echarts {
      width: 28vw;
      min-width: 240px;
      height: 180px;
    }

    & + & {
      margin-left: 30px;
    }
  }
}
</style>
