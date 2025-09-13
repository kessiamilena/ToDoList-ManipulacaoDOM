# To-Do List — Manipulação de DOM (JS Puro)

Pequeno projeto para ensinar **manipulação de DOM** com JavaScript puro: criar, listar, filtrar, atualizar status e remover tarefas — tudo em memória.

> **Stack:** HTML + CSS + JS (sem bibliotecas)  
> **Foco didático:** `addEventListener`, criação de elementos (`createElement`), eventos, filtros e renderização reativa.

---

## 🎯 Objetivos de Aprendizagem

- Prevenir comportamento padrão do form com `e.preventDefault()`.
- Criar elementos dinamicamente e montar a UI com JS.
- Usar **eventos** (`submit`, `change`, `input`, `click`).
- Filtrar dados por **status** e **busca**.
- Atualizar UI a partir do **estado** `tarefas` (array de objetos).

---

## 📦 Estrutura do Projeto

to-do-list/

├─ index.html

├─ styles/

│ └─ style.css

└─ scripts/

├─ script.js

└─ teste.js ← (experimentos/aulas)

> O HTML referencia `styles/style.css` e `scripts/script.js` (e `scripts/teste.js`, para explicações de algumas funçõe a parte).

---

## 🚀 Como Rodar

1. **Baixe/Clone** este repositório.
2. Abra o arquivo `index.html` diretamente no navegador.
   - Dica: se preferir um servidor local simples:
     - VS Code → **Go Live** (Live Server)

Não há dependências nem build.

---

## 🧠 Como Funciona (visão rápida)

- **Estado** inicial:
  ```js
  let tarefas = [
    { id: 1, titulo: "Estudar DOM", status: "pendente" },
    { id: 2, titulo: "Criar To-Do-List", status: "andamento"},
    { id: 3, titulo: "Praticar JavaScript", status: "concluida"}
  ];

Adicionar tarefa: escuta submit do form, cria objeto { id, titulo, status }, coloca no array e chama render().

Renderização: a função render():

Lê filtros (#filtro-status, #filtro-busca);

Filtra tarefas em memória;

Limpa `<ul>` e recria os `<li>` com:

<h3> (título),

<input type="checkbox"> (concluída/pendente),

<select> (pendente/andamento/concluída),

<button class="remover"> (excluir).

Mostra/oculta a mensagem “lista vazia”.

Atualizações:

checkbox alterna status entre "concluida" e "pendente";

select define o status escolhido;

botão X remove a tarefa (filter por id);

qualquer mudança chama render() novamente.

## 🖼️ UI/Estilo

Cores/variáveis CSS em :root.

Cartões com sombra, bordas arredondadas e barra lateral de status via ::before:

.pendente → cinza-azulado

.andamento → azul

.concluida → verde + título tachado

Responsivo básico até 520px.

## 🔎 Filtros

Status: Todas | Pendentes | Em andamento | Concluídas

Busca: por termo no título (case-insensitive)

## 🧩 Pontos Didáticos de Destaque

e.preventDefault() no submit para não recarregar a página.

dataset.id para ligar o <li> ao objeto da tarefa.

Capitalização do select: status.charAt(0).toUpperCase() + status.slice(1).

Re-renderização simples chamando uma função render() sempre que o estado muda.

## ✅ Checklist de Aula

Adicionar uma nova tarefa

Marcar como concluída/pendente via checkbox

Mudar status pelo select

Remover tarefa (botão X)

Filtrar por status

Buscar por termo

Tratar lista vazia

## 🛠️ Personalização

Troque a fonte (ex.: Noto Sans) no body.

Ajuste as cores em :root.

Altere os rótulos do select de status conforme sua turma.

## 💡 Sobre o Projeto

Projeto didático para prática de DOM em JavaScript. Ideal para turmas iniciantes que ainda não viram frameworks.
