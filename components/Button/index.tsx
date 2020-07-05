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
  private clickHandler(): number {
    const { count } = this.state;
    return count;
  }

  render() {
    const { children } = this.props;
    return <button type="button" onClick={this.clickHandler}>{children}</button>;
  }
}

export default ButtonComponent;
