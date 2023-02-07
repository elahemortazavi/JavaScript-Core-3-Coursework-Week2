 let btnKey = document.getElementsByClassName('btn');
btnKey.addEventListener ("click", function(){
    fetch ("https://dog.ceo/api/breeds/image/random`")
    .then((response) => response.json())
})
.then(function (add) {
    
   let newList = document.createElement("li");
   let ulist = document.getElementById("list");
   ulist.appendChild(newList)

   

})