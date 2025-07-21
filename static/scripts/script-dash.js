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
  alert("Funcionalidade disponível em breve!");
}
function sairConta(e) {
  e.preventDefault();
  alert("Funcionalidade de sair em breve!");
}

// --- calendário ---

const eventos = [
  // Segunda-feira
  { dia: "seg", hora: "08", titulo: "Inspeção do Canal", status: ["A", "Y"] },
  { dia: "seg", hora: "13", titulo: "Manutenção Preventiva", status: ["Y"] },
  { dia: "seg", hora: "18", titulo: "Treinamento de Equipe", status: ["A"] },

  // Terça-feira
  { dia: "ter", hora: "09", titulo: "Atualização de Software", status: ["Y"] },
  {
    dia: "ter",
    hora: "14",
    titulo: "Controle de Qualidade",
    status: ["A", "Y"],
  },
  { dia: "ter", hora: "20", titulo: "Reunião Operacional", status: ["A"] },

  // Quarta-feira
  {
    dia: "qua",
    hora: "10",
    titulo: "Avaliação de Desempenho",
    status: ["Y", "Y", "A", "A"],
  },
  { dia: "qua", hora: "15", titulo: "Teste de Equipamentos", status: ["A"] },
  { dia: "qua", hora: "21", titulo: "Backup de Dados", status: ["A", "Y"] },

  // Quinta-feira
  { dia: "qui", hora: "08", titulo: "Inspeção Ambiental", status: ["A"] },
  { dia: "qui", hora: "12", titulo: "Capacitação Técnica", status: ["Y"] },
  { dia: "qui", hora: "17", titulo: "Análise de Riscos", status: ["A", "Y"] },

  // Sexta-feira
  {
    dia: "sex",
    hora: "09",
    titulo: "Revisão de Procedimentos",
    status: ["Y", "Y", "A"],
  },
  {
    dia: "sex",
    hora: "14",
    titulo: "Relatório de Produção",
    status: ["A", "Y"],
  },
  {
    dia: "sex",
    hora: "19",
    titulo: "Planejamento de Projetos",
    status: ["A", "Y"],
  },
];

eventos.forEach((evt) => {
  const cell = document.getElementById(`${evt.dia}-${evt.hora}`);
  if (cell) {
    const div = document.createElement("div");
    div.className = "event";
    div.innerHTML = `<strong>${evt.titulo}</strong>
      <div class="status">
        ${evt.status
          .map((s) =>
            s === "Y"
              ? '<img src="/static/img/user1.png" alt="A" class="user-avatar">'
              : '<img src="/static/img/user1.png" alt="Y" class="user-avatar">'
          )
          .join("")}
      </div>`;
    cell.appendChild(div);
  } else {
    console.warn(`Elemento não encontrado: ${evt.dia}-${evt.hora}`);
  }
});
