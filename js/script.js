

















// 9. alert function

function alertShow(){
   alert("hi! welcome to my website");
}

// 8. pera show and hide

function peraHide(){
    document.getElementById("pera").style.display="none";
}
function peraShow(){
    document.getElementById("pera").style.display="block";
}

// 7. show date

function showDate(){
    document.getElementById("s_date").innerHTML = date();
}

// 6. total result showing
function result(){
   document.getElementById("result").innerHTML = 16 + 7;
}

// 5. display hide and block

function displayHide(){
    document.getElementById("dHide").style.display="none";
}
function displayShow(){
    document.getElementById("dHide").style.display="block";
}


// 4. light off & on

function onLight(){
    document.getElementById("light").src="images/on.gif";
}
function offLight(){
    document.getElementById("light").src="images/off.gif";
}

// 3. color change

function color(){
    document.getElementById("color").style.color="red";
}


// 2. fontsize
function fontSize(){
    document.getElementById("fSize").style.fontSize="30px";
}
// 1. change text
function changeText(){
    document.getElementById('cText').innerHTML = 'Hello Bangladesh';
}