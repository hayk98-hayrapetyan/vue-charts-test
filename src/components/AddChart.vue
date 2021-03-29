<template>
<div>
    <div class="wrapper">
        <div>
            <h4>Title</h4>
            <input v-model.trim="form.title" />
        </div>
        <div>
            <h4>Integers</h4>
            <input 
                type="number" 
                v-for="(label, i) in form.labels" 
                :key="i"
                v-model.trim="label.int"
            />
            <button @click="addField">Add field</button>
        </div>
        <div>
            <h4>Chart type</h4>
            <select v-model="form.chart">
                <option 
                    v-for="chart in charts" 
                    :value="chart" 
                    :key="chart"
                >{{chart}}</option>
            </select>
        </div>
    </div>
    <button @click="createChart" class="mb-3">Create</button>
</div>
</template>

<script>
import {mapMutations} from 'vuex';

export default {
    data: () => ({
        form: {
            title: '',
            labels: [{int: ''}],
            chart: ''
        },
        charts: ['Line Chart', 'Bar Chart']
    }),
    methods: {
        ...mapMutations({
            addChart: 'chart/addChart'
        }),
        createChart(){
            if(!this.form.title || !this.form.chart || this.form.labels.some(e => e.int == '')){
                alert('Please fill all fields');
                return;
            }
            this.form.labels = this.form.labels.map(e => e.int);
            this.addChart(this.form)

            this.form = {
                title: '',
                labels: [{int: ''}],
                chart: ''
            }
        },
        addField(){
            this.form.labels.push({int: ''})
        }
    }
}
</script>

<style lang="scss" scoped>
.wrapper {
    display: flex;
    justify-content: space-around;
    max-width: 600px;
    margin: 40px auto 20px;
    button {
        margin-left: 10px;
    }
    input {
        display: block;
        margin: 5px;
    }
}
button {
    padding: 8px 12px;
    outline: none;
    border: none;
    background: blue;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
}
.mb-3 {
    margin-bottom: 40px;
    background: green;
}
</style>