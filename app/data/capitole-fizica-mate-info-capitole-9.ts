export type Header = {
    text: string,
    link: string
}

export type Titluri = {
    h2: Header[],
    h3: Header[]
}

export type fullTitluri = Titluri[];

export const titluriCapitole: fullTitluri = [
    {
      h2: [
        {
          text: "Mecanică",
          link: "mecanica"
        }
      ],
      h3: [
        {
          text: "Cinematica punctului material",
          link: "cinematica-punctului-material"
        },
        {
          text: "Dinamica punctului material",
          link: "dinamica-punctului-material"
        },
        {
          text: "Lucrul mecanic și energia",
          link: "lucrul-mecanic-si-energia"
        },
        {
          text: "Impulsul și legea conservării impulsului",
          link: "impulsul-si-legea-conservarii-impulsului"
        },
      ]
    },
    {
      h2: [
        { 
          text: "Statica și dinamica solidului rigid",
          link: "statica-si-dinamica-solidului-rigid"
        }
      ],
      h3: [
        {
          text: "Echilibrul forțelor",
          link: "echilibrul-fortelor"
        },
        {
          text: "Mișcarea de rotație",
          link: "miscarea-de-rotatie"
        },
      ]
    },
    {
      h2: [
        {
          text: "Elemente de termodinamică",
          link: "elemente-de-termodinamica"
        }
      ],
      h3: [
        {
          text: "",
          link: ""
        },
      ]
    },
  ]