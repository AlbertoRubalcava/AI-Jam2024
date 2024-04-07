var yearsAdded = 0;
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

      semBodies.forEach(function(semBody) {
          semBody.style.height = 'auto';
      });

      semBodies.forEach(function(semBody) {
          if (semBody.offsetHeight > maxHeight) {
              maxHeight = semBody.offsetHeight;
          }
      });

      semBodies.forEach(function(semBody) {
          semBody.style.height = `${maxHeight}px`;
      });
  });
}

function ShowLock(ev) {
  let element = ev.currentTarget;
  let lock = element.querySelector('.lock');
  lock.style.opacity = '.2';
}


function HideLock(ev) {
  let element = ev.currentTarget;
  let lock = element.querySelector('.lock');
  lock.style.opacity = '0';
}

function lockParent(ev){
  console.log(ev.target);
  if(ev.target.classList.contains('image')){
    var lock = ev.target.parentNode;
  } else{
    var lock = ev.target;
  }
  var course = lock.parentNode;
  console.log(course);
  course.setAttribute("draggable", "false");
  course.setAttribute("onmouseover", "{return false;}")
  course.setAttribute("onmouseleave", "{return false;}")
  lock.setAttribute("onclick", "unlockParent(event)");
  lock.style.opacity = '1';
  console.log("locked");
}

function unlockParent(ev){
  console.log(ev.target);
  if(ev.target.classList.contains('image')){
    var lock = ev.target.parentNode;
  } else{
    var lock = ev.target;
  }
  var course = lock.parentNode;
  console.log(course);
  course.setAttribute("draggable", "true");
  course.setAttribute("onmouseover", "ShowLock(event)");
  course.setAttribute("onmouseleave", "HideLock(event)");
  lock.setAttribute("onclick", "lockParent(event)");
  lock.style.opacity = '0';
  console.log("unlocked");

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
  equalizeSemBodyHeights();
}

function errorPre(){
  var error = main.querySelector('.error');

  error.innerHTML+= `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Pre-Requisite Error - </strong> Classes required before "COMP 282/L" : "COMP 182/L" and "MATH 150A".
</div>`;
}

function errorUnit(){
  var error = main.querySelector('.error');

  error.innerHTML+= `<div class="alert">
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span> 
  <strong>Unit Error - </strong> Over 18 units planned for "FIRST YEAR 'FALL' ".
</div>`;
}

