import { Component, ResolvedReflectiveFactory } from '@angular/core';
import { RegisterService } from './services/register.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {  

  constructor(private rServe:RegisterService) {}
  
  

  }