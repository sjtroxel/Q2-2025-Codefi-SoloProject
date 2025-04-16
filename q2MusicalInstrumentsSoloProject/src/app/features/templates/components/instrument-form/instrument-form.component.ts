import { Component, effect, inject, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { InstrumentService } from '../../../../shared/services/instrument.service';
import { Instrument } from '../../../../shared/models/instrument.model';

@Component({
  selector: 'app-instrument-form',
  imports: [SharedModule],
  templateUrl: './instrument-form.component.html',
  styleUrl: './instrument-form.component.css'
})
export class InstrumentFormComponent {

  instrumentService = inject(InstrumentService);
// form: any;
form: FormGroup;

submittedData = signal<any| null>(null);

constructor(private fb: FormBuilder) {
this.form = this.fb.group({
  type:['', Validators.required],
  family:['', Validators.required],
  brand:['', Validators.required],
  serialNumber:['', Validators.required],
  condition:['', Validators.required],
  notes:['']
});

effect(() => {
  const editingInstrument = this.instrumentService.instrumentToEdit();
  if (editingInstrument) {
    this.form.patchValue(editingInstrument);
  }
});
}


onSubmit() {
  const formData = this.form.value;
  const editing = this.instrumentService.instrumentToEdit();

  if (editing) {
    //  Here is where you uppdate the existing instrument
    const updatedInstrument: Instrument = {
      ...editing,
      ...formData
    };
    this.instrumentService.updateInstrument(updatedInstrument);
    this.instrumentService.clearInstrumentToEdit();
  } else {
    // Here is where you add a new instrument
    const newId = Date.now();
    this.instrumentService.addInstrument(
      newId,
      formData.type,
      formData.family,
      formData.brand,
      formData.serialNumber,
      formData.condition,
      formData.notes || ''
    );
  }

  this.submittedData.set(formData);
this.form.reset();
console.log('submitted')
}
}




