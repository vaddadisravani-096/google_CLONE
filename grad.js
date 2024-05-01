let button=document.querySelector(".kiram");
let input=document.querySelector(".jk"); //input access


 
let base_url ="https://www.google.com/search?q=";
button. addEventListener("click",()=>{
    let addurl=base_url+input.value;
    window.open(addurl);
 /*BOTH ARE SAME...................
    window.location.href = addurl;*/
});
