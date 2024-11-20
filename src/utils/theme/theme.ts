const defaultValues = {
      border: {
        radius: "15px",
        style: "2px solid #736681",
      },
    
      font: {
        small: "0.5rem",
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
        gradient: "linear-gradient(138deg, rgba(81,33,255,1) 0%, rgba(49,20,153,1) 64%);"
      }
}

export const lightTheme = {
    ...defaultValues,
    color: {
        background: "#FFFFFF",
        primary: {
          color: "#F7F6F9",
          text: "#000000",
        },
        secondary: {
          text: "#818181"
        }
    }
}

export const darkTheme = {
  ...defaultValues,
  color: {
      background: "#222831",
      primary: {
        color: "#31363F",
        text: "#EEEEEE",
      },
      secondary: {
        text: "#818181"
      }
  }
}