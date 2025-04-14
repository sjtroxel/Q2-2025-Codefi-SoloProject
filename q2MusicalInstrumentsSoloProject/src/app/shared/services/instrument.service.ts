import { Injectable, signal } from '@angular/core';
import { Instrument } from '../models/instrument.model';
import DUMMY_DATA from '../data/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instruments = signal<Instrument[]>(DUMMY_DATA);

getInstruments() {
  return this.instruments.asReadonly;
}

addInstrument(
  id: number,
  t: string,
  f: string,
  b: string,
  sn: string,
  c: string,
  n: string,
 ) {
  this.instruments.update(i => [...i,
    {id: id, type: t, family: f, brand: b, serialNumber: sn, condition: c, notes: n}])
 }

 deleteInstrument(id: number) {
  this.instruments.update(current => current.filter(instr => instr.id !==id));
 }
}

