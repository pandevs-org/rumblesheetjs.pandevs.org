import { CommonModule } from '@angular/common';
import {  Component, OnInit, Renderer2  } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  isDarkMode: boolean = false;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      this.isDarkMode = savedTheme === 'dark';
    } else {
      this.isDarkMode = false;
    }
    this.applyTheme();
  }

  changeTheme(): void {
    this.isDarkMode = !this.isDarkMode;
    localStorage.setItem('theme', this.isDarkMode ? 'dark' : 'light');
    this.applyTheme();
  }

  private applyTheme(): void {
    const root = document.documentElement;

    if (this.isDarkMode) {
      this.renderer.setAttribute(root, 'style', `
        --clr-accent-100: #560C97;
        --clr-accent-200: #2A1240;
        --clr-accent-300: #7612CE;
        --clr-accent-400: #4B1877;
        --clr-accent-500: #A856F0;
        --clr-accent-600: #D5B0FD;
        --clr-accent-700: #DCBFFF;
        --clr-accent-800: #E5D4FF;
        --clr-accent-900: #F1EAFF;
        --clr-accent-950: #ffffff;
      `);
      // this.renderer.setStyle(document.body, 'background-image', 'url(/public/images/background/dark-gradient.png)');
    } else {
      this.renderer.setAttribute(root, 'style', `
        --clr-accent-100: #ffffff;
        --clr-accent-200: #F1EAFF;
        --clr-accent-300: #E5D4FF;
        --clr-accent-400: #DCBFFF;
        --clr-accent-500: #D5B0FD;
        --clr-accent-600: #A856F0;
        --clr-accent-700: #8B1FEA;
        --clr-accent-800: #7612CE;
        --clr-accent-900: #560C97;
        --clr-accent-950: #36085E;
      `);
      // this.renderer.setStyle(document.body, 'background-image', 'url(/public/images/background/light-gradient.png)');
    }
  }
}
