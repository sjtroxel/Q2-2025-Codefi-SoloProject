import { Injectable, signal } from '@angular/core';
import { Instrument } from '../models/instrument.model';
import { instrumentsList } from '../data/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instruments = signal<Instrument[]>(instrumentsList);
  submittedInstrument = signal<Partial<Instrument> | null>(null);


getInstruments() {
  return this.instruments.asReadonly;
}

addInstrument(
  id: number,
  t: string,
  f: 'brass' | 'woodwind' | 'percussion' | 'stringInstrument' | 'keyboard',
  b: string,
  sn: string,
  c: 'new' | 'excellent' | 'good' | 'fair' | 'very poor',
  n: string,
 ) {
  this.instruments.update(i => [...i,
    {id: id, type: t, family: f, brand: b, serialNumber: sn, condition: c, notes: n}])
 }

 deleteInstrument(id: number) {
  this.instruments.update(current => current.filter(instr => instr.id !==id));
 }
resetSubmittedInstrument(){
  this.submittedInstrument.set(null);
}
}

