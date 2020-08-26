<template>
  <div class="chart-container">
    <h3>Home页面</h3>
    <div id="c1"></div>
  </div>
</template>
<script>
import { Chart } from '@antv/g2'
export default {
  mounted() {
    this.$nextTick(() => {
      const data = [
        { name: '小明', score: 30 },
        { name: '李雷', score: 66 },
        { name: '韩梅梅', score: 50 },
        { name: '小芳', score: 84 },
        { name: '张三', score: 96 }
      ]
      const chart = new Chart({
        container: 'c1',
        width: '100%',
        height: 300
      })

      chart.data(data) // 载入数据源
      chart.interval().position('name*score') // 创建绘图语法，绘制柱状图
      chart.render() // 渲染
      window.chart = chart
    })
  }
}
</script>
<style lang="scss" scoped>
.chart-container {
  background-color: #fefefe;
  padding: 40px 20px;
}
#c1 {
  border: 2px solid #666;
}
</style>
