class Tarefas {
    constructor(id, descricao, dataCriacao, concluida) {
        this.id = id,
        this.descricao = descricao,
        this.dataCriacao = dataCriacao,
        this.concluida = concluida
    }

    marcarComoConcluida() {
        this.concluida = true;
    }

    toString() {
        return ${this.id} - ${this.descricao} - ${this.dataCriacao} - ${this.concluida};
    }

}


const tarefa = new Tarefas(1, 'Tarefa 1', new Date(), false);

console.log(tarefa.toString());