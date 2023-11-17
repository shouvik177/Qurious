let body= document.querySelector("body"); 
 

let btnBQ= document.createElement("button");
btnBQ.setAttribute("id","btnBQ");
btnBQ.addEventListener("click",doSomething);
body.appendChild(btnBQ);

let speechRecognition = new webkitSpeechRecognition();
speechRecognition.continuous= true;
speechRecognition.interimResults=true;
speechRecognition.lang="en-us";

let transcript= "";
speechRecognition.onresult=function(event){
    transcript="";
    for(let i=0;i<event.result.length;++i){
        transcript += event.result[i][0].transcript;
    }
};
 document.addEventListener('keypress',handleKbd);

 function handleKbd(event){
    if(event.shiftkey && event.altkey && event.code ==='keyQ'){
        btnBQ.click();
    }
 }

function doSomething(){
    if(btnBQ.hasAttribute("listening") === false){
        btnBQ.setAttribute("listening",true);
        speechRecognition.start();
    } else {
        btnBQ.removeAttribute("listening");
        speechRecognition.stop();
        debugger;
        const myPopup = new Popup({
            id: "my-popup",
            title:"Your Search:",
            content: transcript

        });
        myPopup.show();
    }
}

