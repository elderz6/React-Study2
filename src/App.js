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
        hitpoints:96
      },
      {
        id:2,
        name:'p2',
        initiative:1,
        hitpoints:20
      },
      {
        id:3,
        name:'p3',
        initiative:14,
        hitpoints:42
      },
      {
        id:4,
        name:'p4',
        initiative:9,
        hitpoints:9
      },
      {
        id:5,
        name:'p5',
        initiative:5,
        hitpoints:22
      },
      {
        id:6,
        name:'p6',
        initiative:18,
        hitpoints:17
      }]
    }

    this.updateName = this.updateName.bind(this);
    this.initiativeUpdate = this.initiativeUpdate.bind(this);
    this.sortElements = this.sortElements.bind(this);
    this.onClick = this.onClick.bind(this);
    this.hpUpdate = this.hpUpdate.bind(this);
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

  hpUpdate()
  {}

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
              name={element.name}
              hitpoints={element.hitpoints}
              onChange={this.updateName}
              initiativeUpdate={this.initiativeUpdate}
              onClick={this.onClick}
              hpUpdate={this.hpUpdate}
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
