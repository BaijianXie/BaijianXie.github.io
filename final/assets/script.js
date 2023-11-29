let mXp = document.getElementById("button-next");
let secondPage = document.getElementById("page2");

function moVe(){
    window.scrollBy({
    top: 800,
    behavior: "smooth",});
}

  mXp.onclick= moVe;

  let carouselWidth = 448; 
  let fButton = document.getElementById("firstButton");
  let sButton = document.getElementById("secondButton");
  let tButton = document.getElementById("thirdButton");
  let imageRow = document.getElementById("image-contain");
  let boxRow = document.getElementById("text-box");
let imageNum =0;



sButton.onclick = secondFunction;




function firstFunction(){
  
  checkRf();
  }
  fButton.onclick=firstFunction;
  
    function secondFunction(){

  
  checkRs();
    }
  
  sButton.onclick = secondFunction;
  
  function thirdFunction(){
    checkRt();
  
  }
  tButton.onclick=thirdFunction;
  
  function checkRf(){
    if (imageNum === 1) {
      imageNum=imageNum-1;
      let lWidth = imageNum * carouselWidth;
      imageRow.style.left = lWidth +'px';
      boxRow.style.left=lWidth +'px';
  }
  else if(imageNum ===2){
    imageNum=imageNum-2;
    let lWidth = imageNum * carouselWidth;
      imageRow.style.left = lWidth +'px';
      boxRow.style.left=lWidth +'px';
  }
}

function checkRs(){
  if (imageNum === 0) {
    imageNum=imageNum+1;
    let lWidth = -imageNum * carouselWidth;
    imageRow.style.left = lWidth +'px';
    boxRow.style.left=lWidth+0 +'px';
}
else if(imageNum ===2){
  imageNum=imageNum-1;
  let lWidth = -imageNum * carouselWidth;
    imageRow.style.left = lWidth +'px';
    boxRow.style.left=lWidth+0 +'px';
}
}

function checkRt(){
  if(imageNum === 1){
    imageNum=imageNum+1;
    let lWidth = -imageNum * carouselWidth;
    imageRow.style.left=lWidth +'px';
    boxRow.style.left=lWidth+0 +'px';
  }
  else if(imageNum===0)
  imageNum=imageNum+2;
  let lWidth = -imageNum * carouselWidth;
  imageRow.style.left=lWidth +'px';
  boxRow.style.left=lWidth+0 +'px';
}