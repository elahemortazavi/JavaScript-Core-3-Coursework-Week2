// const image = document.createElement("img");
// const container = document.getElementById("container");
// container.appendChild(image);

// fetch("https://xkcd.now.sh/?comic=latest")
//   .then((response) => response.json())
//   .then((data) => (image.src = data.img))
//   .catch((err) => console.log(err));






//   let mainDiv = document.getElementById("container");
//   let image = document.createElement("img");
//   mainDiv.appendChild(image);

//    function fetchData(){
//     fetch("https://xkcd.now.sh/?comic=latest")
//     .then((response) => response.json())
//     .then((data) => {
//         let mainDiv = document.getElementById("container");
//         let image = document.createElement("img");
//         image.src = data.img;
//         mainDiv.appendChild(image);

//     })

//    }




let uList = document.querySelector("ul");
let button = document.getElementById("btn");


function fetchData() {
    fetch("https://xkcd.now.sh/?comic=latest")
      .then((response) => response.json())
      .then((data) => {
        let list = document.createElement("li");     
        let image = document.createElement("img");
        image.src = data.img;
        uList.appendChild(list);
        list.appendChild(image);

      })
};

button.addEventListener (("click"), () => {
 fetchData();
})
