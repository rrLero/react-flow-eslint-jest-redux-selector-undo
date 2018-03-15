// @flow
/* eslint quote-props: ["error", "as-needed"] */

import {type Theme} from '../../with-root/typedef';

const styles = (theme: Theme) => ({
    root: {
        height: 180
    },
    wrapper: {
        width: 100 + theme.spacing.unit * 2
    },
    paper: {
        zIndex: 1,
        position: 'relative',
        margin: theme.spacing.unit
    },
    svg: {
        width: 100,
        height: 100
    },
    mineRule: {
        fill: theme.palette.common.white,
        stroke: theme.palette.divider,
        strokeWidth: 1
    }
});

export default styles;
