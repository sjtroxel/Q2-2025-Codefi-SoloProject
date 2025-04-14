import { Component, inject } from '@angular/core';
import { InstrumentService } from '../../../../shared/services/instrument.service';

@Component({
  selector: 'app-instrument-list',
  standalone: true,
  imports: [],
  templateUrl: './instrument-list.component.html',
  styleUrl: './instrument-list.component.css'
})
export class InstrumentListComponent {
  private instrumentService = inject(InstrumentService);
  instruments = this.instrumentService.getInstruments();

}
