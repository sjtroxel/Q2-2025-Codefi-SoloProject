import { Component, inject, signal } from '@angular/core';
import { InstrumentService } from '../../../../shared/services/instrument.service';
import { InstrumentItemComponent } from '../instrument-item/instrument-item.component';
import { SharedModule } from '../../../../shared/shared-module';
import { InstrumentFormComponent } from '../instrument-form/instrument-form.component';

@Component({
  selector: 'app-instrument-list',
  standalone: true,
  imports: [InstrumentItemComponent,
     SharedModule, InstrumentFormComponent],
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.css'
})
export class InstrumentListComponent {
  private instrumentService = inject(InstrumentService);
  instruments = this.instrumentService.instruments;
  showForm = signal(false);

  openModal() {
    this.showForm.set(true);
  }

  closeModal() {
    this.showForm.set(false);
  }
}
