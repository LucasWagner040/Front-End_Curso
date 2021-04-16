function mostrarOperadoresLogicos(){
    const valorA = true;
    const valorB = false;

    console.log("Operador && (E)")
    console.log(`${valorA} && ${valorA} = ${valorA && valorA}`);
    console.log(`${valorA} && ${valorB} = ${valorA && valorB}`);
    console.log(`${valorB} && ${valorA} = ${valorB && valorA}`);
    console.log(`${valorB} && ${valorB} = ${valorB && valorB}`);

    console.log("\n---------------------------------------\n")

    console.log("Operador || (OU)")
    console.log(`${valorA} || ${valorA} = ${valorA || valorA}`);
    console.log(`${valorA} || ${valorB} = ${valorA || valorB}`);
    console.log(`${valorB} || ${valorA} = ${valorB || valorA}`);
    console.log(`${valorB} || ${valorB} = ${valorB || valorB}`);

    console.log("\n---------------------------------------\n")

    console.log("Operador ! (NAO)")
    console.log(`!${valorA} = ${!valorA}`);
    console.log(`!${valorB} = ${!valorB}`);
}



mostrarOperadoresLogicos()