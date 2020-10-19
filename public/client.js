const getButton= document.getElementById("getButton");
const inputBox= document.getElementById("input");
getButton.addEventListener("click",()=> {
    console.log("clicked!")
    console.log(inputBox.value);
    window.location = `${inputBox.value}`;

})