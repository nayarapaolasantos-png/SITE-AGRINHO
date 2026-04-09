function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
}

function enviarFormulario(event) {
  event.preventDefault();
  alert("Mensagem enviada com sucesso!");
}

// Base de conhecimento simples
const dados = {
  solo: "A preservação do solo é essencial para evitar erosão e manter a produtividade.",
  agua: "O uso consciente da água garante sustentabilidade na produção agrícola.",
  sustentabilidade: "A agricultura sustentável busca equilíbrio entre produção e meio ambiente.",
  agricultura: "A agricultura familiar é responsável por grande parte dos alimentos consumidos no Brasil."
};

function buscar() {
  const input = document.getElementById("searchInput").value.toLowerCase();
  const resultado = document.getElementById("resultado");

  if (dados[input]) {
    resultado.innerHTML = `<p>${dados[input]}</p>`;
  } else {
    resultado.innerHTML = "<p>Informação não encontrada. Tente outro termo.</p>";
  }
}
