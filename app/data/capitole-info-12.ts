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
          text: "Baze de date",
          link: "baze-de-date"
        }
      ],
      h3: [
        { 
            text: "Ce este modelul relațional?",
            link: "ce-este-modelul-relational"
        },
        { 
            text: "Elemente de bază ale modelului relațional",
            link: "elemente-de-baza-ale-modelului-relational"
        },
      ]
    },
    {
      h2: [
        {
          text: "Programare web",
          link: "programare-web"
        }
      ],
      h3: [
        { 
            text: "Ce este HTML?",
            link: "ce-este-html"
        },
        { 
            text: "Observații importante",
            link: "observatii-importante"
        },
      ]
    },
    {
      h2: [
        {
          text: "Proiecte informatice",
          link: "proiecte-informatice"
        }
      ],
      h3: [
        { 
            text: "De ce este importantă munca în echipă în informatică?",
            link: "de-ce-este-importanta-munca-in-echipa-in-informatica"
        },
        { 
            text: "Componentele muncii în echipă",
            link: "componentele-muncii-in-echipa"
        },
        { 
            text: "Etapele de lucru în echipă",
            link: "etapele-de-lucru-in-echipa"
        },
      ]
    },
  ]