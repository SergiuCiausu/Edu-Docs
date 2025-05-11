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
          text: "Operații cu mulțimi",
          link: "operatii-cu-multimi"
        }
      ],
      h3: [
        { 
            text: "Introducere",
            link: "introducere"
        },
        { 
            text: "Definiție",
            link: "definitie"
        },
        { 
            text: "Modalități de descriere a unei mulțimi",
            link: "modalitati-de-descriere-a-unei-multimi"
        },
        { 
            text: "Apartenența",
            link: "apartenenta"
        },
        { 
            text: "Mulțimea vidă",
            link: "multimea-vida"
        },
        { 
            text: "Exemple și exerciții",
            link: "exemple-si-exercitii"
        },
        { 
            text: "Operații principale",
            link: "operatii-principale"
        },
        { 
            text: "Observații importante",
            link: "observatii-importante"
        },
        { 
            text: "Exerciții propuse - operații cu mulțimi",
            link: "exercitii-propuse-operatii-cu-multimi"
        },
      ]
    },
    {
      h2: [
        {
          text: "Submulțimi și mulțimi finite și infinite",
          link: "submultimi"
        }
      ],
      h3: [
        { 
            text: "Submulțimi",
            link: "submultimi"
        },
        { 
            text: "Mulțimi finite și infinite",
            link: "multimi-finite-si-infinite"
        },
        { 
            text: "Exemple și exerciții",
            link: "exemple-si-exercitii"
        },
      ]
    },
  ]