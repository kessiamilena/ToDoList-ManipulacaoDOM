
// variavel para armazenar o form
const elForm = document.getElementById('form-tarefa');
console.log(elForm)

// variavel para armazenar o titulo da tarefa (input)
const elTitulo = document.querySelector('#titulo');

// variavel para armazenar o filtro de status
const elFiltroStatus = document.querySelector('#filtro-status')

// variavel para armazenar o filtro de busca
const elFiltroBusca = document.querySelector('#filtro-busca')

// variavel para armazenar a lista
const elLista = document.querySelector('#lista-tarefas')

// variavel para armazenar o texto que aparece quando a lista está vazia
const elVazio = document.querySelector('#vazio')

// Lista de tarefas inicial
let tarefas = [
    { id: 1, titulo: "Estudar DOM", status: "pendente" },
    { id: 2, titulo: "Criar To-Do-List", status: "andamento"},
    { id: 3, titulo: "Praticar JavaScript", status: "concluida"}
]

// Adiciona um "ouvinte" para o evento de submit do formulário
elForm.addEventListener('submit', function(e) {
    // letra "e" na função: é uma referencia ao objeto de evento
    // que o navegador cria sempre que algo acontece

    // Impede o comportamento padrão do formulário(recarregar a página)
    e.preventDefault();

    // Pega o valor(value) digitado no input(elTitulo), removendo espaços
    const titulo = elTitulo.value.trim()
    
    // Se o titulo estiver vazio, encerra a função aqui
    if(!titulo) return;
    //console.log("titulo: ", titulo)

    // Cria um objeto representando a nova tarefa
    // - id: recebe o número do timestamp atual
    // - titulo: recebe o texto digitado pelo usuário
    // - status: começa sempre como "pendente"
    const nova = { 
        id: Date.now(), 
        titulo: titulo, 
        status: "pendente"
    }

    // Adiciona a nova tarefa dentro do array de tarefas
    tarefas.push(nova)

    console.log(tarefas)

    // Limpa o campo de texto do input
    elTitulo.value = ""

    // Chama a função render() para atualizar a lista de tarefas exibida na tela
    render();

})

// Renderizar a lista
function render() {
    // termo digitado na busca - deixar em minusculo
    const termo = elFiltroBusca.value.toLowerCase();
    // console.log("termo digitado em minusculo: ", termo)

    // valor selecionado no filtro de status
    const filtro = elFiltroStatus.value;
    // console.log("filtro de status: ", filtro)

    // aplica filtros de status e busca
    const filtradas = tarefas.filter( function(t) {
        // se filtro for "todas", aceita qualquer status
        // senão - compara com t.status
        const okStatus = filtro === "todas" ? true : t.status === filtro;

        // se houver termo, verifica se titulo contem esse termo
        // se usuário digitar algo, só aceita a tarefa se for igual ao que o usuário digitou
        // se usuário não digitar nada - retorna a lista completa(true)
        const okBusca = termo ? t.titulo.toLowerCase().includes(termo) : true

        return okStatus && okBusca
    })

    // limpar a lista antes de redesenhar
    elLista.innerHTML = "";

    // cria os elementos da lista para cada tarefa filtrada
    filtradas.forEach(function(t) {
        // <li class"tarefa {status}" data-id={id}></li>
        const li = document.createElement('li')
        // class="tarefa concluida"
        li.className = "tarefa " + t.status
        li.dataset.id = t.id;

        // titulo da tarefa
        const h3 = document.createElement('h3')
        // <h3>Aula JavaScript</h3>
        h3.textContent = t.titulo

        // caixinha de ações (checkbox, select, botão remover)
        const acoes = document.createElement('div')
        acoes.className = "acao";

        //checkbox: marcar concluída/pendente
        const check = document.createElement('input')
        check.type = "checkbox"
        check.checked = t.status === "concluida"
    })
}