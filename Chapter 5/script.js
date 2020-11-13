function newPost () {
    var Post = document.getElementById("sub-mainpost").value;
    var originalList = document.getElementById("linkList");
    var enterPost = document.createElement("li");
    enterPost.innerHTML = Post; 
    var linkList = document.querySelectorAll("#linkList li") [0];
    originalList.insertBefore(enterPost, linkList); 
}

function deletePost (event) {
    event.preventDefault();
    var secondPost = document.getElementById("deletepostnumber").value
    var mainList = document.getElementById("linkList")
    var liList = document.getElementsByTagName("li"); 
    var selectNumber = Number(secondPost)
    if (selectNumber >= 1) {
        var liToRemove = liList[selectNumber -1];
        mainList.removeChild(liToRemove);
    }
}

window.addEventListener("load", createEventListener, false); 


