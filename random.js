namespace = "http://www.w3.org/2000/svg"


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createFirstScene() {
    makeRect(0, 60, 400, 40, "#ECCC72")//sand
    makeRect(0, 20, 400, 40, "#1770A3")//ocean
    makeRect(0, 0, 400, 40, "#2ACBC6")//sky
    makeCircle(80, 15, 15, "yellow")//sun
    makeRect(0, 40, 400, 20, "white", 0.2)//ocean
    makeRect(0, 60, 400, 15, "#C1874D", 0.2)//sand
    var myNumber = Math.random()
    if(myNumber<0.5){
    makeEllipse(15, 82, 8, 4, "#893F0D")}
    makeText("Day", 70, 15, 16, "Roboto", "black", 1)}


// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createSecondScene() {
    makeRect(0, 60, 400, 40, "#593e15")//sand
    makeRect(0, 20, 400, 40, "#17072b")//ocean
    makeRect(0, 0, 400, 40, "#2d135b")//sky
    makeCircle(160, 23 , 15, "#CACAAF")//sun
    var myNumber = Math.random()
    if(myNumber<0.5){
    makeCircle(154, 20 , 3, "#383b3d")//sunspot
    makeCircle(160, 28 , 2, "#383b3d")//sunspot
    makeCircle(153, 30 , 4, "#383b3d")//sunspot
    makeCircle(168, 26 , 3, "#383b3d")//sunspot
    makeCircle(166, 15 , 4, "#383b3d")//sunspot
    }
    makeText("Night", 70, 15, 16, "Roboto", "black", 1)}



// Fill in this function so that it draws something using SVG shapes!
// You need to use at least 3 different types of shape.
// Remember, for the shapes to show up on the canvas, you'll need to CALL the function.
function createThirdScene() {
    makeRect(0, 60, 400, 40, "#C1874D")//sand
    makeRect(0, 0, 400, 40, "#055d8c")//sky
    makeCircle(60, 40, 15, "#FF4500")//sun
    makeRect(0, 40, 400, 20, "#01476d")//ocean
    
    makeRect(0, 40, 400, 20, "white", 0.2)//ocean
    makeRect(0, 60, 400, 15, "#593e15", 0.2)//sand
    var myNumber = Math.random()
    if(myNumber<0.5){
    makeEllipse(175, 82, 8, 4, "#893F0D")}
    makeText("Morning", 70, 15, 16, "Roboto", "black", 1)}
    






// FILL IN THIS FUNCTION!
// This function is called whenever you press the "Go!" button.
function createRandomScene() {
    // Generate a random number between 0 and 1, and store it in a variable.
    var myNumber = Math.random()
    // If the number is less than 0.33, call the function to create your first scene.
    if(myNumber<0.33){
        createFirstScene()
         }else{
             if(myNumber<0.67){
                 createSecondScene()
             }else{
                createThirdScene()
             }
         }
    
    
    // Else, if the number is less than 0.67, call the function to create your second scene.
    
    
    
    // Else, call the function to create your third scene.
    
    
    
}



// DO NOT EDIT ANYTHING BELOW THIS LINE!
// These are the functions you should call to
// easily create shapes in JavaScript. Feel free
// to check them out if you're curious how they
// work, but don't change them!
// <3 Ms. Squires
function makeCircle(cx, cy, r, fill, opacity) {
  var circle = document.createElementNS(namespace, "circle")
  circle.setAttribute("cx", cx)
  circle.setAttribute("cy", cy)
  circle.setAttribute("r", r)
  circle.setAttribute("fill", fill)
  circle.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(circle)
  return circle
}

function makeRect(x, y, width, height, fill, opacity) {
  var rect = document.createElementNS(namespace, "rect")
  rect.setAttribute("x", x)
  rect.setAttribute("y", y)
  rect.setAttribute("width", width)
  rect.setAttribute("height", height)
  rect.setAttribute("fill", fill)
  rect.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(rect)
  return rect
}

function makeEllipse(cx, cy, rx, ry, fill, opacity) {
  var ellipse = document.createElementNS(namespace, "ellipse")
  ellipse.setAttribute("cx", cx)
  ellipse.setAttribute("cy", cy)
  ellipse.setAttribute("rx", rx)
  ellipse.setAttribute("ry", ry)
  ellipse.setAttribute("fill", fill)
  ellipse.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(ellipse)
  return ellipse
}

function makeLine(x1, y1, x2, y2, stroke, strokeWidth, opacity) {
  var line = document.createElementNS(namespace, "line")
  line.setAttribute("x1", x1)
  line.setAttribute("y1", y1)
  line.setAttribute("x2", x2)
  line.setAttribute("y2", y2)
  line.setAttribute("stroke", stroke)
  line.setAttribute("stroke-width", strokeWidth)
  line.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(line)
  return line
}

function makePolyline(points, stroke, strokeWidth, opacity) {
  var polyline = document.createElementNS(namespace, "polyline")
  polyline.setAttribute("points", points)
  polyline.setAttribute("stroke", stroke)
  polyline.setAttribute("stroke-width", strokeWidth)
  polyline.setAttribute("opacity", opacity)
  polyline.setAttribute("fill", "none")
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polyline)
  return polyline
}

function makePolygon(points, fill, opacity) {
  var polygon = document.createElementNS(namespace, "polygon")
  polygon.setAttribute("points", points)
  polygon.setAttribute("opacity", opacity)
  polygon.setAttribute("fill", fill)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(polygon)
  return polygon
}

function makeText(message, x, y, fontSize, fontFamily, fill, opacity) {
  var text = document.createElementNS(namespace, "text")
  text.innerHTML = message
  text.setAttribute("x", x)
  text.setAttribute("y", y)
  text.setAttribute("font-size", fontSize)
  text.setAttribute("font-family", fontFamily)
  text.setAttribute("fill", fill)
  text.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(text)
  return text
}

function makeImage(url, x, y, width, height, opacity) {
  var image = document.createElementNS(namespace, "image")
  image.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", url)
  image.setAttribute("x", x)
  image.setAttribute("y", y)
  image.setAttribute("width", width)
  image.setAttribute("height", height)
  image.setAttribute("opacity", opacity)
  
  var canvas = document.getElementById("canvas")
  canvas.appendChild(image)
  return image
}