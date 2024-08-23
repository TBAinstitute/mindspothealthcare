import facebook from "@/public/image/facebook.svg"
import instagram from "@/public/image/instagram.svg"
import x from "@/public/image/x.svg"
import linkeden from "@/public/image/linkeden.svg"
import youtube from "@/public/image/youtube.svg"


export const footerData = [

    {
      label: "About Us",
      link: "#",
      children: [
        {
          label: "About MindSpot",
          link: "/about-us",
        },
        {
          label: "Our Mission",
          link: "/about-us#Our-Mission",
        },
        {
          label: "Our Values",
          link: "/about-us#Our-Values",
        },
        {
          label: "Our Commitment",
          link: "/about-us#Our-Commitment",
        },
        {
          label: "Our Stories",
          link: "/about-us#Our-Story",
        },
        {
          label: "Why Choose Us",
          link: "/about-us#Why-Choose-Us",
        },
      ],
    },
    {
      label: "Patients and Loved Ones",
      link: "#",
      children: [
        {
          label: "Our Services",
          link: "/our-services",
        },
        {
          label: "Resources",
          link: "/resources",
        },
        {
          label: "Getting Started",
          link: "/get-started",
        },
        {
          label: "Client Satisfaction Survey ",
          link: "/client-satisfaction-survey",
        },

      ],
    },

  ];


  export const socials=[
    {
        id:1,
        img:facebook,
        link:"#"
    },
    {
        id:2,
        img:instagram,
        link:"#"
    },
    {
        id:3,
        img:x,
        link:"#"
    },
    {
        id:4,
        img:linkeden,
        link:"#"
    },
    {
        id:5,
        img:youtube,
        link:"#"
    },
  ]
  