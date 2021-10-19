function oneThroughTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result*/

  let elemento = []

  for(let contador = 0; contador <= 20; contador++){
    elemento.push(contador)
  }return elemento
}
// console.log(oneThroughTwenty())
//call function oneThroughTwenty

function evensToTwenty() {
    
   /* Your code goes below
   Write a for or a while loop
   return the result */

   let elemento = []

  
  for(let contador = 0; contador <= 20; contador = contador + 2){
    elemento.push(contador)
  }return elemento
}
// console.log(evensToTwenty())

//call function evensToTwenty

function oddsToTwenty() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let elemento = []

  for(let contador = 1; contador <= 20; contador = contador = contador + 2){
    elemento.push(contador)
  }return elemento
   
}
// console.log(oddsToTwenty())
//call function oddsToTwenty

function multiplesOfFive() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let elemento = []

for(let contador = 0; contador <= 100; contador++){
    if(contador % 5 === 0){
       elemento.push(contador)
    }

  }return elemento

}
// console.log(multiplesOfFive())
//call function multiplesOfFive

function squareNumbers() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let elemento = []

  for(let contador = 0; contador <= 10; contador++){
    
    elemento.push(contador ** 2)
    
  }return elemento
    
}
// console.log(squareNumbers())
//call function squareNumbers

function countingBackwards() {
    
  /* Your code goes below
  Write a for or a while loop
  return the result */

  let elemento = []

  for(let contador = 20; contador >= 0 ; contador--){
    elemento.push(contador)
  }return elemento
}
// console.log(countingBackwards())
//call function countingBackwards

function evenNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let elemento = []

  for(let contador = 20; contador >= 0; contador = contador - 2){
    elemento.push(contador)
  }return elemento

}
// console.log(evenNumbersBackwards())
//call function evenNumbersBackwards

function oddNumbersBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let elemento = []

  for(let contador = 20; contador >= 0; contador = contador - 2){
    elemento.push(contador) 
  }return elemento
}
// console.log(oddNumbersBackwards())
//call function oddNumbersBackwards

function multiplesOfFiveBackwards() {
    
 /* Your code goes below
  Write a for or a while loop
  return the result */

  let elemento = []

  for(let contador = 100; contador >= 0; contador--){
    if(contador % 5 === 0){
      elemento.push(contador)
    }
  }return elemento
}
// console.log(multiplesOfFiveBackwards())
//call function multiplesOfFiveBackwards

function squareNumbersBackwards() {
    
   /* Your code goes below
  Write a for or a while loop
  return the result */

  let elemento = []

  for(let contador = 10; contador >= 0; contador--){
    elemento.push(contador ** 2)

  }return elemento

}
console.log(squareNumbersBackwards())
// call function squareNumbersBackwards
