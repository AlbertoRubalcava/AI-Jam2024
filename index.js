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
    document.querySelector('.hide_planning').innerText = 'SHOW ONLY CURRENT YEARS';
  } else {
    x.style.display = "none";
    document.querySelector('.hide_planning').innerText = 'SHOW OLD YEARS';
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

function dontAllowDrop(ev) {
  return;
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}