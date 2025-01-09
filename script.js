class Tarefas {
    constructor(id, descricao, dataCriacao, concluida = false) {
        this.id = id;
        this.descricao = descricao;
        this.dataCriacao = dataCriacao;
        this.concluida = concluida;
    }

    marcarComoConcluida() {
        this.concluida = true;
    }

    toString() {
        return `ID: ${this.id}, Descrição: ${this.descricao}, Data de Criação: ${this.dataCriacao}, Estado: ${this.concluida ? 'Concluída' : 'Pendente'}`;
    }
}

class GerenciadorDeTarefas {
    constructor() {
        this.tarefas = []; // Armazena as tarefas
        this.proximoId = 1; // Controla o ID único das tarefas
    }

    adicionarTarefa(descricao) {
        const novaTarefa = new Tarefas(
            this.proximoId,
            descricao,
            new Date().toLocaleString(),
            false
        );
        this.tarefas.push(novaTarefa);
        this.proximoId++; // Incrementa o ID para a próxima tarefa
        return novaTarefa;
    }

    listarTarefas() {
        return this.tarefas.map((tarefa) => tarefa.toString()).join('\n');
    }
}

// Exemplo de uso
const gerenciador = new GerenciadorDeTarefas();
gerenciador.adicionarTarefa("Comprar leite");
gerenciador.adicionarTarefa("Estudar programação");

console.log(gerenciador.listarTarefas());



// const tarefa = new Tarefas(1, 'Tarefa 1', new Date(), false);

// console.log(tarefa.toString());