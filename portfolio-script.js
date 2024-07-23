
// Home
window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
        if (window.matchMedia("(orientation: landscape)").matches) {
        /* affichage Horizontal */
            if (document.body.scrollTop > 65 || document.documentElement.scrollTop > 65) {
                /* milieu de page */
                document.getElementById("header").style.height = "5vw";
                document.getElementById("header").style.backgroundColor = "white";
                document.getElementById('nom').style.fontSize = "2em";
                document.getElementById('nom').style.height = "2vw";
                document.getElementById('nom').style.marginTop = "1.2%";
                document.getElementById('nom').style.color = "#19d782";
                document.getElementById('topButton').style.visibility = "visible";
                document.getElementById('lien1').style.marginTop = "1.2%";
                document.getElementById('lien1').style.color = "#19d782";
                document.getElementById('lien1').style.borderRight = "solid #19d782 2px";
                document.getElementById('lien2').style.marginTop = "1.2%";
                document.getElementById('lien2').style.color = "#19d782";
            } else {
                /* haut de page */
                document.getElementById("header").style.height = "40vw";
                document.getElementById("header").style.backgroundColor = "#19d782";
                document.getElementById('nom').style.fontSize = "10em";
                document.getElementById('nom').style.height = "30vw";
                document.getElementById('nom').style.marginTop = "0.8em";
                document.getElementById('nom').style.color = "white";
                document.getElementById('topButton').style.visibility = "hidden";
                document.getElementById('lien1').style.marginTop = "30%";
                document.getElementById('lien1').style.color = "white";
                document.getElementById('lien1').style.borderRight = "solid white 2px";
                document.getElementById('lien2').style.marginTop = "30%";  
                document.getElementById('lien2').style.color = "white";
            }
        } else {
        /* affichage vertical */
            document.getElementById("header").style.height = "20vw";
            document.getElementById("header").style.backgroundColor = "white";
            document.getElementById('nom').style.fontSize = "7em";
            document.getElementById('nom').style.marginTop = "0";
            document.getElementById('nom').style.color = "black";
            document.getElementById('nom').style.marginTop = "1%";
            document.getElementById('lien1').style.marginTop = "11vw";
            document.getElementById('lien1').style.display = "block";
            document.getElementById('lien1').style.color = "black";
            document.getElementById('lien2').style.marginTop = "11vw";
            document.getElementById('lien2').style.display = "block";
            document.getElementById('lien2').style.color = "black";
        }
    }