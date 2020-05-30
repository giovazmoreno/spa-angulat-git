import { Component, EventEmitter, Output } from '@angular/core';
import { BusquedaService } from '../../../services/busqueda.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent {
  textoABuscar: string = '';
  constructor(private _serviciobusqueda: BusquedaService) {

  }

  ngOnInit() {
  }

  onChange(value) {
    this.textoABuscar = value;
  }
  buscarHeroe(value) {
    this._serviciobusqueda.sendValue(this.textoABuscar);
  }
}
