import { indigo, grey } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    color: grey[900],
                    backgroundColor: indigo[200],
                }
            }
        }
    }
});