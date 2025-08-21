import { Component, Input, OnInit } from "@angular/core";
import { TransferenciaService } from "src/app/services/transferencia-service/transferencia.service";
import { Transferencia } from "src/app/shared/models/Transferencia";

@Component({
    selector: "extrato-component",
    templateUrl: "./extrato-component.component.html",
    styleUrls: [
        "./extrato-component.component.scss",
    ],
    standalone: false,
})
export class ExtratoComponent implements OnInit {
    public constructor(private _transferenciaService: TransferenciaService) { }

    protected transferencias: Transferencia[];

    public ngOnInit(): void {
        this._transferenciaService.retornaTodasTransferencias().subscribe({
            next: (transferencias: Transferencia[]) => {
                console.log(this.transferencias);
                this.transferencias = transferencias;
            }
        });
    }
}