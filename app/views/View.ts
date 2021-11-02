export abstract class View<T> {
    protected elemento: HTMLElement
    private escapar = false

    constructor(seletor: string, escapar?: boolean) {
        const seletorElemento = document.querySelector(seletor) as HTMLInputElement
        if(seletorElemento) {
            this.elemento = seletorElemento
        } else {
            throw Error(`Seletor ${seletor} não encontrado. Verifique.`)
        }

        if(escapar) {
            this.escapar = escapar
        }
    }

    protected abstract template(modelo: T): string

    public update(modelo: T): void {
        let template = this.template(modelo)
        if(this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "")
        }
        this.elemento.innerHTML = template
    }
}
