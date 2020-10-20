const getButton= document.getElementById("getButton");
const postButton= document.getElementById("postButton");
const inputBox= document.getElementById("input");
const postForm= document.getElementById("postForm");
const getForm= document.getElementById("getForm");
const deleteForm= document.getElementById("deleteForm");
const patchForm= document.getElementById("patchForm");

getButton.addEventListener("click",()=> {
    console.log("clicked!")
    console.log(inputBox.value);
    window.location = `${inputBox.value}`;
})

function post () {
    var form = document.createElement('form');
    form.setAttribute('method', 'post');
    form.setAttribute('action', `${inputBox.value}`);
    form.style.display = 'hidden';
    document.body.appendChild(form)
    form.submit();
}

function remove () {
    deleteForm.setAttribute('action', `${inputBox.value}?_method=DELETE`);
    deleteForm.submit();
}

function patch () {
    patchForm.setAttribute('action', `${inputBox.value}&_method=PATCH`);
    patchForm.submit();
}
