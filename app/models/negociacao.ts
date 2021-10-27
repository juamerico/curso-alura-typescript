export class Negociacao {
    constructor(
        private _data: Date,
        public readonly quantidade: number,
        public readonly valor: number
    ) {}

    volume() {
        return this.quantidade * this.valor
    }

    get data(): Date {
        return new Date(this._data.getTime())
    }
}
