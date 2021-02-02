import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#1C1A19"
      },
      secondary: {
        main: "#FDBF5A"
      }
    },
    overrides: {
      MuiPaper: {
        root: {
          padding: "55px 55px"
        },
        rounded: {
          borderRadius: "20px",
        }
      },
      MuiFormLabel: {
        root: {
          "&$focused": {
            color: "#000"
          }
        }
      },
      MuiLink: {
        root: {
          cursor: "pointer"
        }
      },
      MuiTextField: {
        root: {
          width: "350px"
        },
        underline: {
          "&:after": {
            "border-bottom-color": "#1473e6"
          }
        },
      },
      MuiFormHelperText: {
        root: {
          position: "absolute",
          bottom: "-1.4em",
        }
      },
      MuiButton: {
        root: {
          textTransform: 'none',
          padding: '16px 0',
          margin: "20px 0",
          borderRadius: "30px"
        },
        contained: {
          boxShadow: "none",
          backgroundColor: "#FDBF5A",
          "&:focus": {
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
          },
          "&:hover": {
            backgroundColor: "#FFA842",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
          },
          "&:disabled": {
            backgroundColor: "#D8D7D5",
            boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
          }
        }
      },
      MuiAppBar: {
        root: {
          padding: "20px 30px",
          height: "120px",
        },
        colorPrimary: {
          backgroundColor: "#1C1A19",
        }
      }
    }
  });