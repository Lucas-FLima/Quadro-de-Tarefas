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
    const div = document.createElement('div'); // embocando uma tag li
    const dado = adicionar.tarefas;

    div.innerHTML = `
    <span onclick="feito(this)" class="disable"></span>
    <li>${dado}</li>
    <button onclick="removerTarefa(${adicionar.id})" class="delete-tarefa">
    X</button>`;
    div.classList.add('box_tarefas');

    ul.append(div);
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

function feito(elemento) {
    const div = elemento.parentElement;
    if (elemento.classList.contains('disable')) {
        elemento.classList.remove('disable');
        elemento.classList.add('realizado');
        div.classList.add('feito');
    }
    else {
        elemento.classList.remove('realizado');
        elemento.classList.add('disable');
        div.classList.remove('feito');
    }
}