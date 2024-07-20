import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { FooterComponent } from "./page/components/shared/footer/footer.component";
import { ɵHTTP_ROOT_INTERCEPTOR_FNS } from '@angular/common/http';
import { HeaderComponent } from "./page/components/shared/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FooterComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'MiprimerApp';
  nombre = 'Yohel';
  edad:number=23;

}
