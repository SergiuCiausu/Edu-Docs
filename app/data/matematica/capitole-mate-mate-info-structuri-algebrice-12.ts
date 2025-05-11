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
          text: "Grupuri",
          link: "grupuri"
        }
      ],
      h3: [
        { 
            text: "Definirea unui grup",
            link: "definirea-unui-grup"
        },
        { 
            text: "Exemple de grupuri",
            link: "exemple-de-grupuri"
        },
        { 
            text: "Proprietăți fundamentale ale grupurilor",
            link: "proprietati-fundamentale-ale-grupurilor"
        },
      ]
    },
    {
      h2: [
        {
          text: "Inele și corpuri",
          link: "inele-si-corpuri"
        }
      ],
      h3: [
        { 
            text: "Definirea unui inel",
            link: "definirea-unui-inel"
        },
        { 
            text: "Definirea unui corp",
            link: "definirea-unui-corp"
        },
        { 
            text: "Exemple",
            link: "exemple"
        },
      ]
    },
    {
      h2: [
        {
          text: "Inele de polinoame",
          link: "inele-de-polinoame"
        }
      ],
      h3: [
        { 
            text: "Inelele de polinoame",
            link: "inelele-de-polinoame"
        },
        { 
            text: "Operații în K[x]",
            link: "operatii-in-kx"
        },
        { 
            text: "Teorema împărțirii cu rest",
            link: "teorema-impartirii-cu-rest"
        },
        { 
            text: "Schema lui Horner",
            link: "schema-lui-horner"
        },
        { 
            text: "Teorema lui Bézout",
            link: "teorema-lui-bezout"
        },
        { 
            text: "Divizibilitate în K[x]",
            link: "divizibilitate-in-kx"
        },
        { 
            text: "Polinoame ireductibile",
            link: "polinoame-ireductibile"
        },
        { 
            text: "Descompunerea în factori",
            link: "descompunerea-in-factori"
        },
      ]
    },
  ]