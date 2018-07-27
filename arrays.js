var ingredient1 = "bread"
var ingredient2 = "mild cheese"
var ingredient3 = "sharp cheese"
var ingredient4 = "butter"
var ingredient5 = "tomato"
var ingredient6 = "garlic"

var grilledCheeseInredients = [
  'bread',
  'mild chees',
  'sharp cheese',
  'butter',
  'tomato',
  'garlic'
  ];
  
console.log(grilledCheeseInredients)
  
 

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ];
  
  
function addElementToBeginningOfArray(array,element){
 
  var newArray = [element, ...array];
  return newArray
}
console.log([1],'foo')
    
function destructivelyAddElementToBeginningOfArray(array,element){
  array.unshift(element)
  return array
}

function addElementToEndOfArray(array,element){
 
  var newArray = [...array, element];
  return newArray
  
}
    
function destructivelyAddElementToEndOfArray(array,element){
  array.push(element)
  return array
}    

    
function destructivelyRemoveElementFromBeginningOfArray(array){
  
  array.shift()
  return array
}

<<<<<<< HEAD
function removeElementFromBeginningOfArray(array){      
 
  return array.slice(1)
=======
function RemoveElementFromBeginningOfArray(array){      
 
  
  return array.slice(array.length,1)
>>>>>>> 159db5df941c0563f2e285bf51d4ee2beab4e9c5
}


function destructivelyRemoveElementFromEndOfArray(array,element){
  
  array.pop()
  return array
}

<<<<<<< HEAD
function removeElementFromEndOfArray(array){      
  
  return array.slice(0, array.length - 1)
}

function accessElementInArray (array, index){
 
  return array[index]
=======
function RemoveElementFromEndOfArray(array){      
  
  
  return array.slice(0, array.length - 1)
>>>>>>> 159db5df941c0563f2e285bf51d4ee2beab4e9c5
}