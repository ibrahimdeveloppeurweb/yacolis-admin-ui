import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
  
// Main Component
export class MainComponent {
  theme: any;

  constructor() { }

  ngOnInit(): void {
    this.theme = document.documentElement.getAttribute('data-theme')
    if (this.theme) {
      document.documentElement.setAttribute('data-theme', this.theme);
    } else {
      document.documentElement.setAttribute('data-theme', 'default');
    }
    document.documentElement.setAttribute('data-layout', 'vertical');
    document.documentElement.setAttribute('data-sidebar', 'dark');
    document.documentElement.setAttribute('data-bs-theme', 'light');
    document.documentElement.setAttribute('data-layout-width', 'fluid');
    document.documentElement.setAttribute('data-sidebar-image', 'none');
    document.documentElement.setAttribute('data-layout-position', 'fixed');
    document.documentElement.setAttribute('data-layout-style', 'default');
    document.documentElement.setAttribute('data-topbar', 'light');
    document.documentElement.setAttribute('data-preloader', 'disable');

    window.addEventListener('resize', function () {
      if (document.documentElement.clientWidth <= 767) {
        document.documentElement.setAttribute('data-sidebar-size', '');
        document.querySelector('.hamburger-icon')?.classList.add('open')
      }
      else if (document.documentElement.clientWidth <= 1024) {
        document.documentElement.setAttribute('data-sidebar-size', 'sm');
        document.querySelector('.hamburger-icon')?.classList.add('open')
      }
      else if (document.documentElement.clientWidth >= 1024) {
        document.documentElement.setAttribute('data-sidebar-size', 'lg');
        document.querySelector('.hamburger-icon')?.classList.remove('open')
      }
    })

  }

}
