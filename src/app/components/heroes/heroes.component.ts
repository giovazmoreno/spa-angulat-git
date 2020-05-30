import { Component, OnInit, Input } from '@angular/core';
import { HeroesService, Heroe } from '../../services/heroes.service';
import { BusquedaService } from '../../services/busqueda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: [
  ]
})
export class HeroesComponent implements OnInit {

  @Input() vartext: string;

  heroes: Heroe[] = [];

  textoABuscar: string;

  //textoABuscar:string = this.busquedaService.textoBusqueda;


  constructor(private _heroesService: HeroesService,
    public busquedaService: BusquedaService,
    private _router: Router
  ) {
    busquedaService.pruebalistener.subscribe(value => {
      this.textoABuscar = value
      this.heroes = this._heroesService.buscarHeroes(value);
    });
  }

  ngOnInit(): void {
    this.heroes = this._heroesService.getHeroes();
    console.log(this.textoABuscar);
  }

  verHeroe(index: number) {
    this._router.navigate(['/heroe', index]);
  }


}


