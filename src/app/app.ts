import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./navbar/navbar";
import { About } from "./about/about";
import { Home } from "./home/home";
@Component({

  selector: 'app-root',
  imports: [Navbar, RouterOutlet,Home ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Sample');
}
