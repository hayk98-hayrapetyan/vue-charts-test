<template>
  <div id="app">
    <h1>Vue Chart</h1>
    <AddChart />
    <div class="container" v-if="charts.length">
      <AppChart 
        v-for="(chart, i) in charts" 
        :key="chart.title"
        :chart="chart"
        :index="i"
      />
    </div>
  </div>
</template>

<script>
import AddChart from "./components/AddChart";
import AppChart from './views/AppChart';

export default {
  components: {AddChart, AppChart},
  computed: {
    charts(){
      return this.$store.state.chart.charts
    }
  },
}
</script>


<style lang="scss" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  h1 {
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: space-around;
  }
}

</style>
