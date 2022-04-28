
function onoff(){
    if(document.getElementById("mySetting").style.display == "block")
	document.getElementById("mySetting").style.display = "none";
    else 
	document.getElementById("mySetting").style.display = "block";
}

tinymce.init({
    selector: "#mytextarea",
    plugins: "emoticons autoresize",
    toolbar: "emoticons",
    toolbar_location: "bottom",
    menubar: false,
    statusbar: false
  });