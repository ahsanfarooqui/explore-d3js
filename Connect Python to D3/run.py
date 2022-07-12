import pandas as pd
import matplotlib.pyplot as plt
import os
import webbrowser
print("Libraries Imported. Loading dataset...")

#LA Crime Data is used (Los Angeles Crime and Arrest Data \ crime data 2010 to present
# Can be downloaded from https://drive.google.com/file/d/1rXXMGaLj1uHJojVNi80J-PkShheR8Op1/view

df_crime_data_from_2010_to_present = pd.read_csv('crime-data-from-2010-to-present.csv')
print("Dataset Loaded...")
# Viewing Data and its features 
df1 = df_crime_data_from_2010_to_present 

def groupby_weapon(weapon_used):
    if pd.isna(weapon_used) == 1:
        return 'Anonymous weapon'
    else:
        for word in ['EXPLOXIVE','PEPPER SPRAY','BODILY FORCE']:
 
            if word in weapon_used:
                return  'Explosive'
                 
        for word in ['ROPE','PEPPER SPRAY','BAT','CLUB','BLUNT INSTRUMENT', 'SCREWDRIVER', 'AXE' ]:
            if word in weapon_used:
                return 'Tool or Utensil'
                 
        for word in ['POISON','CHEMICAL','DRUGS','SCALDING LIQUID']:
            if word in weapon_used:
                return  'Chemical'
                 
        for word in ['STRONG-ARM','HANDS','FIST','FEET','BODILY FORCE', 'PHYSICAL PRESENCE']:
            if word in weapon_used:
                return 'Bodily Force'
                 
        for word in ['ASSAULT WEAPON','SEMI-AUTOMATIC RIFLE','ASSAULT RIFLE','FIREARM','GUN', 'BOW AND ARROW']:
            if word in weapon_used:
                return 'Assault Weapon'
                 

        for word in ['DIRK','RAZOR','BOWIE KNIFE','CUTTING INSTRUMENT','GLASS','KNIFE', 'CLEAVER']:
            if word in weapon_used:
                return 'Sharp Weapon'       
        else:
            return 'Others'
temp_df = df1['Weapon Description'].copy()
temp_d = pd.DataFrame()
print("Grouping Data...")
temp_d['Weapon Used'] = temp_df.apply(groupby_weapon)

temp_weapon_count = pd.DataFrame()
temp_weapon_count= temp_d['Weapon Used'].value_counts().to_dict()
print("Creating HTML File...")
text = f'''
<html>
    
   <head> 
      <title> Q#6 of Data Visualization     </title>
      <script src="https://d3js.org/d3.v7.min.js"></script>
      <meta charset="utf-8">

      <!-- Load d3.js -->
      <script src="https://d3js.org/d3.v4.js"></script>

      <!-- Create a div where the graph will take place -->
      

      <!-- Color scale -->
      <script src="https://d3js.org/d3-scale-chromatic.v1.min.js"></script>

   </head>

<body>
    <div><h1> Pie Chart of Type of Weapons used and their frequency </h1></div>
    <div id="my_dataviz"></div>
   <script>

      // Create dummy data
      var data = {temp_weapon_count}

      // set the dimensions and margins of the graph
      var width = 500
         height = 500
         margin = 40

      // The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
      var radius = Math.min(width, height) / 2 - margin

      // append the svg object to the div called 'my_dataviz'
      var svg = d3.select("#my_dataviz")
      .append("svg")
         .attr("width", width)
         .attr("height", height)
      .append("g")
         .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");




      // set the color scale
      var color = d3.scaleOrdinal()
      .domain(data)
      .range(d3.schemeSet2);

      // Compute the position of each group on the pie:
      var pie = d3.pie()
      .value(function(d) {{return d.value; }})
      var data_ready = pie(d3.entries(data))
      // Now I know that group A goes from 0 degrees to x degrees and so on.

      // shape helper to build arcs:
      var arcGenerator = d3.arc()
      .innerRadius(0)
      .outerRadius(radius)

      // Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
      svg
      .selectAll('mySlices')
      .data(data_ready)
      .enter()
      .append('path')
         .attr('d', arcGenerator)
         .attr('fill', function(d){{ return(color(d.data.key)) }})
         .attr("stroke", "black")
         .style("stroke-width", "2px")
         .style("opacity", 0.7)
 

// Creating another SVG for Legend
   var width = 500;
   var height = 500;

   var canvus = d3.select("body")
                     .append("svg")
                     .attr("width", width)
                     .attr("height", height)
                     
   var g2 = canvus.append("g")
               .attr("transform", function(d, i) {{
                        return "translate(0,0)";
               }});  


   var leg = g2.selectAll('mySlices')
   .data(data_ready)
   .enter() 
      .append('text').text(function(d,i){{ console.log(i, d.data.key); return d.data.key; }})
      // .attr("transform", function(d) {{ return "translate(" + arcGenerator.centroid(d) + ")";  }})
      // .style("text-anchor", "middle")
      .attr("y", function(d,i){{ return 20*i+25; }})
      .attr("x", 20)
      .attr('fill', 'black')
      // .style("font-size", 17)

   var leg = g2.selectAll('rect')
      .data(data_ready) 
      .enter()
      .append("rect") 
      .attr("y", function(d,i){{ return 20*i+15; }})
      .attr("x", 0)
      .attr("height", "10")
      .attr("width", "10")
      // .style("fill",function(d,i){{ var color = ["blue", "orange","grey","yellow","#5E67F3","#3AEAD8",'brown']; return color[i];}} )
      .attr('fill', function(d){{ return(color(d.data.key)) }})
      .attr("stroke", "black")
      .style("stroke-width", "2px")
      .style("opacity", 1)
   </script>

</body>

</html>
'''


file = open("index.html","w")
file.write(text)
file.close()
print("HTML File Saved. Now Opening...")
url = 'file:\\'+os.getcwd()+'\\' + 'index.html'
webbrowser.open(url,new=2)
