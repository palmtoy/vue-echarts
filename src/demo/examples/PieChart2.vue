<script setup>
import { use } from "echarts/core";
import { PieChart } from "echarts/charts";
import {
  PolarComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent
} from "echarts/components";
import { shallowRef } from "vue";
import VChart from "../../ECharts";
import VExample from "./Example";

use([
  PieChart,
  PolarComponent,
  TitleComponent,
  LegendComponent,
  TooltipComponent
]);

const option = shallowRef(getData());
const pie = shallowRef(null);

function getData() {
  return {
    textStyle: {
      fontFamily: 'Inter, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 300
    },
    tooltip: {
      trigger: "item",
      formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
      bottom: '2%',
    },
    series: [
      {
        type: "pie",
        radius: "65%",
        center: ["50%", "50%"],
        data: [
          { value: 335, name: "Direct" },
          { value: 310, name: "Email" },
          { value: 234, name: "Ad Networks" },
          { value: 135, name: "Video Ads" },
          { value: 1548, name: "Search Engines" }
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: "rgba(0, 0, 0, 0.5)"
          }
        }
      }
    ]
  };
}
</script>

<template>
  <v-example id="pie" title="Pie chart2 ( Traffic Sources )">
    <v-chart ref="pie" :option="option" autoresize />
  </v-example>
</template>
