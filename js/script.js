document.addEventListener("DOMContentLoaded",start);
function start(){
    var arImg=document.getElementsByClassName("_img");
    var arTxt=document.getElementsByClassName("_txt");
    var bl=document.getElementsByClassName("block")[0];
    window.wh=bl.getAttribute("blockWidth");
    if ((wh>30)||(wh === null)){
        wh=15;
        
    }
    window.visibled=bl.getAttribute('visibleTime');
    if ((visibled<3000) || (visibled === null)) {
        visibled=3000;
        
    }
    if (visibled>50000)visibled=50000;
    console.log("vis=" + visibled);
    var index = 0;
    var maxLenght = arImg.length-1;
    SetImage(arImg,arTxt,index);
    
}

function SetImage(arImg,arTxt,index){
    for (var a=0;a<arImg.length;a++){
        arImg[a].width=wh;
        arImg[a].style.filter= "grayscale(1)";
    }
    var tId=document.getElementById("txtID");
    tId.style.color="white";
    
    arImg[index].width="512";
    arImg[index].style.filter="grayscale(0)";
    setTimeout(TextColor,1000,tId,arTxt[index].innerHTML);
    
    index = index+1;
    if (index>=arImg.length) index=0;
    setTimeout(SetImage,visibled,arImg,arTxt,index);
    
}
function TextColor(tid,text){
    tid.innerHTML = text;
    tid.style.color="black";
}
 