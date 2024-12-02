function randomData(multiplier) {
  const maxNum = 7;
  const data = [];
  for (let i = 0; i < maxNum; i++) {
    const rdm = Math.round((1 + Math.random()) * multiplier * 100);
    data.push(rdm);
  }
  return data;
}

export default function getData() {
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
