
document.getElementById("prgS").addEventListener(
    'oneclick', function() {
        document.getElementById("pr1").style.display = "none";
        document.getElementById("pr2").style.display = "block";
    }
)

document.getElementById("BVer").addEventListener('oneclick', function() {
    document.getElementById("resultado").style.display = "block";
})

document.getElementById("BotonCerrar").addEventListener('click', function() {
    document.getElementById("resultado").style.display = "none";
    document.querySelector(".Contenedor-Binicio").style.display = "none";
    document.querySelector(".Con-2").style.display = "block";
})