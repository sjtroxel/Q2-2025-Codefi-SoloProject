import { Component, signal } from '@angular/core';
import { SharedModule } from '../../../../shared/shared-module';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-instrument-form',
  imports: [SharedModule],
  templateUrl: './instrument-form.component.html',
  styleUrl: './instrument-form.component.css'
})
export class InstrumentFormComponent {
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
}

onSubmit() {
if (this.form.valid)  {
this.submittedData.set(this.form.value);
this.form.reset();
console.log('submitted')
}
}

}