function expand() {
  var descriptions = document.querySelectorAll('.desc'); 

  descriptions.forEach(function(desc) { 
    if (desc.style.opacity === '0') {
      desc.style.opacity = '1';
      desc.style.fontSize = '0.8rem'; 
      document.querySelector('.expand_planning').innerText = 'CLOSE ALL CLASS DESCRIPTIONS';
    } else {
      desc.style.opacity = '0';
      desc.style.fontSize = '0px'; 
      document.querySelector('.expand_planning').innerText = 'EXPAND ALL CLASS DESCRIPTIONS';
    }
  });
  equalizeSemBodyHeights();
}


 function addSummer(ev){
  
  var element = ev.target;
  if(element.classList.contains("summerTitle")){
    var yearTitle = element.parentNode.parentNode;
    var year = yearTitle.parentNode;
  } else if(element.classList.contains("summer-button")){
    var yearTitle = element.parentNode;
    var year = yearTitle.parentNode;
  }
  switchButtonRemove(ev);
  
  var semesters = year.querySelector('.year-body');
  semesters.innerHTML += `<div id="summer1" class="sem-body summer" ondrop="drop(event)" ondragover="allowDrop(event)">
  <p class="sem-title">SUMMER</p>
</div>`;
  equalizeSemBodyHeights();
 }

 function addYear(ev){
  
  var element = ev.target;
  if(element.classList.contains("addYearTitle")){
    var button = element.parentNode;
    var body = button.parentNode;

  } else if(element.classList.contains("add-year-button")){
    var button = element;
    var body = button.parentNode;
  }
  button.remove();

  var yearnum;
  switch(yearsAdded){
    case 0:
      yearnum = "FIFTH ";
      break;
    case 1:
      yearnum = "SIXTH ";
      break;
    case 2:
      yearnum = "SEVENTH ";
      break;
    case 3:
      yearnum = "EIGHTH ";
      break;
    case 4:
      yearnum = "NINTH ";
      break;
  } 
  yearsAdded++;
  
  body.innerHTML += `<div id="${yearnum}-year" class="year">
  <p class="current">${yearnum+"YEAR"}
      <button class="summer-button" onclick="addSummer(event)"><p class="summerTitle">ADD SUMMER</p></button>
  </p>
  

  <!--

      FIRST FALL

  -->
  <div class="year-body">

  <div id="fall1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)">

      <p class="sem-title">FALL</p>

  </div>

  <!--

      FIRST SPRING

  -->


  <div id="spring1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)">

      <p class="sem-title">SPRING</p>

  </div>
  
  <!--

      FIRST SUMMER

  -->
  </div>
</div>
<button class="add-year-button year" onclick="addYear(event)"><p class="addYearTitle">ADD YEAR</p></button>`;
 }

 function switchButtonRemove(ev){
  var element = ev.target;
  if(element.classList.contains("summerTitle")){
    var button = element.parentNode;
    var yearTitle = button.parentNode;
    var year = button.parentNode.parentNode;
  } else if(element.classList.contains("summer-button")){
    var button = element;
    var yearTitle = button.parentNode;
    var year = button.parentNode.parentNode;
  }
  button.remove();
  yearTitle.innerHTML+= `<button class="summer-button" onclick="removeSummer(event)"><p class="summerTitle">REMOVE SUMMER</p></button>`;
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
  switchButtonAdd(ev);
  
  var summer = year.querySelector('.summer');
  summer.remove();
  equalizeSemBodyHeights();
 }

 function switchButtonAdd(ev){
  var element = ev.target;
  if(element.classList.contains("summerTitle")){
    var button = element.parentNode;
    var yearTitle = button.parentNode;
    var year = button.parentNode.parentNode;
  } else if(element.classList.contains("summer-button")){
    var button = element;
    var yearTitle = button.parentNode;
    var year = button.parentNode.parentNode;
  }
  button.remove();
  yearTitle.innerHTML+= `<button class="summer-button" onclick="addSummer(event)"><p class="summerTitle">ADD SUMMER</p></button>`;
 }

 function regen(ev){
  var element = ev.target;
  element = element.parentNode.parentNode.parentNode; 
  var years = element.querySelectorAll('.year');
  console.log(years);
  years.forEach(function(year){
    year.remove();
  });

  element.innerHTML+=`<div id="FIRST-year" class="year">
  <p class="current">FIRST YEAR
      <button class="summer-button" onclick="addSummer(event)"><p class="summerTitle">ADD SUMMER</p></button>
  </p>
<div class="year-body">

<div id="fall1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)" style="height: 232px;">

<p class="sem-title">FALL</p>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class0" ondrop="return false;">
<p class="classTitle">COMP 110/L</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
<img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class1" ondrop="return false;">
<p class="classTitle">MATH 150A/L</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
<img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class2" ondrop="return false;">
<p class="classTitle">GE A2</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
<img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class3" ondrop="return false;">



<p class="classTitle">GE C1</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
<img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div>

</div>

<!--

FIRST SPRING

-->


<div id="spring1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)" style="height: 232px;">

<p class="sem-title">SPRING</p>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class4" ondrop="return false;">
<p class="classTitle">COMP 182/L</p>    
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
<img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class5" ondrop="return false;">
<p class="classTitle">COMP 122</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
<img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class6" ondrop="return false;">
<p class="classTitle">MATH 150B</p>

<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
<img class="image" src="lock.webp" height="20px" width="20px">
</button>

</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class7" ondrop="return false;">



<p class="classTitle">PHIL 230: A3</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
<img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div>

</div>

<!--

FIRST SUMMER

-->
</div>
</div>

<div id="second-year" class="year">
<p class="current">SECOND YEAR
<button class="summer-button" onclick="addSummer(event)"><p class="summerTitle">ADD SUMMER</p></button>
</p>


<!--

FIRST FALL

-->
<div class="year-body">

<div id="fall2" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)" style="height: 276px;">

<p class="sem-title">FALL</p>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class8" ondrop="return false;">
<p class="classTitle">COMP 222</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class9" ondrop="return false;">
<p class="classTitle">COMP 282/L</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>



<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class11" ondrop="return false;">



<p class="classTitle">GE A1</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div>



<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class19" ondrop="return false;">



<p class="classTitle">GE C3</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class15" ondrop="return false;">



<p class="classTitle">GE B1</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div></div>

<!--

FIRST SPRING

-->


<div id="spring2" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)" style="height: 276px;">

<p class="sem-title">SPRING</p>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class12" ondrop="return false;">
<p class="classTitle">COMP 322/L</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>







<div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="{return false;}" onmouseleave="{return false;}" id="class10" ondrop="return false;">
<p class="classTitle">COMP 256</p>
<button class="lock" onclick="unlockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 1;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class32" ondrop="return false;">



<p class="classTitle">GE B2/B3</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class34" ondrop="return false;">



<p class="classTitle">GE D3/4</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div></div>

<!--

FIRST SUMMER

-->
</div>
</div>

<div id="third-year" class="year">
<p class="current">THIRD YEAR
<button class="summer-button" onclick="addSummer(event)"><p class="summerTitle">ADD SUMMER</p></button>
</p>


<!--

FIRST FALL

-->
<div class="year-body">

<div id="fall1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)" style="height: 276px;">

<p class="sem-title">FALL</p>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class16" ondrop="return false;">
<p class="classTitle">COMP 310</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class17" ondrop="return false;">
<p class="classTitle">COMP 324</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>







<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class14" ondrop="return false;">
<p class="classTitle">MATH 262</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class35" ondrop="return false;">



<p class="classTitle">GE UPPERDIV D1</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class33" ondrop="return false;">



<p class="classTitle">GE F</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div></div>

<!--

FIRST SPRING

-->


<div id="spring1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)" style="height: 276px;">

<p class="sem-title">SPRING</p>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class20" ondrop="return false;">
<p class="classTitle">MATH 340</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>









<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class18" ondrop="return false;">
<p class="classTitle">COMP 380/L</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class13" ondrop="return false;">
<p class="classTitle">COMP 333</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class21" ondrop="return false;">
<p class="classTitle">COMP UPPERDIV</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>

</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class23" ondrop="return false;">



<p class="classTitle">GE D1</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div></div>

<!--

FIRST SUMMER

-->
</div>
</div>

<div id="fourth-year" class="year">
<p class="current">FOURTH YEAR
<button class="summer-button" onclick="addSummer(event)"><p class="summerTitle">ADD SUMMER</p></button>
</p>


<!--

FIRST FALL

-->
<div class="year-body">

<div id="fall1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)" style="height: 276px;">

<p class="sem-title">FALL</p>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class24" ondrop="return false;">
<p class="classTitle">COMP 482</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class25" ondrop="return false;">
<p class="classTitle">COMP 490/L</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>







<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class22" ondrop="return false;">
<p class="classTitle">COMP UPPERDIV</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class27" ondrop="return false;">



<p class="classTitle">COMP UPPERDIV</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class30" ondrop="return false;">
<p class="classTitle">GE C2</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div></div>

<!--

FIRST SPRING

-->


<div id="spring1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)" style="height: 276px;">

<p class="sem-title">SPRING</p>

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class28" ondrop="return false;">
<p class="classTitle">COMP 491/L</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>







<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class29" ondrop="return false;">
<p class="classTitle">COMP UPPERDIV</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class26" ondrop="return false;">
<p class="classTitle">COMP UPPERDIV</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class31" ondrop="return false;">



<p class="classTitle">GE UPPERDIV F</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>
</div></div>

<!--

FIRST SUMMER

-->
</div>
</div>

<button class="add-year-button year" onclick="addYear(event)"><p class="addYearTitle">ADD YEAR</p></button>`;
equalizeSemBodyHeights();
 }