import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, mapTo } from 'rxjs/operators';

@Component({
  selector: 'st-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  // title = 'tp-angular';

  constructor(
    private title: Title,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // -------(NavigationStart)----(NavigationEnd)-------(NavigationStart)----(NavigationEnd)
    // filter((event) => event instanceof NavigationEnd)
    // -------                 ----(NavigationEnd)-------                 ----(NavigationEnd)
    // mapTo('TEXT')
    // -------                 ----(    'TEXT'   )-------                 ----(    'TEXT'   )

    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.activatedRoute.firstChild.snapshot.data.title)
      )
      .subscribe((title) => {
        this.title.setTitle(title);
      });
  }
}
