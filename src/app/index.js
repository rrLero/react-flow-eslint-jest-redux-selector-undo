// @flow

import React from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter, Switch, Route, NavLink} from 'react-router-dom';

import withRoot from '../with-root';

import Home from '../routes/home';
import store from '../store';

type OwnProps = {};

type DispatchProps = {};

type Props = OwnProps & DispatchProps;

class App extends React.Component<Props> {

    componentDidMount() {}

    componentWillUpdate(nextProps: Props) {}

    render() {
        return (
            <Provider store={store}>
                <BrowserRouter>
                    <div>
                        <div style={{width: 180, float: 'left'}}>
                            <h1>Side Menu</h1>
                            <ul style={{listStyleType: 'none'}}>
                                <li>
                                    <NavLink to="/home">home</NavLink>
                                </li>
                            </ul>
                        </div>
                        <div style={{float: 'left'}}>
                            <Switch>
                                <Route exact={true} path="/" component={Home}/>
                                <Route path="/home" component={Home}/>
                            </Switch>
                        </div>
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default withRoot(App);
