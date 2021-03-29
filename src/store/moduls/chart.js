export default ({
    namespaced: true,
    state: {
        charts: []
    },
    mutations: {
        addChart(state, chart){
            state.charts.push(chart);
        },
        editChart(state, chart){
            // this.$set(state.charts[chart.index], 'chart', chart.chart)
            state.charts[chart.index].chart = chart.chart;
        }
    }
})