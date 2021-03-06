const { Observable } = require("rxjs");
const { map, filter } = require("rxjs/operators");

function give3Values() {
  return new Observable((observer) => {
    setTimeout(() => {
      observer.next("Jean");
    }, 1000);
    setTimeout(() => {
      observer.next("Eric");
    }, 2000);
    setTimeout(() => {
      observer.next("Romain");
    }, 5000);
  });
}

// 1 tiret === 250ms
// schéma ci dessous : Marble Graph

// ----(Jean)----(Eric)------------(Romain)
// filter((prenom) => prenom.length === 4)
// ----(Jean)----(Eric)------------
// map((prenom) => prenom.toUpperCase())
// ----(JEAN)----(ERIC)------------

give3Values()
  .pipe(
    // operators
    filter((prenom) => prenom.length === 4),
    map((prenom) => prenom.toUpperCase()),
  )
  .subscribe((val) => {
    console.log(val);
  });

// Script Shell
// give3Values | filter | map


// saisie dans un input de formulaire
// ----(R)--------(Ro)---(Rom)-(Roma)-------(Romai)--------(Romain)

// changement de paramètres dans l'URL
// --------(dell-streak-7)-------(lg-axis)--------------------------(dell-venue)---------(dell-streak-7)------

// requete HTTP
// ---------------({_id: 'dell-streak-7', name: 'Dell Streak 7'})
// map(...)
// ---------------({_id: 'dell-streak-7', name: 'DELL STREAK 7'})


// écouter le click d'un bouton
// ---------(click)-----(click)-------------------(click)-------------

// écouter les events du Router
// -------(NavigationStart)-----(GuardStart)------(GuardEnd)----------(NavigationEnd)---
// filter(...)
// -------------------------------------------------------------------(NavigationEnd)---
