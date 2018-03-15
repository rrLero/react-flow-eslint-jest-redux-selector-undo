// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../with-root/typedef';

const styles = (theme: Theme) => ({
    root1: {
        height: 180
    },
    wrapper1: {
        width: 100 + theme.spacing.unit * 2
    },
    paper1: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing.unit
    },
    svg1: {
        width: 100,
        height: 100
    },
    mineRule1: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1
    }
});

export default styles;
