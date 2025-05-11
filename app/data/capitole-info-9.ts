export type Header = {
    text: string,
    link: string
}

export type Titluri = {
    h2: Header[],
    h3: Header[]
}

export type fullTitluri = Titluri[];

export const titluri: fullTitluri = [
    {
      h2: [
        {
          text: "Introducere în informatică",
          link: "introducere-in-informatica"
        }
      ],
      h3: [
        { 
            text: "Ce este informatica?",
            link: "ce-este-informatica"
        },
        { 
            text: "Istoria și evoluția calculatoarelor",
            link: "istoria-si-evolutia-calculatoarelor"
        },
        { 
            text: "Componentele hardware și software ale unui sistem de calcul",
            link: "componentele-hardware-si-software-ale-unui-sistem-de-calcul"
        },
        { 
            text: "Sisteme de operare: funcții și tipuri",
            link: "sisteme-de-operare-functii-si-tipuri"
        },
        { 
            text: "Etica și securitatea în utilizarea tehnologiei informației",
            link: "etica-si-securitatea-in-utilizarea-tehnologiei-informatiei"
        },
      ]
    },
    {
      h2: [
        {
          text: "Algoritmi și structuri de control",
          link: "algoritmi-si-structuri-de-control"
        }
      ],
      h3: [
        { 
            text: "Ce este un algoritm?",
            link: "ce-este-un-algoritm"
        },
        { 
            text: "Caracteristicile unui algoritm",
            link: "caracteristicile-unui-algoritm"
        },
        { 
            text: "Exemple de algoritmi simpli",
            link: "exemple-de-algoritmi-simpli"
        },
        { 
            text: "Domenii de aplicare ale algoritmilor",
            link: "domenii-de-aplicare-ale-algoritmilor"
        },
        { 
            text: "Importanța algoritmilor în informatică",
            link: "importanta-algoritmilor-in-informatica"
        },
      ]
    },
    {
      h2: [
        {
          text: "Limbaje de programare",
          link: "limbaje-de-programare"
        }
      ],
      h3: [
        { 
            text: "Ce este un limbaj de programare?",
            link: "ce-este-un-limbaj-de-programare"
        },
        { 
            text: "Ce este C++?",
            link: "ce-este-c"
        },
        { 
            text: "Avantajele limbajului C++",
            link: "avantajele-limbajului-c"
        },
        { 
            text: "Componentele unui program C++",
            link: "componentele-unui-program-c"
        },
      ]
    },
  ]