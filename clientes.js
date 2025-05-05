let clientes = [
    {
        nome: "Conrado",
        email: "c@gmail.com",
        telefone: "(85)9.99850-0344",
        data: "05/05/05",
    },
    {
        nome: "Emmanuel",
        email: "emmanuel@gmail.com",
        telefone: "(85)9.99850-0344",
        data: "05/05/05",
    },
    {
        nome: "Ana",
        email: "ana@gmail.com",
        telefone: "(85)9.99850-0344",
        data: "05/05/05",
    }
]

function carregarClientes(listaDeClientes){
    let tbodyElement = document.querySelector("#tabela");
    listaDeClientes.map((cliente) => {
        tbodyElement.innerHTML += `
        <tr class="*:leading-[40px]">
                        <td>${cliente.nome}</td>
                        <td>${cliente.email}</td>
                        <td>${cliente.telefone}</td>
                        <td>${cliente.data}</td>
                        <td class="w-[100px] flex justify-center gap-4">
                            <box-icon name="pencil"></box-icon>
                            <box-icon name="trash"></box-icon>
                        </td>
                    </tr>
                    `;
    })
}

carregarClientes(clientes)