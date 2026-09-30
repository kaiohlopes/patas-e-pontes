const app = document.getElementById("app");
 
const rotas = {
home: "../html/home-content.html",
projetos: "../html/projetos-content.html",
cadastro: "../html/cadastro-content.html"
};
 
function carregarPagina(pagina) {
fetch(rotas[pagina])
.then(response => response.text())
.then(html => {
app.innerHTML = html;

if (pagina === "cadastro") {
const form = document.querySelector("form");
const dadosSalvos = localStorage.getItem("voluntario");

if (dadosSalvos) {
const voluntario = JSON.parse(dadosSalvos);

document.getElementById("nome").value = voluntario.nome || "";
document.getElementById("cpf").value = voluntario.cpf || "";
document.getElementById("telefone").value = voluntario.telefone || "";
document.getElementById("cep").value = voluntario.cep || "";
}

form.addEventListener("submit", (evento) => {
evento.preventDefault();

const nome = document.getElementById("nome").value.trim();
const cpf = document.getElementById("cpf").value.trim();
const telefone = document.getElementById("telefone").value.trim();
const cep = document.getElementById("cep").value.trim();

if (!nome || !cpf || !telefone || !cep) {
alert("Preencha todos os campos obrigatórios.");
return;
}

const dados = {
nome,
cpf,
telefone,
cep
};

localStorage.setItem(
"voluntario",
JSON.stringify(dados)
);

alert("Cadastro realizado com sucesso!");
});
}
});
}

document.querySelectorAll("[data-page]").forEach(link => {
link.addEventListener("click", (evento) => {
evento.preventDefault();
 
const pagina = link.dataset.page;
 
carregarPagina(pagina);
});
});
 
carregarPagina("home");

const projetos = [
{
nome: "Resgate e Reabilitação",
descricao: "Realizamos o resgate de animais abandonados..."
},
{
nome: "Feira de Adoção",
descricao: "Organizamos feiras de adoção responsável..."
},
{
nome: "Educação e Conscientização",
descricao: "Promovemos ações educativas sobre proteção animal..."
}
];