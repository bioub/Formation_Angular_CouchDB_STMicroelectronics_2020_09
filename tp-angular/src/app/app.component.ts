import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  // title = 'tp-angular';

  constructor(private title: Title, private router: Router) {}

  ngOnInit(): void {
    this.router.events.pipe(
      // filter pour ne récupérer que NavigationEnd
      ).subscribe((event) => {
        // récupère le titre de la page courante
    // this.title.setTitle(titreDeLaPage);
      console.log(event);
    });

  }
}
