import { Routes } from '@angular/router';
import { ExtratoComponent } from './components/extrato-component/extrato-component.component';
import { NovaTransferenciaComponent } from './components/nova-transferencia-component/nova-transferencia-component.component';

export const routes: Routes = [
    {
        path: "",
        redirectTo: "extrato",
        pathMatch: 'full',
    },
    {
        path: "extrato",
        component: ExtratoComponent,
    },
    {
        path: "nova-transferencia",
        component: NovaTransferenciaComponent,
    },
];
