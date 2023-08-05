
// Adiciona uma sombra ao cabeçalho quando o usuário rolar a página para baixo
window.addEventListener("scroll", function () {
    const header = document.getElementById("site-header");
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 0) {
      header.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
    } else {
      header.style.boxShadow = "none";
    }
});
  
  