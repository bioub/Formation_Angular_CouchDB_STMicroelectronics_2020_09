// COMPOSITION
// class Cafe {
//   constructor() {
//     this.type = 'café'
//   }
// }

// class Tasse {
//   constructor() {
//     this.contenu = new Cafe();
//   }
// }

// const tasseDeCafe = new Tasse();
// console.log(tasseDeCafe.contenu.type); // café

// const tasseDeThe = new Tasse();
// console.log(tasseDeCafe.contenu.type); // café

interface Contenu {
  type: string;
}

class Cafe implements Contenu {
  type = 'café';
}

class The implements Contenu {
  type = 'thé';
}

class Tasse {
  constructor(public contenu: Contenu) {}
}

const cafe = new Cafe();
const tasseDeCafe = new Tasse(cafe);
console.log(tasseDeCafe.contenu.type); // café

const the = new The();
const tasseDeThe = new Tasse(the);
console.log(tasseDeThe.contenu.type); // café

// Dependency Injection Container DIC
class Injector {
  objects = {};

  constructor(private providers) {}
  get(key) {
    if (!this.objects[key]) {
      const provider = this.providers.find((p) => p.provide === key);

      if (!provider) {
        throw new Error('No provider for ' + key.toString());
      }

      const deps = provider.deps || [];

      const args = deps.map((d) => this.get(d));

      this.objects[key] = provider.useFactory(...args);
    }

    return this.objects[key];
  }
}

// config
const providers = [
  // factory
  {
    provide: The,
    useFactory: () => {
      return new The();
    },
  },
  {
    provide: Cafe,
    useFactory: () => {
      return new Cafe();
    },
  },
  {
    provide: Tasse,
    useFactory: (contenu: Contenu) => {
      return new Tasse(contenu);
    },
    deps: [Cafe],
  },
];

const injector = new Injector(providers);

const tasseDeCafe2 = injector.get(Tasse);

console.log(tasseDeCafe2.contenu.type); // café
