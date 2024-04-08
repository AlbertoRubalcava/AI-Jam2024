var yearsAdded = 0;
var errorPres = 0;
var errorUnits = 0;
let fontShow = false;
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
  } else if(elem.classList.contains("lock")){
    elem = elem.parentNode;
    elem = elem.parentNode;
  } else if(elem.classList.contains("image")){
    elem = elem.parentNode;
    elem = elem.parentNode.parentNode;
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
  var error = main.querySelector('.alertPre');
  if(errorPres == 0){
    errorPres = 1;
    error.style.display = 'block';
  }
  else {
    error.style.display = 'none';
    errorPres = 0;
  }
}

function errorUnit(){
  var error = main.querySelector('.alertUnit');

  if(errorUnits == 0){
    errorUnits = 1;
    error.style.display = 'block';
  }
  else {
    error.style.display = 'none';
    errorUnits = 0;
  }
}

function expand() {
  var descriptions = document.querySelectorAll('.desc'); 
  descriptions.forEach(function(desc) { 
    if (fontShow) {
      desc.style.fontSize = '0.8rem'; 
      document.querySelector('.expand_planning').innerText = 'CLOSE ALL CLASS DESCRIPTIONS';
    } else {
      desc.style.fontSize = '0px'; 
      document.querySelector('.expand_planning').innerText = 'EXPAND ALL CLASS DESCRIPTIONS';
    }
  });
  fontShow = !fontShow
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

 function fade(ev){
  var checkIcon = ev.target.querySelector('.fa-check') || ev.target.closest('button').querySelector('.fa-check');
  checkIcon.classList.remove('fade-in-out');
  void checkIcon.offsetWidth;
  checkIcon.classList.add('fade-in-out');
 }

 function regen(ev){
  fade(ev);
  var error = main.querySelector('.alertUnit');
    error.style.display = 'none';

  var element = ev.target;
  element = element.parentNode.parentNode.parentNode; 
  var years = element.querySelectorAll('.year');
  console.log(years);
  years.forEach(function(year){
    year.remove();
  });

  element.innerHTML+=`<div id="FIRST-year" class="year completed">
  <p class="current">FIRST YEAR
      <button class="summer-button" onclick=""><p class="summerTitle">ADD SUMMER</p></button>
  </p>
  

  <!--

      FIRST FALL

  -->
  <div class="year-body">

  <div id="fall1" class="sem-body fall" ondrop="drop(event)" ondragover="allowDrop(event)">

      <p class="sem-title">FALL</p>

      <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
      id="class0" ondragstart="return false;" ondrop="return false;">
          <p class="classTitle">COMP 110/L</p>
          <p class="desc"> Introduction to Algorithms and Programming and Lab (3/1)</p>
          <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
              <img class="image" src="lock.webp" height="20px" width="20px"/>
          </button>

          
      </div>

      <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
      id="class1" ondragstart="return false;" ondrop="return false;">
          <P class="classTitle">MATH 150A/L</P>
          <p class="desc"> Calculus I (5)</p>
          <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
              <img class="image" src="lock.webp" height="20px" width="20px"/>
          </button>

          
      </div>

      <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
      id="class2" ondragstart="return false;" ondrop="return false;">
          <P class="classTitle">ENGL 115H: A2</P>
          <p class="desc">Honors Approaches to University Writing (3)</p>
          <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
              <img class="image" src="lock.webp" height="20px" width="20px"/>
          </button>

          
      </div>

      <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
      id="class3" ondragstart="return false;" ondrop="return false;">

          

          <P class="classTitle">ART 100/L: C1</P>
          <p class="desc">Introduction to Art Processes and Lab (1/2)</p>
          <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
              <img class="image" src="lock.webp" height="20px" width="20px"/>
          </button>
      </div>


  </div>

  <!--

      FIRST SPRING

  -->


  <div id="spring1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)">

      <p class="sem-title">SPRING</p>

      <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
      id="class4" ondragstart="return false;" ondrop="return false;">
          <P class="classTitle">COMP 182/L</P>    
          <p class="desc">Data Structures and Program Design and Lab (3/1)</p>
          <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
              <img class="image" src="lock.webp" height="20px" width="20px"/>
          </button>

          
      </div>

      <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
      id="class5" ondragstart="return false;" ondrop="return false;">
          <P class="classTitle">COMP 122</P>
          <p class="desc">Computer Architecture and Assembly Language and Lab (3/1)</p>
          <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
              <img class="image" src="lock.webp" height="20px" width="20px"/>
          </button>

          
      </div>

      <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""ßßß
      id="class6" ondragstart="return false;" ondrop="return false;">
          <P class="classTitle">MATH 150B</P>
          <p class="desc"> Calculus II (5)</p>
          <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
              <img class="image" src="lock.webp" height="20px" width="20px"/>
          </button>

      </div>

      <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
      id="class7" ondragstart="return false;" ondrop="return false;" ondragend="errorUnit()">

          <P class="classTitle">PHIL 230: A3</P>
          <p class ="desc">Introduction to Formal Logic (3)</p>
          <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
              <img class="image" src="lock.webp" height="20px" width="20px"/>
          </button>
      </div>

  </div>
  
  <!--

      FIRST SUMMER

  -->
  </div>
</div>


<div id="SECOND-year" class="year">
                <p class="current">SECOND YEAR
                    <button class="summer-button" onclick="addSummer(event)"><p class="summerTitle">ADD SUMMER</p></button>
                </p>
                

                <!--

                    FIRST FALL

                -->
                <div class="year-body">

                <div id="fall2" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)">

                    <p class="sem-title">FALL</p>

                    <div draggable="false" ondragstart="" class="course-body" onmouseover="" onmouseleave=""
                    id="class8" ondragstart="return false;" ondrop="return false;">
                        <P class="classTitle">COMP 222</P>
                        <p class="desc">Computer Organization (3)</p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>

                        
                    </div>

                    <div draggable="false" ondragstart="" class="course-body" onmouseover="" onmouseleave=""
                    id="class9" ondragstart="return false;" ondrop="return false;" ondragend="errorPre()">
                        <P class="classTitle">COMP 282/L</P>
                        <p class="desc">Advanced Data Structures (3)</p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" >
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>

                        
                    </div>

                    <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
                    id="class10" ondragstart="return false;" ondrop="return false;">
                        <P class="classTitle">COMP 256</P>
                        <p class="desc">Discrete Structures for Computer Science and Lab (3/1)</p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>

                        
                    </div>

                    <div draggable="false" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
                    id="class11" ondragstart="return false;" ondrop="return false;">

                        

                        <P class="classTitle">COMS 151H: A1</P>
                        <p class="desc">Honors Fundamentals of Public Speaking (3) </p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>
                    </div>

                    <div draggable="false" ondragstart="" class="course-body" onmouseover="" onmouseleave=""
                    id="class12" ondragstart="return false;" ondrop="return false;">

                        

                        <P class="classTitle">GEOL 112/113: B2/B3</P>
                        <p class="desc">Earth and Life Through Time and Lab (2/1)</p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>
                    </div>

                </div>

                <!--

                    FIRST SPRING

                -->


                <div id="spring2" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)">

                    <p class="sem-title">SPRING</p>

                    <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
                    id="class12" ondragstart="return false;" ondrop="return false;">
                        <P class="classTitle">COMP 322/L</P>
                        <p class="desc"> Introduction to Operating Systems and System Architecture and Lab (3/1)</p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>

                        
                    </div>

                    <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
                    id="class13" ondragstart="return false;" ondrop="return false;">
                        <P class="classTitle">COMP 333</P>
                        <p class="desc">Concepts of Programming Languages (3)</p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>

                        
                    </div>

                    <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
                    id="class14" ondragstart="return false;" ondrop="return false;">
                        <P class="classTitle">MATH 262</P>
                        <p class="desc">Introduction to Linear Algebra (3)</p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>

                        
                    </div>

                    <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
                    id="class15" ondragstart="return false;" ondrop="return false;">

                        

                        <P class="classTitle">PHYS 100A: B3</P>
                        <p class="desc">General Physics I (3)</p>
                        <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                            <img class="image" src="lock.webp" height="20px" width="20px"/>
                        </button>
                    </div>

                </div>
                
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
<p class="classTitle">COMP 380/L</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>


<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class14" ondrop="return false;">
<p class="classTitle">MATH 340</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class35" ondrop="return false;">



<p class="classTitle">GE C3</p>
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

<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave="" id="class20" ondrop="return false;">
<p class="classTitle">COMP 324</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 1;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div>









<div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class18" ondrop="return false;">
<p class="classTitle">COMP UPPERDIV</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class13" ondrop="return false;">
<p class="classTitle">COMP UPPERDIV</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>


</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class21" ondrop="return false;">
<p class="classTitle">GE D1</p>
<button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 0;">
    <img class="image" src="lock.webp" height="20px" width="20px">
</button>

</div><div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)" id="class23" ondrop="return false;">



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

<!--FOURTH YEAR-->

<div id="FOURTH-year" class="year">
    <p class="current">FOURTH YEAR
        <button class="summer-button" onclick="addSummer(event)"><p class="summerTitle">ADD SUMMER</p></button>
    </p>
    

    <!--

        FIRST FALL

    -->
    <div class="year-body">

    <div id="fall1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)">

        <p class="sem-title">FALL</p>

        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
        id="class24" ondragstart="return false;" ondrop="return false;">
            <P class="classTitle">COMP 482</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>

            
        </div>

        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
        id="class25" ondragstart="return false;" ondrop="return false;">
            <P class="classTitle">COMP 490/L</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>

            
        </div>

        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
        id="class26" ondragstart="return false;" ondrop="return false;">
            <P class="classTitle">COMP UPPERDIV</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>

            
        </div>



        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
        id="class35" ondragstart="return false;" ondrop="return false;">

            

            <P class="classTitle">GE UPPERDIV D1</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>
        </div>

    </div>

    <!--

        FIRST SPRING

    -->


    <div id="spring1" class="sem-body" ondrop="drop(event)" ondragover="allowDrop(event)">

        <p class="sem-title">SPRING</p>

        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
        id="class28" ondragstart="return false;" ondrop="return false;">
            <P class="classTitle">COMP 491/L</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>

            
        </div>

        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
        id="class29" ondragstart="return false;" ondrop="return false;">
            <P class="classTitle">COMP UPPERDIV</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>

            
        </div>
        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="" onmouseleave=""
        id="class27" ondragstart="return false;" ondrop="return false;">

            

            <P class="classTitle">COMP UPPERDIV</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;" style="opacity: 1;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>
        </div>
        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
        id="class30" ondragstart="return false;" ondrop="return false;">
            <P class="classTitle">GE C2</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>

            
        </div>

        <div draggable="true" ondragstart="drag(event)" class="course-body" onmouseover="ShowLock(event)" onmouseleave="HideLock(event)"
        id="class31" ondragstart="return false;" ondrop="return false;">

            

            <P class="classTitle">GE UPPERDIV F</P>
            <button class="lock" onclick="lockParent(event)" ondragstart="return false;" ondrop="return false;">
                <img class="image" src="lock.webp" height="20px" width="20px"/>
            </button>
        </div>

    </div>
    
    <!--

        FIRST SUMMER

    -->
    </div>
</div>

</div>
</div>

<button class="add-year-button year" onclick="addYear(event)"><p class="addYearTitle">ADD YEAR</p></button>`;
equalizeSemBodyHeights();
 }