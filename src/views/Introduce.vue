<template>
  <el-card class="account-container">
    <h1>系统简介</h1>
    <div style="line-height: 30px; margin-bottom: 20px;">
      vue3-admin 是一套企业级后台管理系统，基于 <a @click="goVue">Vue 3.0</a> 相关技术栈开发，供各位开发者们体验和学习，一定给你最好的学习体验。
    </div>

    <el-row :gutter="20">
      <el-col :span="12">
        <div ref="mainA" style="width: 100%; height: 400px"></div>
      </el-col>
      <el-col :span="12">
        <div ref="mainB" style="width: 100%; height: 400px"></div>
      </el-col>
    </el-row>

  </el-card>
</template>

<script setup>
import { onMounted, reactive, ref, toRefs } from 'vue'
import * as echarts from "echarts";

const mainA = ref() // 使用ref创建虚拟DOM引用，使用时用main.value
const mainB = ref() // 使用ref创建虚拟DOM引用，使用时用main.value
onMounted(
  () => {
    chartA()
    chartB()
  }
)

var radarOptions = reactive({
  title: {
    text: '雷达图',
    top: '10',
    left: '10'
  },
  radar: {
    indicator: [
      { name: 'Sales' },
      { name: 'Administration' },
      { name: 'Information Technology' },
      { name: 'Customer Support' },
      { name: 'Development' },
      { name: 'Marketing' }
    ]
  },
  series: [
    {
      name: 'Budget vs spending',
      type: 'radar',
      data: [
        {
          value: [4200, 3000, 20000, 35000, 50000, 18000],
          name: 'Allocated Budget'
        },
        {
          value: [5000, 14000, 28000, 26000, 42000, 21000],
          name: 'Actual Spending'
        }
      ]
    }
  ]
})



// 仪表盘
var gaugeOptions = reactive({
  title: {
    text: 'ECharts 入门示例'
  },
  tooltip: {},
  legend: {
    data: ['销量']
  },
  xAxis: {
    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
  },
  yAxis: {},
  series: [
    {
      name: '销量',
      type: 'bar',
      data: [5, 20, 36, 10, 10, 20]
    }
  ]
})

var chartA = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChartA = echarts.init(mainA.value);
  // 指定图表的配置项和数据

  // 使用刚指定的配置项和数据显示图表。
  myChartA.setOption(radarOptions);
}


var chartB = () => {
  // 基于准备好的dom，初始化echarts实例
  var myChartB = echarts.init(mainB.value);
  // 指定图表的配置项和数据

  // 使用刚指定的配置项和数据显示图表。
  myChartB.setOption(gaugeOptions);
}

var goVue = () => {
  console.log('打开外网这样写')
  window.open('https://cn.vuejs.org/guide/introduction.html', 'target')
}
</script>
<style scoped>
.course {
  font-weight: bold;
  display: inline-block;
}
.course li {
  line-height: 36px;
  color: #409eff;
  cursor: pointer;
}
</style>