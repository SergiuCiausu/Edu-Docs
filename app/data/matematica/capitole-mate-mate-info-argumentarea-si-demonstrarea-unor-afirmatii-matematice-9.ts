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
          text: "Logica matematică",
          link: "logica-matematica"
        }
      ],
      h3: [
        { 
            text: "Introducere",
            link: "introducere"
        },
        { 
            text: "Propoziții logice",
            link: "propozitii-logice"
        },
        { 
            text: "Conective logice",
            link: "conective-logice"
        },
        { 
            text: "Tabele de adevăr",
            link: "tabele-de-adevar"
        },
        { 
            text: "Raționamente deductive",
            link: "rationamente-deductive"
        },
      ]
    },
    {
      h2: [
        {
          text: "Demonstrații matematice",
          link: "demonstratii-matematice"
        }
      ],
      h3: [
        { 
            text: "Ce este o demonstrație matematică?",
            link: "ce-este-o-demonstratie-matematica"
        },
        { 
            text: "Structura unei demonstrații",
            link: "structura-unei-demonstratii"
        },
        { 
            text: "Tehnici de demonstrare",
            link: "tehnici-de-demonstrare"
        },
        { 
            text: "Exemple de demonstrații clasice",
            link: "exemple-de-demonstratii-clasice"
        },
      ]
    },
  ]