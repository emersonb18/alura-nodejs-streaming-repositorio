class Tabelas {

    init(conexao) {
        this.conexao = conexao
        this.criarAtendimentos()
        this.criarPets()
    }

    criarAtendimentos() {

        const sql = `CREATE TABLE IF NOT EXISTS Atendimentos 
            (
                id int NOT NULL AUTO_INCREMENT,
                cliente varchar(11) NOT NULL,
                pet varchar(20),
                servico varchar(20) NOT NULL,
                status varchar(20) NOT NULL,
                observacoes text,
                data datetime NOT NULL,
                dataCriacao datetime NOT NULL,
                PRIMARY KEY(id)
            )`

        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            }
            else {
                console.log('tabela atendimentos criada com sucesso')
            }
        })
    }

    criarPets() {
        const query = `CREATE TABLE IF NOT EXISTS Pets (
            id INT NOT NULL AUTO_INCREMENT,
            nome VARCHAR(50),
            imagem VARCHAR(200),
            PRIMARY KEY (id)
        )`
        this.conexao.query(query, (erro) => {
            if(erro) {
                console.log(erro)
            }
            else{
                console.log('tabela pets criada com sucesso')
            }
        })
    }

}

module.exports = new Tabelas