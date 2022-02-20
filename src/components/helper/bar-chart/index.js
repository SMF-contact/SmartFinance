import React from 'react'; 
import { Column } from '@ant-design/plots'; 
import { each, groupBy } from '@antv/util';
import { Chart } from '@antv/g2'; 
  
function TheBarChart({data}) { 
  
  // 也可以在项目中直接使用 lodash
  const annotations = [];
  each(groupBy(data, 'year'), (values, k) => {
    const value = values.reduce((a, b) => a + b.value, 0);
    annotations.push({
      type: 'text',
      position: [k, value],
      content: `${value}`,
      style: {
        textAlign: 'center',
        fontSize: 18,
        fill: '#fff',
      },
      offsetY: -10,
    });
  });
  const config = {
    data,
    isStack: true,
    xField: 'year',
    yField: 'value',
    seriesField: 'type', 
    colors:['#001122', '#003322', '#004422', '#005522', '#006622', '#007722', '#008822' ],
    height:648, 
    label: {
      // 可手动配置 label 数据标签位置
      position: 'top', 
      
      style: {
        fill: 'red',
        color: 'red',
        opacity: 0.6,
        fontSize: 24
      },
      // 'top', 'bottom', 'middle'
      // 可配置附加的布局方法
      layout: [
        // 柱形图数据标签位置自动调整
        {
          type: 'interval-adjust-position',
        }, // 数据标签防遮挡
        {
          type: 'interval-hide-overlap',
        }, // 数据标签文颜色自动调整
        {
          type: 'adjust-color',
        },
      ],
    },
    // 使用 annotation （图形标注）来展示：总数的 label
    annotations,
  };

  return <Column {...config} />;
}
export default TheBarChart;