import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { NovaTransferenciaComponent } from "./components/nova-transferencia-component/nova-transferencia-component.component";
import { FormsModule } from "@angular/forms";
import { ExtratoComponent } from "./components/extrato-component/extrato-component.component";
import { registerLocaleData } from "@angular/common";
import localePt from "@angular/common/locales/pt";
import { provideHttpClient, withInterceptorsFromDi } from "@angular/common/http";
import { AppRoutingModule } from "./app.routing.module";

registerLocaleData(localePt, "pt");

@NgModule({
    declarations: [
        AppComponent,
        NovaTransferenciaComponent,
        ExtratoComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        // HttpClientModule
    ],
    providers: [
        {
            provide: LOCALE_ID,
            useValue: "pt",
        },
        {
            provide: DEFAULT_CURRENCY_CODE,
            useValue: "BRL",
        },
        provideHttpClient(withInterceptorsFromDi()),
    ],
    bootstrap: [AppComponent],
})
export class AppModule { }