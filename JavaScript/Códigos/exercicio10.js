let carro = {
    modelo: "fusca",
    cor: "azul",
    ano: 1988
};

for (let propriedade in carro) {
    console.log (propriedade + ":", carro[propriedade]);
}