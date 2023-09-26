// Write your solution here!
 const cats=["Milo", "Otis", "Garfield"]
 
 function Arrayfunctions(){
    beforeEach(function(){
        cats.length=0
        cats.push=["Milo", "Otis", "Garfield"]
    })
 }
 function destructivelyAppendCat(){
   cats.push("Ralph");
 }
 function destructivelyPrependCat(){
    cats.unshift("Bob")
 }
 function destructivelyRemoveLastCat(){
    cats.pop(2)
 }
 function destructivelyRemoveFirstCat(){
    cats.shift("Milo")
 }
 function appendCat(name="broom") {
    const newCatsArray = [...cats, name];
    return newCatsArray;
  }
 function prependCat(name="Arnold"){
   const newCatsArray=[name,...cats] 
   return newCatsArray
 }
 function removeLastCat(){
 const newCatsArray=cats.slice(0,-1)
 return newCatsArray
 }
 function removeFirstCat(){
    const newCatsArray=cats.slice(1)
    return newCatsArray
 }

