document.addEventListener("DOMContentLoaded", () => {
    let mouse = document.querySelector(".cursor");
    let cover = document.querySelector(".cover");
    let paper = document.querySelector(".paper");
    let inputbox = document.querySelector("#text");
    let btn = document.querySelector(".btn");
    let toDoList = document.querySelector(".list");
    /*window.addEventListener("mousemove",function(e){ 從瀏覽器在移動滑鼠的時候觀察座標之類的資料
        console.log(e);
    })*/
    window.addEventListener("mousemove", cursor);
    cover.addEventListener("click", open);
    btn.addEventListener("click", addToList);

    function cursor(e) {   //e表示事件發生時，得到的所有資訊

        mouse.style.top = e.pageY + "px"; //把y座標設成滑鼠移動時，游標中的y座標
        mouse.style.left = e.pageX + "px";//把x座標設成滑鼠移動時，游標中的x座標
    };


    function open(e) {
        let coordinate = 1;
        let opacity = 1;
        setInterval(function () {
            if (coordinate < 380) {
                coordinate++;
                opacity = opacity + 0.025;
                cover.style.transform = `rotateX(${38 - 0.1 * coordinate}deg) rotateY(${38 - 0.1 * coordinate}deg) rotateZ(${-38 + 0.1 * coordinate}deg)`;
                cover.style.opacity = `${1 - 0.1 * opacity}`;
                paper.style.transform = `rotateX(${38 - 0.1 * coordinate}deg) rotateY(${38 - 0.1 * coordinate}deg) rotateZ(${-38 + 0.1 * coordinate}deg)`;
            };
            if (coordinate == 380) {
                cover.style.display = "none";
            }
           


        }, 5);


    };

    function addToList(e) {

        let listItem = document.createElement("li");
        let inputValue = inputbox.value;
        let listText = document.createTextNode(inputValue);
        listItem.appendChild(listText);
        if (inputValue === "") {
            alert("Write something please.");
        } else {
            toDoList.appendChild(listItem);
        }
        inputbox.value = "";

    }
});