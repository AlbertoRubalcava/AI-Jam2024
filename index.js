
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
let classNumber = 0;
function Geeks(string) {
  classNumber++;
  let myDiv = document.getElementById(string);
  // creating button element
  myDiv.innerHTML += `
  <div id="class${classNumber}" class="course-body" onmouseover="ShowTrash(${classNumber})" onmouseleave="HideTrash(${classNumber})" onclick="Geeks('fall1')"
  id="fall1-class1" draggable="true" ondragstart="drag(event)">
      <button id="trash-can${classNumber}" class="trash-can" onclick="DeleteParent(${classNumber})">
          <img src="big-trash-can.svg" height="10px" width="10px"/>
      </button>
  </div>`;
  console.log(`added class${classNumber}`);
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

function ShowTrash(int) {
  let button = document.getElementById(`trash-can${int}`);
  button.style.opacity = '1';
}

function HideTrash(int) {
  let button = document.getElementById(`trash-can${int}`);
  button.style.opacity = '0';
  console.log(`deleted class${int}`);
}

function DeleteParent(int){
  let element = document.getElementById(`class${int}`);
  element.remove();
  console.log(`deleted class${int}`);
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}