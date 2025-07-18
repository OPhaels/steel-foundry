document.addEventListener("DOMContentLoaded", () => {
  console.log("Dashboard carregado.");

  // Exemplo simples para destacar o menu ativo dinamicamente:
  document.querySelectorAll(".sidebar ul li").forEach((item) => {
    item.addEventListener("click", () => {
      document
        .querySelectorAll(".sidebar ul li")
        .forEach((li) => li.classList.remove("active"));
      item.classList.add("active");
    });
  });
});

// --- User menu e funções existentes ---
function toggleUserMenu() {
  const menu = document.getElementById("userDropdown");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
  document.addEventListener("click", closeUserMenuOnClickOutside);
}
function closeUserMenuOnClickOutside(e) {
  const menu = document.getElementById("userDropdown");
  const btn = document.getElementById("userMenuBtn");
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.style.display = "none";
    document.removeEventListener("click", closeUserMenuOnClickOutside);
  }
}
function editarCadastro(e) {
  e.preventDefault();
  alert("Funcionalidade de editar cadastro em breve!");
}
function sairConta(e) {
  e.preventDefault();
  alert("Funcionalidade de sair em breve!");
}
