const prompt = require('prompt-sync')();

const cadastro = []

function mostrar_menu() {
    const opcao = prompt(`
    Escolha uma opção: 
    1. Adicionar Produto: 
    2. Atualizar Produto:
    3. Listar Produto: 
    4. Deletar Produto: 
    0. Sair. `);

    switch (opcao) {
        case "1":
            adicionar_produto()
            break;

        case "2":
            atualizar_produto()
            break;
        
        case "3":
            listar_produto()
            break;

        case "4":
            deletar_produto()
            break;

        case "0":
            console.log("Até logo! ")
            break;

        default:
            console.log("Solicitação inválida, tente novamente. ")
            break;
    }
}