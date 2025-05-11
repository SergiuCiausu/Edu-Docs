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
          text: "Funcții",
          link: "functii"
        }
      ],
      h3: [
        { 
            text: "Definiția funcției",
            link: "definitia-functiei"
        },
        { 
            text: "Domeniul de definiție și codomeniul",
            link: "domeniul-de-definitie-si-codomeniul"
        },
        { 
            text: "Tipuri de funcții",
            link: "tipuri-de-functii"
        },
        { 
            text: "Reprezentarea grafică a funcțiilor",
            link: "reprezentarea-grafica-a-functiilor"
        },
        { 
            text: "Exemple de exerciții",
            link: "exemple-de-exercitii"
        },
      ]
    },
  ]