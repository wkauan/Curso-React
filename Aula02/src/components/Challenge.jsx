export default function Challenge() {
    const num1 = 10;
    const num2 = 5;
    const somarValores = (e) => {
        const soma = num1+num2;
        console.log(`A soma dos valores é: ${soma}`);
    }

    return (
        <div>
            <h3>O valor do primeiro número é {num1} e o valor do segundo número é {num2}</h3>
            <button onClick={somarValores}>Some os valores</button>
        </div>
    )
}