//---------This starts the barchart-----------

function generateGraphs(data) {
    d3.selectAll("svg > *").remove();

    var width = 900;
    var height = 450;
    var margin = { top: 50, bottom: 50, left: 50, right: 50 }
    function getMax(arr, prop) {
        var max;
        for (var i = 0; i < arr.length; i++) {
            if (max == null || parseInt(arr[i][prop]) > parseInt(max[prop]))
                max = arr[i];
        }
        console.log(max);
        return max;
    }

    var max_val = getMax(data, 'counts');
    console.log(max_val)

    d3.select("#maindiv").html("");

    var mainsvg = d3.select("#maindiv")
        .append("svg")
        .attr("width", width - margin.left - margin.right)
        .attr("height", height - margin.top - margin.bottom)
        .attr("viewBox", [0, 0, width, height]);

    var x = d3.scaleBand()
        .domain(d3.range(data.length))
        .range([margin.left, width - margin.right])
        .padding(0.1)


    var y = d3.scaleLinear()
        .domain([0, max_val['counts']])
        .range([height - margin.bottom, margin.top])

    console.log("y domain")
    console.log(y.domain());
    console.log(y.range());

    console.log("x domain")
    console.log(x.domain());
    console.log(x.range());

    var color = d3.scaleOrdinal()
        .domain(data)
        .range(["#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e","#16a085","#27ae60","#2980b9","#8e44ad","#2c3e50","#f1c40f","#e67e22","#e74c3c","#ecf0f1","#95a5a6","#f39c12","#d35400","#c0392b","#bdc3c7","#7f8c8d"])
    console.log(d=> d.counts())
    mainsvg
        .append("g")
        .selectAll("rect")
        .data(data)
        .enter()
        .append("rect")
        .attr("fill", function (d, i) { return color(d.binname); })
        .attr('x', (d, i) => x(i))
        .attr('y', (d) => y(d.counts))
        .attr('title', (d) => d.counts)
        .attr("height", d => y(0) - y(d.counts))
        .attr("width", x.bandwidth())
        .attr("id", function (d, i) { return "key_" + d.binname; })
        
        .on('mouseenter', function (d) {
            d3.select("#key_" + d.binname).attr('fill', 'black');
            d3.select("#keya_" + d.binname).attr('fill', 'black');
        })
        .on('mouseleave', function (d) {
            d3.select("#key_" + d.binname).attr('fill', color(d.binname));
            d3.select("#keya_" + d.binname).attr('fill', color(d.binname));
        });

    function yAxis(g) {
        g.attr("transform", `translate(${margin.left}, 0)`)
            .call(d3.axisLeft(y).ticks(null, data.format))
            .attr("font-size", '20px')
    }

    function xAxis(g) {
        g.attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(i => data[i].binname))
            .attr("font-size", '20px')
    }


    mainsvg.append('g').call(xAxis);
    mainsvg.append('g').call(yAxis);


    //---------This ends the barchart-----------

    var pie_height = 600;
    var pie_width = 1200;
    var pie_radius = 100;


    var svg = d3.select("#maindiv")
        .append("svg")
        .attr("height", pie_height)
        .attr("width", pie_width)

    var pie_data = d3.pie().sort(null).value(function (d) { return d.counts; })(data);

    // var color = d3.scaleOrdinal()
    //         .domain(pie_data)
    //         .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

    var segments = d3.arc()
        .innerRadius(0)
        .outerRadius(pie_radius)
        .padAngle(0.05)
        .padRadius(50);

    var sections = svg.append("g").attr("transform", "translate(250,250)")
        .selectAll("path")
        .data(pie_data)
        .enter()
        .append("path")
        .attr("fill", function (d) { return color(d.data.binname) })
        .attr("id", function (d, i) { return "keya_" + d.data.binname; })
        .attr("d", segments)
        .attr("text-anchor", "middle")
    .text( function(d, i) {
      return data[i].binname})
        .on('mouseenter', function (d) {
            d3.select("#key_" + d.data.binname).attr('fill', 'black');
            d3.select("#keya_" + d.data.binname).attr('fill', 'black');
        })
        .on('mouseleave', function (d) {
            d3.select("#key_" + d.data.binname).attr('fill', color(d.data.binname));
            d3.select("#keya_" + d.data.binname).attr('fill', color(d.data.binname));

        });

        var legend2 = svg.append("g").text("Ahsan")
                   
        var leg = svg.selectAll('rect')
                   .data(data) 
                   .enter()
                   .append("rect") 
                   .attr("x", function(d,i){ return 50+80*i; })
                   .attr("y", 400)
                   .attr("height", "10")
                   .attr("width", "10")
                   .style("fill",function(d,i){ return color(d.binname);}) 
       
         var name = ["A - D", "E - H", "I - L", "M - P", "Q - U", "V - Z"]             
         var text = svg.selectAll('text')
                     .data(data) 
                     .enter()
                     .append('text').text(function(d,i){ return d.binname; })
                     .attr("x", function(d,i){ return 80*i+65; })
                     .attr("y", 410)
                     .attr('fill', 'black')


        // var legends = svg.append("g")
        //                 .attr("transform","translate(150,500)")
        //                 .selectAll(".legends")
        //                 .data(data)
        //                 .enter()
        //                 .append("g")
        //                 .classed("legends",true)
        //                 .attr("x",function(d,i){return 80*i;})
        //                 .attr("y",450)
        //                // .attr("transform",function(d,i){return "translate(0,"+(i+1)*30+")";})
        //                 .append("rect")
        //         .attr("width",20)
        //         .attr("height",20)
        //         .attr("fill",function (d) { console.log(color(d.binname)); return color(d.binname)});

        // svg.append("text").text(function(d){return d.binname;})
        //         .attr("fill",function (d) { return color(d.binname);})
        //          .attr("x",50)
        //          .attr("y",50)
        //          .style("font-size",12);



}


function range(start, end) {
    return Array(end - start).fill().map((_, idx) => start + idx)
}

function updateTextInput(val) {
    document.getElementById('textInput').value = val;
}

function get_counts(name, bins) {
    //var name = "Ahsan Farooqui";
    name = name.toUpperCase();
    console.log(name);

    var a = bins;

    windoww = a;
    console.log(windoww);

    var ranges = [];

    temp = [];

    bins = parseInt(bins);

    for (i = 65; i < 91; i += bins) {
        console.log(i + bins);
        if (i + bins < 91) {
            temp = range(i, i + bins);
        }
        else {
            temp = range(i, 91);
        }
        bin_name = String.fromCharCode(temp.at(0)) + "-" + String.fromCharCode(temp.at(-1))
        console.log(bin_name)

        var count = 0;

        for (j = 0; j < name.length; j++) {

            char_val = name.charCodeAt(j);
            //console.log(char_val);
            if (temp.includes(char_val)) {

                count = count + 1;

            }

        }

        ranges.push({ binname: bin_name, counts: count })


    }

    console.log(ranges);
    generateGraphs(ranges);
    
}