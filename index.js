var canvas = d3.select("#main").append("svg")
  .attr("width", 800)
  .attr("height", 800)
  .attr("class", "svg-style")
  .append("g")
    .attr("transform","translate(50,50)");

  function selectOption(option) {
    document.querySelector('.dropbtn').innerText = option;
  }

  function openPopup(title,content) {
    var popupTitle = document.getElementById("popupTitle");
    var popupText = document.getElementById("popupText");

    // Set the title and content of the popup
    popupTitle.textContent = title;
    popupText.textContent = content;
    // Show the popup
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "block";
}

function closePopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";
}


/*
var tree = d3.layout.tree()
  .size([200,400]);

d3.json("mydata.json", function (data) {
  var nodes = tree.nodes(data);
  var links = tree.links(nodes);

  var diagonal = d3.svg.diagonal()
  .projection(function (d) {return [d.y+70,d.x];})

  canvas.selectAll(".link")
    .data(links)
    .enter()
    .append("path")
    .attr("class", "link")
    .attr("fill","none")
    .attr("stroke", "black")
    .attr("d", diagonal);
  
  var node = canvas.selectAll(".node")
    .data(nodes)
    .enter()
    .append("g")
      .attr("class", "node")
      .attr("transform", function (d) {return "translate(" + (d.y) + "," +(d.x-25)+")";})
    
  node.append("rect")
    .attr("width",100)
    .attr("height", 50)
    .attr("stroke","black")
    .attr('fill', '#69a3b2');

  node.append("text")
    .text(function (d) {return d.name})
    .attr("dx",30)
    .attr("dy",30);
})
*/

function Geeks(string) {
  let myDiv = document.getElementById(string);
  // creating button element
  let button = document.createElement('DIV');
  button.classList.add("course-body");
  // appending button to div
  myDiv.appendChild(button);
  equalizeSemBodyHeights();
}

function equalizeSemBodyHeights() {
  document.querySelectorAll('.year-body').forEach(function(yearBody) {
      let maxHeight = 0;
      const semBodies = yearBody.querySelectorAll('.sem-body');

      // Reset all sem-body heights to auto to get the natural height
      semBodies.forEach(function(semBody) {
          semBody.style.height = 'auto';
      });

      // Find the tallest sem-body height
      semBodies.forEach(function(semBody) {
          if (semBody.offsetHeight > maxHeight) {
              maxHeight = semBody.offsetHeight;
          }
      });

      // Set all sem-body heights to the tallest found height
      semBodies.forEach(function(semBody) {
          semBody.style.height = `${maxHeight}px`;
      });
  });
}

function ShowTrash() {
  console.log("test");
  let button = document.getElementById('trash-can');
  button.style.opacity = '1';
  console.log("test");
}

function HideTrash() {
  console.log("test");
  let button = document.getElementById('trash-can');
  button.style.opacity = '0';
  console.log("test");
}

function DeleteParent(){
  let element = document.getElementById('fall1-class1');
  element.remove();
  console.log("test");
}