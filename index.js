var svgWidth = 200, svgHeight = 200;
var svg = d3.select("svg")
  .attr("width", svgWidth)
  .attr("height", svgHeight)
  .attr("class", "svg-container");

  function selectOption(option) {
    document.querySelector('.dropbtn').innerText = option;
  }

  function navigateTo(page) {
    // Handle navigation without reloading the page
    // For example, you can show/hide content based on the selected page
    // Here, we're just logging the page name
    console.log('Navigating to:', page);
}