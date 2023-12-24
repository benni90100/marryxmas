const albero = document.querySelector(".albero")
const foglie = document.querySelectorAll(".foglie")
const xMas = document.querySelector(".xMas") 
function alberoConPalline() {
    color=[
        "green",
        "red",
        "purple",
        "yellow",
        "blue"
    ]
    
    foglie.forEach(foglia => {
        const randomColor = Math.round(Math.random() * 5)
        const randomX = Math.random() * 45 + 1
        const randomY = Math.random() * 50 + 1
        foglia.innerHTML += `
        <div class="palline" style="transform: translate(${randomX}px,${randomY}px); background-color: ${color[randomColor]};";></div>
        `
        
    });
    

}
setTimeout(() => {
    alberoConPalline(); // Chiamata iniziale
    intervalId = setInterval(alberoConPalline, 200);

    // Blocca l'intervallo dopo ulteriori 5 secondi
    setTimeout(() => {
        clearInterval(intervalId);
    },1000);
}, 1000);