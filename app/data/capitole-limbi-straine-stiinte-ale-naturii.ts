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
          text: "Limba engleză",
          link: "limba-engleza"
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
          text: "Limba franceză",
          link: "limba-franceza"
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
            text: "Limba germană",
            link: "limba-germana"
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