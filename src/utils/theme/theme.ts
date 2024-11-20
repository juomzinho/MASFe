const defaultValues = {
      border: {
        radius: "15px",
        style: "2px solid #736681",
      },
    
      font: {
        small: "0.7rem",
        default: "1rem",
        large: "1.5rem",
        big: "2rem",
        bigger: "2.3rem",
      },

      spacing: {
        item: "0.5rem" ,
        content: "1.5rem"
      },
      
      transition: {
        time: ".5s"
      },

      defaultColors: {
        red: "#D40808",
        blue: "#311499",
        green: "#40916c",
        gradient: "linear-gradient(138deg, rgba(81,33,255,1) 0%, rgba(49,20,153,1) 64%);"
      }
}

export const lightTheme = {
    ...defaultValues,
    defaultColor: {
      ...defaultValues.defaultColors,
      default: "#f8f9fa"
    },
    color: {
        background: "#f8f9fa",
        primary: {
          color: "#e9ecef",
          text: "#000000",
        },
        secondary: {
          text: "#818181"
        },
        shadow: "rgba(211, 211, 212, 0.4)"
    }
}

export const darkTheme = {
  ...defaultValues,
  defaultColor: {
    ...defaultValues.defaultColors,
    default: "#222831"
  },
  color: {
      background: "#222831",
      primary: {
        color: "#31363F",
        text: "#EEEEEE",
      },
      secondary: {
        text: "#818181"
      },
      shadow: "rgba(11, 11, 12, 0.4)"
  }
}