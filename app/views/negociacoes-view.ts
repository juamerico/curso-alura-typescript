import { Negociacoes } from "../models/negociacoes"
import { View } from "./View.js"

export class NegociacoesView extends View<Negociacoes> {
    protected template(modelo: Negociacoes): string {
        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>
                    ${
                        modelo.lista().map(negociacao => {
                            return `
                                <tr>
                                    <td>${this.formatar(negociacao.data)}</td>
                                    <td>${negociacao.quantidade}</td>
                                    <td>${negociacao.valor}</td>
                                </tr>
                            `
                        }).join("")
                    }
                </tbody>
            </table>
            <script>alert("oi")</script>
        `
    }

    private formatar(data: Date): string {
        return new Intl.DateTimeFormat().format(data)
    }
}
