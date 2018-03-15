// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from './typedef';

const globalStyles = (theme: Theme) => ({
    '@global': {
        ul: {
            listStyleType: 'none',
            padding: 0,
            margin: 0
        }
    }
});

export default globalStyles;
