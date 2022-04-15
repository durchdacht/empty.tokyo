function on() {
    document.getElementById("overlay").style.display = "block"
}
function loginAdmin() {
    document.getElementById("admin-overlay").style.display = "block"
}
function KillloginAdmin() {
    document.getElementById("admin-overlay").style.display = "none"
}

function start() {
    off(), mute1(), console.log("â €â €â €â£¿â£¿â¡†â €â €â¢¸â£·â €â €â €â €â €â €â €â €â €â €â € â¢¸â£¿â¡‡â €â €â£¾â£¿â¡†â €"), console.log("â €â €â €â£¿â£¿â¡‡â €â €â¢¸â£¿â¢°â£¿â¡†â €â£¾â£¿â¡†â € â£¾â£·â£¿â£¿â¡‡â € â£¿â£¿â¡‡â €"), console.log("â €â €â €â£¿â£¿â¡‡â €â €â¢¸â£¿â ˜â£¿â£¿â£¤â£¿â£¿â£¿â£¤â£¿â¡‡â¢»â£¿â¡‡â €â €â£¿â£¿â¡‡â €"), console.log("â €â €â €â£¿â£¿â¡‡â €â €â¢¸â¡¿â €â¢¹â£¿â£¿â£¿â£¿â£¿â£¿â£¿â â¢¸â£¿â£‡â €â¢€â£¿â£¿â ‡â €"), console.log("â €â €â €â ™â¢¿â£·â£¶â£¶â¡¿â â €â ˆâ£¿â£¿â Ÿâ €â£¿â£¿â ‡â €â ˆâ »â£¿â£¶â£¾â¡¿â ‹â €â €"), console.log("S/O an Explyne, Waken, Dennis, Max und sdev(hat nen kleinen Penis)")
}

function off() {
    document.getElementById("overlay").style.display = "none"
}

function SiteLink() {
    window.open("https://horrible.cc/status", "_blank")
}

function twitterLink() {
    window.open("https://twitter.com/nuradrenalin", "_blank")
}

function githubLink() {
    window.open("https://github.com/nuradrenalin", "_blank")
}

function steamLink() {
    window.open("https://steamcommunity.com/id/durchdacht", "_blank")
}

function soon() {
    var x = document.getElementById("soon");

    x.className = "show";

    setTimeout(function () { x.className = x.className.replace("show", ""); }, 3000);
} 


function openSite(n, e) {
    var t, o, l;
    for (o = document.getElementsByClassName("tabcontent"), t = 0; t < o.length; t++) o[t].style.display = "none";
    for (l = document.getElementsByClassName("tablinks"), t = 0; t < l.length; t++) l[t].className = l[t].className.replace(" active", "");
    document.getElementById(e).style.display = "block", n.currentTarget.className += " active"
}
$(window).load(function() {
    $(".loader").fadeOut("slow")
}), document.getElementById("defaultOpen").click();
var vid = document.getElementById("vid");

function mute1() {
  var video=document.getElementById("vid");

  video.muted = !video.muted;
}
