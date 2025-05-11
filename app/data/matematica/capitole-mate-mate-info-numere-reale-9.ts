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
          text: "Proprietăți ale numerelor reale",
          link: "proprietati-ale-numerelor-reale"
        }
      ],
      h3: [
        { 
            text: "Introducere",
            link: "introducere"
        },
        { 
            text: "Proprietăți generale ale numerelor reale",
            link: "proprietati-generale-ale-numerelor-reale"
        },
        { 
            text: "Proprietăți ale numerelor reale în cadrul ordonării",
            link: "proprietati-ale-numerelor-reale-in-cadrul-ordonarii"
        },
        { 
            text: "Proprietăți ale numerelor reale în cadrul mulțimilor",
            link: "proprietati-ale-numerelor-reale-in-cadrul-multimilor"
        },
        { 
            text: "Exemple și exerciții",
            link: "exemple-si-exercitii"
        },
      ]
    },
    {
      h2: [
        {
          text: "Operații cu numere reale",
          link: "operatii-cu-numere-reale"
        }
      ],
      h3: [
        { 
            text: "Ridicarea la putere a numerelor reale",
            link: "ridicarea-la-putere-a-numerelor-reale"
        },
        { 
            text: "Rădăcini pătrate și operații cu ele",
            link: "radacini-patrate-si-operatii-cu-ele"
        },
        { 
            text: "Exemple și exerciții",
            link: "exemple-si-exercitii"
        },
      ]
    },
    {
      h2: [
        {
          text: "Ordinea numerelor reale",
          link: "ordinea-numerelor-reale"
        }
      ],
      h3: [
        { 
            text: "Introducere",
            link: "introducere"
        },
        { 
            text: "Relația de ordine",
            link: "relatia-de-ordine"
        },
        { 
            text: "Cum comparăm două numere reale",
            link: "cum-comparam-doua-numere-reale"
        },
        { 
            text: "Proprietățile relației de ordine",
            link: "proprietatile-relatiei-de-ordine"
        },
        { 
            text: "Reprezentarea numerelor reale pe axa numerelor",
            link: "reprezentarea-numerelor-reale-pe-axa-numerelor"
        },
        { 
            text: "Inegalități și interpretarea lor",
            link: "inegalitati-si-interpretarea-lor"
        },
      ]
    },
  ]