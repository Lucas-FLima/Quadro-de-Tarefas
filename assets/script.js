const localStorageDados = JSON.parse(localStorage.getItem('dadostarefas'));

let dadostarefas = localStorage.getItem('dadostarefas') !== null ? localStorageDados : [];

const input = document.querySelector('#valor');
const ul = document.querySelector('#lista');

const removerTarefa = ID => {
    dadostarefas = dadostarefas.filter(adicionar => adicionar.id !== ID);
    updateLocalStorage();
    init();
}

const tarefas = adicionar => {
    const li = document.createElement('li'); // embocando uma tag li
    const dado = adicionar.tarefas;

    li.innerHTML = `
    <span onclick="feito(this)" class="disable"></span>
    ${dado}
    <button onclick="removerTarefa(${adicionar.id})" class="delete-tarefa">x</button>
    `;

    ul.append(li);
}

const init = () => {
    ul.innerHTML = '';
    dadostarefas.forEach(tarefas);
}

init();

const updateLocalStorage = () => {
    localStorage.setItem('dadostarefas', JSON.stringify(dadostarefas));

}

const generateID = () => Math.round(Math.random() * 1000);

function adicionar(event) {
    const dadotarefa = input.value.trim();

    if (dadotarefa === '') {
        alert('Digite algo');
        return;
    }

    const dadoinput = { id: generateID(), tarefas: dadotarefa };
    dadostarefas.push(dadoinput);

    init();
    updateLocalStorage();
    input.value = '';
};