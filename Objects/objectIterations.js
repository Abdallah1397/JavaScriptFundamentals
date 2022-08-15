let obj={
    firstName:"Abdallah",
    lastName:"Attallah",
    birthData:"13-01-1997",
    nationality:"Egyptian"
}

// If you try to work with map, forEach and for..of will give you TypeError,
// So, you can iterate with for..in => loops through the properties of an object.
// note: The for..in statement can loops over array values too.
for(let i in obj){
    console.log(i);
}

