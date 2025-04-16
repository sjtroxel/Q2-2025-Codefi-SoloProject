import { Injectable, signal } from '@angular/core';
import { Instrument } from '../models/instrument.model';
import { instrumentsList } from '../data/instruments';

@Injectable({
  providedIn: 'root'
})
export class InstrumentService {
  instruments = signal<Instrument[]>(instrumentsList);
  // submittedInstrument = signal<Partial<Instrument> | null>(null);


getInstruments() {
  return this.instruments.asReadonly;
}

closeForm = signal(false);

instrumentToEdit = signal<Instrument | null>(null);

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
    {id: id, type: t, family: f, brand: b, serialNumber: sn, condition: c, notes: n}]);
    // this.closeForm.set(true);

 }

 deleteInstrument(id: number) {
  this.instruments.update(current => current.filter(instr => instr.id !==id));
 }

 updateInstrument(updated: Instrument) {
  this.instruments.update(current =>
    current.map(instr =>
      instr.id === updated.id ? updated : instr
    )
  );

      // Close the form after update

  this.closeForm.set(true);
}

 setInstrumentToEdit(instrument: Instrument) {
  this.instrumentToEdit.set(instrument);
}

 clearInstrumentToEdit() {
  this.instrumentToEdit.set(null);
}

 resetCloseFormSignal() {
  this.closeForm.set(false);
}
// resetSubmittedInstrument(){
//   this.submittedInstrument.set(null);
// }
}

