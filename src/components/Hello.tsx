import * as React from 'react'

interface Props {compiler: string, framework: string}
interface State {color: string}

const colors:string[] = ['red', 'blue', 'green', 'purple', 'pink', 'orange']

export class Hello extends React.Component<Props, State> {

  state = {
    color: 'black'
  }

  handleClick = () => {
    const color = colors[Math.floor(Math.random() * colors.length)]
    this.setState({color})
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.state.color}}>Hello from {this.props.compiler} and {this.props.framework}!</h1>
        <button onClick={this.handleClick}>change color</button>
      </div>
    )
  }

}
