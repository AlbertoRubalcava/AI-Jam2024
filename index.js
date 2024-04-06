function selectOption(option) {
  document.querySelector('.dropbtn').innerText = option;
  document.querySelector('.dropbtn').innerHTML = `${option} <i class="fa-solid fa-chevron-down"></i>`;
}

function selectOptionPlan(option) {
  document.querySelector('.nav_planningbtn').innerText = option;
  document.querySelector('.nav_planningbtn').innerHTML = `${option} <i class="fa-solid fa-chevron-down"></i>`;
}

function hideDIV() {
  var x = document.getElementById("fall1");
  var y = document.getElementById("spring1");
  var z = document.getElementById("summer1");
  //hide fall
  if (x.style.display === "none") {
    x.style.display = "inline-block";
    document.querySelector('.hide_planning').innerText = 'HIDE PREVIOUS YEARS';
  } else {
    x.style.display = "none";
    document.querySelector('.hide_planning').innerText = 'SHOW PREVIOUS YEARS';
  }
 //hide spring
  if (y.style.display === "none") {
    y.style.display = "inline-block";
  } else {
    y.style.display = "none";
  }
  //hide summer
  if (z.style.display === "none") {
    z.style.display = "inline-block";
  } else {
    z.style.display = "none";
  }
}

  function openPopup(title,content) {
    var popupTitle = document.getElementById("popupTitle");
    var popupText = document.getElementById("popupText");

    popupTitle.textContent = title;
    popupText.textContent = content;

    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "block";
}

function closePopup() {
    var popupContainer = document.getElementById("popupContainer");
    popupContainer.style.display = "none";
}

let classNumber = 0;
function Geeks(string) {
  /**
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
   */
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

function ShowTrash(ev) {
  let element = ev.currentTarget;
  let button = element.querySelector('.trash-can');
  button.style.opacity = '1';
}

function HideTrash(ev) {
  let element = ev.currentTarget;
  let button = element.querySelector('.trash-can');
  button.style.opacity = '0';
}

function DeleteParent(ev){
  let element = ev.target;
  if(element.classList.contains("image")){
    element = element.parentNode;
  }
  element = element.parentNode;
  console.log(element);
  element.remove();
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  var elem = ev.target;
  if(elem.classList.contains("course-body")){
    elem = elem.parentNode;
  } else if(elem.classList.contains("trash-can")){
    elem = elem.parentNode;
    elem = elem.parentNode;
  } else if(elem.classList.contains("classTitle")){
    elem = elem.parentNode;
    elem = elem.parentNode;
  } else if(elem.classList.contains("sem-title")){
    elem = elem.parentNode;
  }
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  var course = document.getElementById(data);
  console.log(course);
  elem.appendChild(course);
  console.log(elem);
  setEqualHeight();
}

function setEqualHeight() {
  // Select all columns
  var columns = document.querySelectorAll('.sem-body');

  // Initialize variable to store tallest height
  var maxHeight = 0;

  // Loop through each column to find the tallest height
  columns.forEach(function(column) {
      var height = column.offsetHeight;
      if (height > maxHeight) {
          maxHeight = height;
      }
  });

  // Set the same height for all columns
  columns.forEach(function(column) {
      column.style.height = maxHeight + 'px';
  });
}
 equalizeSemBodyHeights();

 function addSummer(ev){
  var element = ev.target;
  if(element.classList.contains("summerTitle")){
    var yearTitle = element.parentNode.parentNode;
    var year = yearTitle.parentNode;
  } else if(element.classList.contains("summer-button")){
    var yearTitle = element.parentNode;
    var year = yearTitle.parentNode;
  }
  
  year.innerHTML += `<div id="summer1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)">
  <p class="sem-title">SUMMER</p>
</div>`;
  equalizeSemBodyHeights();
  switchButton(yearTitle);
 }

 function switchButton(element){
  console.log(element);
  var summerButton = element.querySelector('.summer-button');
  console.log(summerButton);
  summerButton.remove();
  element.innerHTML+= `<button class="summer-button" onclick="removeSummer(event)"><p class="summerTitle">REMOVE SUMMER</p></button>`;
  console.log("button removed")
 }

 function removeSummer(ev){
  var element = ev.target;
  if(element.classList.contains("summerTitle")){
    var yearTitle = element.parentNode.parentNode;
    var year = yearTitle.parentNode;
  } else if(element.classList.contains("summer-button")){
    var yearTitle = element.parentNode;
    var year = yearTitle.parentNode;
  }
  
  year.querySelector('.sum-body').remove();

  equalizeSemBodyHeights();
  switchButton(yearTitle);
 }