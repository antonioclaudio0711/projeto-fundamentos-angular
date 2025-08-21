import { Component, EventEmitter, Output } from "@angular/core";
import { TransferenciaService } from "src/app/services/transferencia-service/transferencia.service";
import { Transferencia } from "src/app/shared/models/Transferencia";
import { isFunctionOrConstructorTypeNode } from "typescript";

@Component({
    selector: "nova-transferencia-component",
    standalone: false,
    templateUrl: "./nova-transferencia-component.component.html",
    styleUrls: [
        "./nova-transferencia-component.component.scss",
    ],
})
export class NovaTransferenciaComponent {
    public constructor(private _transferenciaService: TransferenciaService) { }

    protected valor: number;
    protected destino: number;
    protected mostrarModalErro = false;

    public transferir(): void {
        // [(ngModel)]="valor" ---> two way data binding (reflete mudanças do componente no template e mudanças do template no componente)
        // (ngModel)="valor" ---> property binding (reflete somente mudanças do componente no template)

        if (this.valor && this.destino) {
            this.mostrarModalErro = false;
            console.log("Solicitada nova transferência!");

            const novaTransferencia: Transferencia = { valor: this.valor, destino: this.destino, };
            this._transferenciaService.adicionarNovaTransferencia(novaTransferencia).subscribe({
                next: (transferencia: Transferencia) => {
                    console.log(transferencia);
                    this.limparCampos();
                },
                error: (error) => {
                    console.log(error);
                },
            });
        } else {
            this.mostrarModalErro = true;
        }
    }

    private limparCampos(): void {
        this.valor = undefined;
        this.destino = undefined;
    }
}