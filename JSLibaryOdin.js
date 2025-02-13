let button = document.getElementById("button");
let title = document.getElementById("title");
const libary = ["a", ];

function book(title,author,pages,haveRead){
this.title = title;
this.author = author;
this.pages = pages;
this.haveRead =haveRead;
}

function addBook(){


let Newbook = new book();
libary.push(Newbook);
console.log(libary);}
 addBook()


 function DoStuff(){
  let titleText =title.value;
  console.log(title.value);
 }
 button.onclick =  DoStuff;