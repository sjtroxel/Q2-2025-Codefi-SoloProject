import { Component } from '@angular/core';
import { InstrumentListComponent } from '../../../templates/components/instrument-list/instrument-list.component';
import { NavbarComponent } from '../../../templates/components/navbar/navbar.component';

import { SharedModule } from '../../../../shared/shared-module';
import { InstrumentFormComponent } from '../../../templates/components/instrument-form/instrument-form.component';


@Component({
  selector: 'app-dashboard-page',
  imports: [InstrumentListComponent, NavbarComponent, InstrumentFormComponent,
    SharedModule
  ],
  templateUrl: './dashboard-page.component.html',
  styleUrl: './dashboard-page.component.css'
})
export class DashboardPageComponent {

}
