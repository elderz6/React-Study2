import React, { Component } from 'react';
import Card from './Card';
import { Button } from 'reactstrap'

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      elements: [
      {
        id:1,
        name:'p1',
        initiative:20,
      },
      {
        id:2,
        name:'p2',
        initiative:1,
      },
      {
        id:3,
        name:'p3',
        initiative:14,
      },
      {
        id:4,
        name:'p4',
        initiative:9,
      },
      {
        id:5,
        name:'p5',
        initiative:5,
      },
      {
        id:6,
        name:'p6',
        initiative:18,
      }]
    }

    this.updateName = this.updateName.bind(this);
    this.initiativeUpdate = this.initiativeUpdate.bind(this);
    this.sortElements = this.sortElements.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  updateName(id, e)
  {
    const {value} = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].name = value;
    this.setState({elements});
  }

  initiativeUpdate(id, e)
  {
    clearTimeout(this.timeout_);
    //refactor
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].initiative = Number(value);
    this.setState({ elements });

  }

  sortElements()
  {
    const { elements } = this.state;
    this.setState({
    elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  onClick(e)
  {
        this.timeout_ = setTimeout(() => {this.sortElements()}, 500);
  }

  render() {
    const { elements } = this.state;
    return (
      <div>
        {elements.map(element =>
          (
            <Card
              initiative={element.initiative}
              key={element.id}
              id={element.id}
              onChange={this.updateName}
              initiativeUpdate={this.initiativeUpdate}
              onClick={this.onClick}
              />
          ))}
        <Button
          outline color="primary"
          onClick={e => this.onClick(e)}
          style={{marginLeft:'1%'}}
          >
           Update
         </Button>
      </div>
    );
  }
}

export default App;
