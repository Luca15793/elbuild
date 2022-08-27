import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EmitterService {
    emitter = new EventEmitter();
    emitterRandom = new EventEmitter();
}