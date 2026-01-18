// Cache The DOM
var button =  document.getElementById("button")

var nume =  document.getElementById("nume")

var prenume = document.getElementById("prenume")

var experiente1 = document.getElementById("experiente1")

var experiente2 = document.getElementById("experiente2")

var an =  document.getElementById("nastere")

const d = new Date()

var year = d.getFullYear()

var img = document.querySelector("img")

// Add event listener to button
button.addEventListener("click",altaViata)
an.addEventListener("mouseover", displayAge)


// Define function
function altaViata() {
	nume.innerHTML = "Hardware Engineer"
	prenume.innerHTML = "Audi"
	experiente1.innerHTML = "Experiente" 
	experiente2.innerHTML = "<ul><li>placute</li><li>neplacute</li></ul>"

	img.src = "images/h2.jpg"
	img.style.opcaity = "69%"
	img.style.height = "500px"
	img.style.width = "500px"
	img.style.border = "2px solid black"
	
}
function displayAge()	{
	an.innerHTML = year - an.innerHTML
}