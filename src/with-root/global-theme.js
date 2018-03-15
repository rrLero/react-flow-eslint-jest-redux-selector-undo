// @flow

import {createMuiTheme} from 'material-ui/styles/index';
import green from 'material-ui/colors/green';
import yellow from 'material-ui/colors/yellow';

const theme = createMuiTheme({
    palette: {
        primary: {
            light: yellow[300],
            main: yellow[500],
            dark: yellow[700]
        },
        secondary: {
            light: green[300],
            main: green[500],
            dark: green[700]
        }
    },
    myGlobals: {
        startColor: '#333333',
        startReversedColor: '#ffffff',
        mainFontSize: '16px'
    }
});

export default theme;

