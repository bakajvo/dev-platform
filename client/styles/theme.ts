import {createMuiTheme, ThemeOptions} from '@material-ui/core/styles';
import {green} from '@material-ui/core/colors';

// A theme with custom primary and secondary color.
// It's optional.
export const DRAWER_WIDTH = 240;

const theme = createMuiTheme({
    palette: {
        // type: 'dark',
        primary: {
            main: "#2d2d2d",
            text: "#fff",
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700],
        },
        typography: {
            useNextVariants: true,
        },
    }
} as ThemeOptions);
export type Theme = typeof theme;
export default theme;


