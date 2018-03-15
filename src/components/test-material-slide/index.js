// @flow

import React from 'react';
import {withStyles} from 'material-ui/styles';
import Switch from 'material-ui/Switch';
import Paper from 'material-ui/Paper';
import Slide from 'material-ui/transitions/Slide';
import styles from './styles';

type State = {
    checked: boolean
};

type WithProps = {
    classes: $Call<typeof styles>
};

type Props = WithProps;

class SimpleSlide extends React.Component<Props, State> {
    state = {
        checked: false
    };

    handleChange = () => {
        this.setState({checked: !this.state.checked});
    };

    render() {
        const {classes} = this.props;
        const {checked} = this.state;

        return (
            <div className={classes.root}>
                <div className={classes.wrapper}>
                    <Switch checked={checked} onChange={this.handleChange} aria-label="collapse"/>
                    <Slide direction="down" in={checked} mountOnEnter={true} unmountOnExit={true}>
                        <Paper elevation={4} className={classes.paper}>
                            <svg className={classes.svg}>
                                <polygon points="0,100 50,00, 100,100" className={classes.mineRule}/>
                            </svg>
                        </Paper>
                    </Slide>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(SimpleSlide);
