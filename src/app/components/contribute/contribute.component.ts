import { Component } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { FooterComponent } from '../../shared/footer/footer.component';
import { MainContainerComponent } from '../../shared/main-container/main-container.component';

@Component({
  selector: 'app-contribute',
  imports: [MainContainerComponent],
  templateUrl: './contribute.component.html',
  styleUrl: './contribute.component.css'
})
export class ContributeComponent {

}
