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
          text: "Echilibrul forțelor",
          link: "echilibrul-fortelor"
        }
      ],
      h3: [
        {
          text: "Condiții de echilibru pentru un punct material",
          link: "conditii-de-echilibru-pentru-un-punct-material"
        },
        {
          text: "Momentele forțelor",
          link: "momentele-fortelor"
        },
        {
          text: "Echilibrul solidului rigid",
          link: "echilibrul-solidului-rigid"
        },
        {
          text: "Exemple de aplicații:",
          link: "exemple-de-aplicatii"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Mișcarea de rotație",
          link: "miscarea-de-rotatie"
        }
      ],
      h3: [
        {
          text: "Mișcarea de rotație uniformă",
          link: "miscarea-de-rotatie-uniforma"
        },
        {
          text: "Momentul de inerție",
          link: "momentul-de-inertie"
        },
        {
          text: "Legea momentului cinetic",
          link: "legea-momentului-cinetic"
        },
        {
          text: "Conservarea momentului cinetic",
          link: "conservarea-momentului-cinetic"
        },
        {
          text: "Exemplu practic:",
          link: "exemplu-practic"
        },
      ]
    },
  ]