
document.getElementById("prgS").addEventListener(
    'touchstart', function() {
        document.getElementById("pr1").style.display = "none";
        document.getElementById("pr2").style.display = "block";
    }
)

document.getElementById("prgS2").addEventListener(
    'touchstart', function() {
        document.getElementById("pr2").style.display="none";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
    }
)
document.getElementById("BVer").addEventListener('touchstart', function() {
    document.getElementById("resultado").style.display = "block";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";

})

document.getElementById("BotonCerrar").addEventListener('touchstart', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
})