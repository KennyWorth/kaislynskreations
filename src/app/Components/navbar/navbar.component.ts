import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {

  menuToggled: boolean = false;

  constructor(private _formBuilder: FormBuilder) { 

  }

  toggleMenu() {
    this.menuToggled = !this.menuToggled;
  }

  options = this._formBuilder.group({
    bottom: 0,
    fixed: false,
    top: 0,
  });

}
