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
          text: "Utilizarea conceptelor, metodelor și procedeelor matematice",
          link: "utilizarea-conceptelor-metodelor-si-procedeelor-matematice"
        }
      ],
      h3: [
        { 
            text: "",
            link: ""
        }
      ]
    },
    {
      h2: [
        {
          text: "Modelarea matematică a unor situații concrete",
          link: "modelarea-matematica-a-unor-situatii-concrete"
        }
      ],
      h3: [
        { 
            text: "",
            link: ""
        }
      ]
    },
    {
      h2: [
        {
          text: "Analiza și interpretarea datelor statistice",
          link: "analiza-si-interpretarea-datelor-statistice"
        }
      ],
      h3: [
        { 
            text: "",
            link: ""
        }
      ]
    },
    {
      h2: [
        {
          text: "Argumentarea și demonstrarea unor afirmații matematice",
          link: "argumentarea-si-demonstrarea-unor-afirmatii-matematice"
        }
      ],
      h3: [
        { 
            text: "",
            link: ""
        }
      ]
    },
  ]