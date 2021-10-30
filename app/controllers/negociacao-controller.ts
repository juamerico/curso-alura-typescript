import { DiasDaSemana } from "../enums/dias-da-semana.js"
import { Negociacao } from "../models/negociacao.js"
import { Negociacoes } from "../models/negociacoes.js"
import { MensagemView } from "../views/mensagem-view.js"
import { NegociacoesView } from "../views/negociacoes-view.js"

export class NegociacaoController {
    private inputData: HTMLInputElement
    private inputQuantidade: HTMLInputElement
    private inputValor: HTMLInputElement
    private negociacoes = new Negociacoes()
    private negociacoesView = new NegociacoesView("#negociacoesView")
    private mensagemView = new MensagemView("#mensagemView")
    private readonly SABADO = 6
    private readonly DOMINGO = 0

    constructor() {
        this.inputData = document.querySelector("#data")
        this.inputQuantidade = document.querySelector("#quantidade")
        this.inputValor = document.querySelector("#valor")
    }

    public adiciona(): void {
        const negociacao = this.criaNegociacao()

        if(!this.ehDiaUtil(negociacao.data)) {
            this.mensagemView
            .update("Só é possível adicionar negociações em dias úteis")
            return
        }

        this.negociacoes.adiciona(negociacao)
        //consegue setar (sem ser atribuição com sinal de igual) um novo valor no getter, a menos que crie uma "cópia" do objeto literal
        //negociacao.data.setDate(10)
        this.limparFormulario()
        this.atualizaView()
    }

    private ehDiaUtil(data: Date) {
        return data.getDay() > DiasDaSemana.DOMINGO
            && data.getDay() < DiasDaSemana.SABADO
    }

    private criaNegociacao(): Negociacao {
        const exp = /-/g
        const data = new Date(this.inputData.value.replace(exp, ","))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseFloat(this.inputValor.value)

        return new Negociacao(data, quantidade, valor)
    }

    private limparFormulario(): void {
        this.inputData.value = ""
        this.inputQuantidade.value = ""
        this.inputValor.value = ""
        this.inputData.focus()
    }

    private atualizaView(): void {
        this.negociacoesView.update(this.negociacoes)
        this.mensagemView.update("Negociação adicionada com sucesso!")
    }
}