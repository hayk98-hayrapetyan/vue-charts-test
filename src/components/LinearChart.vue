<template>
  <div class="example">
    <apexchart 
      width="600" type="line" 
      :options="options" :series="series">
    </apexchart>
  </div>
</template>

<script>
export default {
    props: {
        title: String,
        chart: Array
    },
    computed: {
        options(){
            return ({
                chart: {
                    id: 'vuechart-example'
                },
                xaxis: {
                    'categories': this.chart
                },
                title: {
                    text: this.title
                }
            })
        },
        series(){
            return ([{
                name: '',
                data: this.chart
            }])
        }
    },
    methods: {
        generateDayWiseTimeSeries(baseval, count, yrange) {
            var i = 0;
            var series = [];
            while (i < count) {
                var x = baseval;
                var y = Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
                series.push([x, y]);
                baseval += 86400000;
                i++;
            }
            return series;
        },
    }
}
</script>