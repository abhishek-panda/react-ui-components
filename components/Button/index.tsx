import * as React from 'react';
import bind from '../utils/bind';

interface Props {
    children : React.ReactChild,
    msg ?: string
}


interface State {
    count : number
}

export class ButtonComponent extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            count: 0,
        };
    }

    @bind
    clickHandler () {
        console.log(this.state);
    }

    render() {
        return <button onClick={this.clickHandler}>{this.props.children}</button>
    }
}


export default ButtonComponent;