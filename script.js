

var arr=[
    {name:"jaysingh",img:"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"stranger"},
    {name:"alok",img:"https://plus.unsplash.com/premium_photo-1668895511243-641f5db8dbd1?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"stranger"},
    {name:"diya",img:"https://images.unsplash.com/photo-1512084747998-038941f49b84?q=80&w=3191&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",status:"stranger"}
]
function print(){
var clutter="";
arr.forEach(function(val, index){
  clutter += `<div id="card">
    <div id="img">
    <img src="${val.img}">
    </div>
    <h3>${val.name}</h3>
    <h5>${val.status}</h5>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. In deleniti repellat, minima dolore incidunt autem!</p>
  <button id="${index}">add Friend</button>
  </div>`;
})
document.querySelector("#main").innerHTML=clutter;
}
print();



document.querySelector("#main")
.addEventListener("click",function(details){
 arr[details.target.id].status = "friends" ;
 print();
});

