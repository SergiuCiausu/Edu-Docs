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
            text: "Mate-info",
            link: "mate-info"
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
          text: "Științe ale naturii",
          link: "stiinte-ale-naturii"
        }
      ],
      h3: [
        { 
            text: "",
            link: ""
        }
      ]
    }
  ]