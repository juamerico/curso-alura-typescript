export abstract class View<T> {
    protected elemento: HTMLElement
    private escapar = false

    constructor(seletor: string, escapar?: boolean) {
        this.elemento = document.querySelector(seletor)

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
