let ricky = "https://rickandmortyapi.com/api/character";
let API = "  http://localhost:8001/characters";
let list = document.querySelector(".list");
let block2 = document.querySelector(".block-2");

async function info() {
  let response = await fetch(ricky).then((res) => res.json());
  let obj = response.results;
  console.log(obj);

  obj.forEach((item) => {
    list.innerHTML += `<li>${item.name}<img style="margin-left:10px; height="60px" width="60px" src ="${item.image}"</li>`;

    //    get(item)
  });
}
info();
// async function get(obj){

//    await fetch(API,{
//      method: "POST",
//      body: JSON.stringify(obj),
//      headers: {
//         "Content-type": "application/json; charset=utf-8",
//     },
//    })
//    }

async function final() {
  let finalObj = await fetch(API).then((res) => res.json());
  finalObj.forEach((item) => {
    block2.innerHTML += `<ul>
        <li>${item.name}<img style="margin-left:10px; height="60px" width="60px"  src ="${item.image}"</li>
        </ul>`;
  });
}
final();
