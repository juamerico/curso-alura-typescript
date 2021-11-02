export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    public volume() {
        return this.quantidade * this.valor
    }

    get data(): Date {
        return new Date(this._data.getTime())
    }

    public static criaDe(dataString: string, quantidadeString: string, valorString: string): Negociacao {
        const exp = /-/g
        const data = new Date(dataString.replace(exp, ","))
        const quantidade = parseInt(quantidadeString)
        const valor = parseFloat(valorString)

        return new Negociacao(data, quantidade, valor)
    }
}
