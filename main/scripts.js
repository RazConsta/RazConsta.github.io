function darkMode() {

    var element = document.getElementById("firstDiv");
    element.classList.toggle("dark-mode");
    localStorage.setAttribute("class", dark - mode);

    // document.getElementById("firstDiv").style.backgroundColor = "white";
    // document.getElementById("firstDiv").style.color = "black";
}

/*--------------------------------Trash-----------------------------*/

/* stickyBar java script
{
    // when scrolling, execute stickyBar
    window.onscroll = function () { stickyBar() };

    // get navbar
    var navbar = document.getElementById("navBar");

    // get the offset
    var sticky = navbar.offsetTop;

    // add sticky class when reaching scroll position; else remove sticky class
    function stickyBar() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
        } else {
            navbar.classList.remove("sticky");
        }
    }
}*/

/* random dark mode

    if (Math.floor(Math.random() * 100) % 2 == 0) {

        // Changing firstDiv style
        document.getElementById("firstDiv").style.backgroundColor = "white";
        document.getElementById("firstDiv").style.color = "black";

        // Changing links color.
        var x = document.getElementsByTagName("a");

        for (var i = 0; i < x.length; i++)
            x[i].style.color = "black";
    }
    else {
        document.getElementById("firstDiv").style.backgroundColor = "#333333";
        document.getElementById("firstDiv").style.color = "white";
        var x = document.getElementsByTagName("a");

        for (var i = 0; i < x.length; i++)
            x[i].style.color = "white";
    } */