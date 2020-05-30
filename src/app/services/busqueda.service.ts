import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class BusquedaService {

    private prueba: BehaviorSubject<string> = new BehaviorSubject<string>("");
    pruebalistener = this.prueba.asObservable();


    sendValue(value: string) {
        this.prueba.next(value);
    }
}