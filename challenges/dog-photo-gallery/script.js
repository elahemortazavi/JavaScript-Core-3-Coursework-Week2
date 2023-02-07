//  let btnKey = document.getElementsByClassName('btn');
// btnKey.addEventListener ("click", function(){
//     fetch ("https://dog.ceo/api/breeds/image/random`")
//     .then((response) => response.json())
// })
// .then(function (add) {
//    let uList = document.getElementById("list"); 
//    let newList = document.createElement("li");
//    let dogImg = document.createComment("img")
   
//    newList.appendChild(img);
//    uList.appendChild(newList); 
// })



   let addButton = document.getElementById('addBtn');
   let removeButton = document.getElementById('removeBtn');
   let ul = document.getElementById("uoList"); 
   let newList = document.createElement("li");
   let dogImg = document.createElement("img")

   function fetchImg() {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((data) => {
        ul.appendChild(newList);
        dogImg.src = data.message;
        newList.appendChild(dogImg);


    })
   }
   addButton.addEventListener('click', () => {
    fetchImg();
   });
   removeButton.addEventListener("click", () =>{
    ul.removeChild(newList);
   });