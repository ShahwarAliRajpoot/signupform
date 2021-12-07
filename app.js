function passwordShow(e){
    var passShow = document.getElementById("passShow");

    if(e.className === "fas fa-eye show"){
        e.className = "fas fa-eye-slash show";
        passShow.type = "text"
    }
    else{
        e.className = "fas fa-eye show";
        passShow.type = "password";
    }

}

function showPassword(e){
    var showPass= document.getElementById("showPass");
    
    if(e.className === "fas fa-eye show"){
        e.className = "fas fa-eye-slash show";
        showPass.type = "text"
    }
    else{
        e.className = "fas fa-eye show";
        showPass.type = "password";
    }

}

function tog(e){
    var myToggle = document.getElementById("main-body");

    if(e.className === "fal fa-toggle-off toggle"){
        e.className = "fal fa-toggle-on toggle";
        myToggle.style.backgroundColor = "#fff";
    }
    else{
        e.className = "fal fa-toggle-off toggle";
        myToggle.style.backgroundColor = "rgb(7, 156, 194)";
    }
}