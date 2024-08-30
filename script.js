function calculaIMC(){
    const classificacaoIMC = {
    abaixoDoPeso: { min: 0, max: 18.5, mensagem: "Abaixo do peso, Procure Comer Mais" },
    pesoNormal: { min: 18.5, max: 24.9, mensagem: "Peso normal, Ok você foi Aprovado" },
    sobrepeso: { min: 25, max: 29.9, mensagem: "Sobrepeso, procure fazer exercícios" },
    obesidadeI: { min: 30, max: 34.9, mensagem: "Obesidade grau I, procure um médico" },
    obesidadeII: { min: 35, max: 39.9, mensagem: "Obesidade grau II, Procurar um Médico e Fazer exercícios intensamente" },
    obesidadeIII: { min: 40, max: Infinity, mensagem: "Obesidade grau III, Se não se controlar é Caixão" }
};
    let peso = document.getElementById('peso').value;
    let altura = document.getElementById('altura').value;
    let resultado;

    resultado = peso/(altura**2);

    let classificacao = "";
    for (const categoria in classificacaoIMC) {
        const { min, max, mensagem } = classificacaoIMC[categoria];
        if (resultado >= min && resultado < max) {
            classificacao = mensagem;
            break;
        }
    }
    document.querySelector(".resultado").textContent = resultado.toFixed(2);
    document.getElementById("resultado").textContent = `Seu IMC indica que:`;
    document.querySelector(".alertaSaude").textContent = classificacao;
}