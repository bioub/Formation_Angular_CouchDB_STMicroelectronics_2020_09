class Observable {
  constructor(subscribeCb) {
    this.subscribeCb = subscribeCb;
  }

  subscribe(observer) {
    if (typeof observer === 'function') {
      observer = {
        next: observer
      }
    }
    this.subscribeCb(observer)
  }
}

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

give3Values().subscribe({
  next(val) {
    console.log(val);
  }
});


give3Values().subscribe((val) => {
  console.log(val);
});
