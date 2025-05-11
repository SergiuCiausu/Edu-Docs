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
          text: "Clasa a IX-a",
          link: "clasa-a-ix-a"
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
          text: "Clasa a X-a",
          link: "clasa-a-x-a"
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
          text: "Clasa a XI-a",
          link: "clasa-a-xi-a"
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
          text: "Clasa a XII-a",
          link: "clasa-a-xii-a"
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