document.addEventListener("DOMContentLoaded", () => {
    let mouse = document.querySelector(".cursor");
    let bye=document.querySelector(".bye");
    let musicSrc=new Audio("./melody.mp3");
    let musicOn=document.querySelector(".background-music");
    let edit = document.querySelector(".edit");
    let cover=document.querySelector(".cover");
    let paper = document.querySelector(".paper");
    let inputbox = document.querySelector("#text");
    let btn = document.querySelector(".btn");
    let toDoList = document.querySelector(".list");
    let modal=document.querySelector(".message");
    let message=document.querySelector(".modal-message")
    let closeBtn=document.querySelector(".closebtn");
    let finish=document.querySelector(".finish");
    
    window.addEventListener("mousemove", cursor);
    bye.addEventListener("click",goodbye);
    musicOn.addEventListener("click",musicMode);
    edit.addEventListener("click",openNote);
    btn.addEventListener("click", addToList);
    closeBtn.addEventListener("click",closedialog);
    finish.addEventListener("click",closeNote);
    function cursor(e) {   //e表示事件發生時，得到的所有資訊

        mouse.style.top = e.pageY + "px"; //把y座標設成滑鼠移動時，游標中的y座標
        mouse.style.left = e.pageX + "px";//把x座標設成滑鼠移動時，游標中的x座標
    };
    function goodbye(e){
       alert("Have a nice day,let me help you close the window,Goodbye.");
        window.close();
       
    }
    function musicMode(){
        if(musicSrc.paused){
       musicSrc.volume=0.5;
       musicSrc.play();
        }else{
            musicSrc.pause();
        }
    }
    function openNote (e) {
        cover.style.animation="openCover 1s linear  forwards"; 
        paper.style.animation="openPaper 1s linear  forwards";

    }
    function addToList(e) {

        let listItem = document.createElement("li");
        let inputValue = inputbox.value;
        let listText = document.createTextNode(inputValue);
        listItem.appendChild(listText);
        if (inputValue === "") {
            message.innerText="Write something please.";
            modal.show();
        } else {
            toDoList.appendChild(listItem);
        }
        inputbox.value = "";

    }
    function closedialog(){
        modal.close();
    }
    function closeNote(e) {
        cover.style.animation="closeCover 1s linear  forwards"; 
        paper.style.animation="closePaper 1s linear  forwards";
}
});