/* Declare variables below to save the different sections (divs) of your story*/

let begining=document.querySelector(".begining");
let chose1=document.querySelector(".Choose1");
let goIn=document.querySelector(".goIn");
let optionTwoScreen=document.querySelector(".option-two-screen");
let button01=document.querySelector(".button01");
let OptionOneEnd=document.querySelector(".option-one-end");
let door=document.querySelector(".door");
let castle=document.querySelector(".castle");
let figth=document.querySelector(".fight");
let youFoundACastle=document.querySelector(".you-found-a-castle");
let CGC=document.querySelector(".CGC");
let here=document.querySelector(".here");
let serpiente=document.querySelector(".serpiente");
let fight=document.querySelector(".fight");
let run=document.querySelector(".run");
let YWTF=document.querySelector(".YWTF");
let NF=document.querySelector(".NF");
let KG=document.querySelector(".KG");
let youWonTheFight=document.querySelector(".you-won-the-fight");
let keepGoing=document.querySelector(".Keep-going");
let kg2=document.querySelector(".kg2");
let YFTD=document.querySelector(".YFTD");
let rightD=document.querySelector(".right-door");
let right5=document.querySelector(".right5");
let left5=document.querySelector(".left5");
let YFAC=document.querySelector(".YFAC");
let lives=document.querySelector(".lives");
let ALF=document.querySelector(".ALF");
let YFTD1=document.querySelector(".YFTD1");
let kg1=document.querySelector(".kg1");
let left3=document.querySelector(".left3");
let right4=document.querySelector(".right4");
let rightDA=document.querySelector(".right-door-ALF");
let G=document.querySelector(".G");
let GDT1=document.querySelector(".GDT1");
let button001=document.querySelector(".button001");
let YFAC3=document.querySelector(".YFAC3");
let stress=document.querySelector(".stress");
let murcielago9=document.querySelector(".murcielago9");
let goCloser=document.querySelector(".go-closer");
let seeCloser=document.querySelector(".see-closer");
let goToTheOtherDoor=document.querySelector(".go-to-other-door");
let goinC=document.querySelector(".go-in-cave");
let DWNB=document.querySelector(".DWNB");
let YFAC8=document.querySelector(".YFAC8");
let seeCloser8=document.querySelector(".see-closer8");



left3.onclick=function(){
  YFAC3.style.display="block";
  YFTD1.innerHTML="";
};

right4.onclick=function(){
    rightDA.style.display="block";
YFTD1.innerHTML="";
};
  
goIn.onclick=function(){
  door.style.display="block";
begining.innerHTML=("");
};

here.onclick=function(){
  serpiente.style.display="block";
  door.innerHTML=("");
  
};



  run.onclick=function(){
  NF.style.display="block";
  serpiente.innerHTML="";
  YWTF.innerHTML="";
  };


  fight.onclick=function(){
  YWTF.style.display="block";
  serpiente.innerHTML="";
};

keepGoing.onclick=function(){
  youWonTheFight.style.display="block";
  YWTF.innerHTML="";
};

KG.onclick=function(){
  ALF.style.display="block";
  NF.innerHTML="";
};

kg2.onclick=function(){
  YFTD.style.display="block";
  youWonTheFight.innerHTML="";
};

kg1.onclick=function(){
  YFTD1.style.display="block";
  ALF.innerHTML="";
};


right5.onclick=function(){
  rightD.style.display="block";
  YFTD.innerHTML="";
};




let change=document.querySelector(".change");
let GDT=document.querySelector(".GDT");
let d2=document.querySelector(".d2");
let d3=document.querySelector(".d3");
let change1=document.querySelector(".change1");






 


left5.onclick=function(){
  YFAC.style.display="block";
  YFTD.innerHTML="";
  
};




G.onclick=function(){
  YFAC.style.display="block";
  rightD.innerHTML="";
};

goCloser.onclick=function(){
  stress.style.display="block";
  YFAC.innerHTML="";
};





seeCloser.onclick=function(){
  murcielago9.style.display="block";
  YFAC3.innerHTML="";
};



/*dont move anything from up*/


let endp=document.querySelector(".endp");
let grabSome=document.querySelector(".grab-some");
let leave=document .querySelector(".leave");
let goin9=document.querySelector(".go-in9");
let GITC=document.querySelector(".go-into-the-cave");
let possiblyEnd=document.querySelector(".possibly-end");
let grabSome9=document.querySelector(".grab-some9");
let leaveAt=document.querySelector(".leave-at");
let Leave9=document.querySelector(".Leave9");
let Leave=document.querySelector(".Leave");
let bear=document.querySelector(".bear");
let againstWho=document.querySelector(".against-who");
let bear9=document.querySelector(".bear9");
let againstWho9=document.querySelector(".against-who9");
let RUN=document.querySelector(".RUN");
let RUN9=document.querySelector(".RUN9");
let RUN90=document.querySelector(".RUN90");
let whatH=document.querySelector(".what-happen");
let WH=document.querySelector(".WH");




goin9.onclick=function(){
 possiblyEnd.style.display="block";
 murcielago9.innerHTML="";
};

GITC.onclick=function(){
  endp.style.display="block";
  stress.innerHTML="";
};


leave.onclick=function(){
  Leave.style.display="block";
  endp.innerHTML="";
};

leaveAt.onclick=function(){
  Leave9.style.display="block";
  possiblyEnd.innerHTML="";
};


grabSome9.onclick=function(){
     againstWho9.style.display="block";
    possiblyEnd.innerHTML="";

};

grabSome.onclick=function(){
    againstWho.style.display="block";
    endp.innerHTML="";

};

let body=document.querySelector("body");
let lives0=document.querySelector(".lives0");
let youLost=document.querySelector(".you-lost");

RUN9.onclick=function(){
  RUN90.style.display="block";
  againstWho9.innerHTML="";
  body.style.background="blue";
  lives0.style.color="white";
  youLost.style.color="white";
};

let RUN50=document.querySelector(".RUN50");
let next=document.querySelector(".next");

RUN.onclick=function(){
  RUN50.style.display="block";
  againstWho.innerHTML=""
};

next.onclick=function(){
  rightD.style.display="block";
  RUN50.innerHTML=""
};

whatH.onclick=function(){
    WH.style.display="block";
  RUN90.innerHTML="";

};

let Fbear=document.querySelector(".Fbear");
let Fbear9=document.querySelector(".Fbear9");
let Dragon=document.querySelector(".Dragon");
let dragon90=document.querySelector(".dragon90");
let secondW=document.querySelector(".second-won");
let secondW9=document.querySelector(".second-won9");

bear.onclick=function(){
  Fbear.style.display="block";
  againstWho.innerHTML="";
};

bear9.onclick=function(){
  Fbear9.style.display="block";
  againstWho9.innerHTML="";
};

secondW.onclick=function(){
  Dragon.style.display="block";
  againstWho.innerHTML=""
};

secondW9.onclick=function(){
  dragon90.style.display="block";
  againstWho9.innerHTML=""
};



GDT.onclick=function(){
  Leave.style.display="block";
  rightD.innerHTML=""
};


GDT1.onclick=function(){
  Leave9.style.display="block";
  rightDA.innerHTML=""
};


