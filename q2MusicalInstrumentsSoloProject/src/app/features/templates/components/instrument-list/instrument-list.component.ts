import { Component, effect, inject, signal } from '@angular/core';
import { InstrumentService } from '../../../../shared/services/instrument.service';
// import { InstrumentItemComponent } from '../instrument-item/instrument-item.component';
import { SharedModule } from '../../../../shared/shared-module';
import { InstrumentFormComponent } from '../instrument-form/instrument-form.component';
import { Instrument } from '../../../../shared/models/instrument.model';

@Component({
  selector: 'app-instrument-list',
  standalone: true,
  imports:
  // [InstrumentItemComponent,
     [SharedModule, InstrumentFormComponent],
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.css'
})
export class InstrumentListComponent {
  instrumentService = inject(InstrumentService);
  instruments = this.instrumentService.instruments;
  showForm = signal(false);

constructor() {
    effect(() => {
      if (this.instrumentService.closeForm()) {
        this.closeModal();
        this.instrumentService.resetCloseFormSignal();
      }
    });
  }


  openModal() {
    this.showForm.set(true);
  }

  closeModal() {
    this.showForm.set(false);
  }

  editInstrument(instrument: Instrument) {
    this.instrumentService.setInstrumentToEdit(instrument);
    this.openModal();
  }

  deleteInstrument(id: number) {
    this.instrumentService.deleteInstrument(id);
  }

}
