import { Component, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  @ViewChild('toggleButton', { static: false }) toggleButton!: ElementRef;

  closeMenu(): void {
    if (this.toggleButton.nativeElement.getAttribute('aria-expanded') === 'true') {
      this.toggleButton.nativeElement.click();
    }
  }

}
