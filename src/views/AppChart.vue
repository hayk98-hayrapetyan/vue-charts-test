<template>
  <div class="home">
    <div 
      class="chart"
    >
      <select v-model="currentChart">
        <option 
            v-for="type in chartsType" 
            :value="type" 
            :key="type"
        >{{type}}</option>
      </select>

      <LinearChart 
        :title="chart.title" 
        :chart="chart.labels" 
        v-if="chart.chart == 'Line Chart'" 
      />

      <BarChart
        v-else
        :show-x-axis="true"
        :points="chart.labels"
        :width="chartWidth"
        :height="chartHeight"
        :show-values="true"
        :use-custom-labels="true"
        :animation-duration="2"
        :title="chart.title"
      />
    </div>
  </div>
</template>

<script>
import BarChart from '@/components/BarChart';
import LinearChart from "@/components/LinearChart"

import {mapMutations} from 'vuex';

export default {
  props: {
      chart: Object,
      index: Number
  },
  components: {
    BarChart, 
    LinearChart
  },
  data() {
    return {
      chartWidth: 450,
      chartHeight: 320,
      chartsType: ['Line Chart', 'Bar Chart'],
      currentChart: this.chart.chart
    };
  },
  methods: {
    ...mapMutations({
        editChart: 'chart/editChart'
    }),
  },
  watch: {
    currentChart(val){
      this.editChart({
        index: this.index,
        chart: val
      })
    }
  }
}
</script>


<style lang="scss" scoped>
.chart {
  width: 46%;
  margin: 2%;
}
</style>