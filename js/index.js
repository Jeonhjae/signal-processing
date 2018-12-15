let myChart;
window.onload = function () {
 // based on prepared DOM, initialize echarts instance
 var canvas = document.getElementById('test');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 
 myChart = echarts.init(canvas);
 myChart.showLoading();
 $.get('https://ecomfe.github.io/echarts-examples/public/data/asset/data/webkit-dep.json', function (webkitDep) {
    myChart.hideLoading();

    option = {
        series: [{
            type: 'graph',
            layout: 'force',
            animation: false,
            label: {
                normal: {
                    position: 'right',
                    formatter: '{b}'
                }
            },
            draggable: true,
            data: webkitDep.nodes.map(function (node, idx) {
                node.id = idx;
                return node;
            }),
            categories: webkitDep.categories,
            force: {
                // initLayout: 'circular'
                // repulsion: 20,
                edgeLength: 5,
                repulsion: 20,
                gravity: 0.2
            },
            edges: webkitDep.links
        }]
    };

    myChart.setOption(option);
});
}

window.onresize = function(event) {
 var canvas = document.getElementById('test');
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 myChart.resize()
};
