
document.getElementById("prgS").addEventListener(
    'click', function() {
        document.getElementById("pr1").style.display = "none";
        document.getElementById("pr2").style.display = "block";
    }
)

document.getElementById("prgS2").addEventListener(
    'click', function() {
        document.getElementById("pr2").style.display="none";
        document.getElementById("1").style.display = "block";
        document.getElementById("2").style.display = "block";
    }
)
document.getElementById("BVer").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "block";
    document.getElementById("1").style.display = "none";
    document.getElementById("2").style.display = "none";

})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
})