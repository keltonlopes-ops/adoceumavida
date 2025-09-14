 const btn = document.querySelector(".menu-btn");
    const menu = document.getElementById("menu");

    // Abre/fecha menu ao clicar no botão
    btn.addEventListener("click", (e) => {
      e.stopPropagation(); // impede de fechar imediatamente
      menu.classList.toggle("show");
    });

    // Fecha se clicar fora
    document.addEventListener("click", () => {
      menu.classList.remove("show");
    });