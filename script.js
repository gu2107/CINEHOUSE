// Função para ajustar dinamicamente o layout com base no tamanho da janela
function ajustarLayoutParaDispositivos() {
    const largura = window.innerWidth;

    if (largura < 768) {
        // Mobile
        document.body.style.fontSize = "14px";
        console.log("Modo Mobile ativado");
    } else if (largura >= 768 && largura < 1024) {
        // Tablet
        document.body.style.fontSize = "16px";
        console.log("Modo Tablet ativado");
    } else {
        // Desktop
        document.body.style.fontSize = "18px";
        console.log("Modo Desktop ativado");
    }
}

// Função para abrir o menu em dispositivos móveis
function toggleMenu() {
    const menu = document.querySelector(".menu");
    menu.classList.toggle("menu--ativo");
}

// Adicionar evento para ajustar o layout ao redimensionar a janela
window.addEventListener("resize", ajustarLayoutParaDispositivos);

// Ajustar layout ao carregar a página
window.addEventListener("load", ajustarLayoutParaDispositivos);

// Evento para o botão de menu (hambúrguer)
document.addEventListener("DOMContentLoaded", () => {
    const menuButton = document.querySelector(".menu-button");
    if (menuButton) {
        menuButton.addEventListener("click", toggleMenu);
    }
});
