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
          text: "Introducere în chimia organică",
          link: "introducere-in-chimia-organica"
        }
      ],
      h3: [
        { 
            text: "Ce este chimia organică?",
            link: "ce-este-chimia-organica"
        },
        { 
            text: "Izomeria în chimia organică",
            link: "izomeria-in-chimia-organica"
        },
        { 
            text: "Clasificarea compușilor organici",
            link: "clasificarea-compusilor-organici"
        },
        { 
            text: "Legături chimice în compușii organici",
            link: "legaturi-chimice-in-compusii-organici"
        },
        { 
            text: "Formele de reprezentare ale compușilor organici",
            link: "formele-de-reprezentare-ale-compusilor-organici"
        },
      ]
    },
    {
      h2: [
        {
          text: "Alcanii",
          link: "alcanii"
        }
      ],
      h3: [
        { 
            text: "Definirea și formula generală",
            link: "definirea-si-formula-generala"
        },
        { 
            text: "Nomenclatura IUPAC",
            link: "nomenclatura-iupac"
        },
        { 
            text: "Izomeria alcanilor",
            link: "izomeria-alcanilor"
        },
        { 
            text: "Proprietăți fizice",
            link: "proprietati-fizice"
        },
        { 
            text: "Reacții caracteristice",
            link: "reactii-caracteristice"
        },
      ]
    },
    {
      h2: [
        {
          text: "Compușii oxigenați",
          link: "compusii-oxigenati"
        }
      ],
      h3: [
        { 
            text: "Structura și clasificare",
            link: "structura-si-clasificare"
        },
        { 
            text: "Proprietăți fizice",
            link: "proprietati-fizice"
        },
        { 
            text: "Reacții caracteristice",
            link: "reactii-caractertistice"
        },
        { 
            text: "Diferențe cheie: Alcooli vs Fenoli",
            link: "diferente-cheie-alcooli-vs-fenoli"
        },
      ]
    },
    {
      h2: [
        {
          text: "Compușii azotați",
          link: "compusii-azotati"
        }
      ],
      h3: [
        { 
            text: "Structura și clasificare",
            link: "structura-si-clasificare"
        },
        { 
            text: "Proprietăți fizice și chimice",
            link: "proprietati-fizice-si-chimice"
        },
        { 
            text: "Reacții caracteristice",
            link: "reactii-caracteristice"
        },
      ]
    },
    {
      h2: [
        {
          text: "Polimerii",
          link: "polimerii"
        }
      ],
      h3: [
        { 
            text: "Ce sunt polimerii?",
            link: "ce-sunt-polimerii"
        },
        { 
            text: "Tipuri de reacții de polimerizare",
            link: "tipuri-de-reactii-de-polimerizare"
        },
        { 
            text: "Exemple de polimeri",
            link: "exemple-de-polimeri"
        },
        { 
            text: "Proprietăți și aplicații ale polimerilor",
            link: "proprietati-si-aplicatii-ale-polimerilor"
        },
      ]
    },
  ]