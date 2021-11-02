export class View {
    constructor(seletor, escapar) {
        this.escapar = false;
        const seletorElemento = document.querySelector(seletor);
        if (seletorElemento) {
            this.elemento = seletorElemento;
        }
        else {
            throw Error(`Seletor ${seletor} não encontrado. Verifique.`);
        }
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(modelo) {
        let template = this.template(modelo);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, "");
        }
        this.elemento.innerHTML = template;
    }
}
