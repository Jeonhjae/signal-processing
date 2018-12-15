window.onload = function () {
 // based on prepared DOM, initialize echarts instance
 var myChart = echarts.init(document.getElementById('test'));
 myChart.showLoading();
 let data = [{
  category: 0
  draggable: false
  id: "1"
  itemStyle: null
  name: "12"
  symbolSize: 10
  value: 10
  x: null
  y: null
 }, {
  category: 0
  draggable: false
  id: "1"
  itemStyle: null
  name: "13"
  symbolSize: 10
  value: 10
  x: null
  y: null
 }, {
  category: 0
  draggable: false
  id: "1"
  itemStyle: null
  name: "14"
  symbolSize: 10
  value: 10
  x: null
  y: null
 }, {
  category: 0
  draggable: false
  id: "1"
  itemStyle: null
  name: "15"
  symbolSize: 10
  value: 10
  x: null
  y: null
 }, {
  category: 1
  draggable: false
  id: "1"
  itemStyle: null
  name: "26"
  symbolSize: 10
  value: 10
  x: null
  y: null
 },{
  category: 1
  draggable: false
  id: "1"
  itemStyle: null
  name: "64"
  symbolSize: 10
  value: 10
  x: null
  y: null
 }
]
    myChart.hideLoading();

   
    option = {
        title: {
            text: 'Les Miserables',
            subtext: 'Default layout',
            top: 'bottom',
            left: 'right'
        },
        tooltip: {},
        legend: [{
            // selectedMode: 'single',
            data: categories.map(function (a) {
                return a.name;
            })
        }],
        animation: false,
        series : [
            {
                name: 'Les Miserables',
                type: 'graph',
                layout: 'force',
                data: graph.nodes,
                links: graph.links,
                categories: categories,
                roam: true,
                label: {
                    normal: {
                        position: 'right'
                    }
                },
                force: {
                    repulsion: 100
                }
            }
        ]
    };

    myChart.setOption(option);
}, 'xml');
}
