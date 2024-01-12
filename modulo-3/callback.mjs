function dividir(a, b, callback) {
    if (b === 0) {
        callback(new Error("Divisão por zero não é permitida"), null);
    } else {
        callback(null, a / b);
    }
}

dividir(10, 2, function(erro, resultado) {
    console.log("aquui primeiro")
    if (erro) {
        console.error(erro.message);
    } else {
        console.log("Resultado:", resultado);
    }
});
