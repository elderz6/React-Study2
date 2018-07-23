import React, { Component } from 'react';
import Card from './Card';
import { Button } from 'reactstrap'

const randomId = () =>
 (Math.random() * 1000).toFixed(3);


class App extends Component {
  constructor(props)
  {
    super(props);
    this.state =
    {
      elements: [
      {
        id:randomId(),
        name:'p1',
        initiative:20,
        hitpoints:96
      },
      {
        id:randomId(),
        name:'p2',
        initiative:1,
        hitpoints:20
      },
      {
        id:randomId(),
        name:'p3',
        initiative:14,
        hitpoints:42
      },
      {
        id:randomId(),
        name:'p4',
        initiative:9,
        hitpoints:9
      },
      {
        id:randomId(),
        name:'p5',
        initiative:5,
        hitpoints:22
      },
      {
        id:randomId(),
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
    this.addCard = this.addCard.bind(this);
    this.removeElement = this.removeElement.bind(this);
  }

  updateName(id, e)
  {
    const {value} = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].name = value;
  }

  initiativeUpdate(id, e)
  {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].initiative = Number(value);
  }

  hpUpdate(id, e)
  {
    const { value } = e.target;
    const elements = this.state.elements;
    const index = elements.findIndex(el => el.id === id);
    elements[index].hitpoints = Number(value);
  }

  sortElements()
  {
    const { elements } = this.state;
    this.setState({
    elements: elements.sort((l, r) => r.initiative - l.initiative)
    });
  }

  addCard()
  {
    const { elements } = this.state;
    elements[elements.length] =
    {
      id: randomId(),
      name: 'Player '+ (elements.length + 1),
      initiative: -100,
      hitpoints: 10
    }
    this.sortElements();
  }

  removeElement(id)
  {
    let { elements } = this.state;
    elements = elements.filter(el => el.id !==id);
    this.setState({ elements });
  }

  onClick(e)
  {
    this.sortElements();
  }

  componentWillMount()
  {
    this.sortElements();
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
              name={element.name}
              hitpoints={element.hitpoints}
              onChange={this.updateName}
              initiativeUpdate={this.initiativeUpdate}
              onClick={this.onClick}
              hpUpdate={this.hpUpdate}
              onRemove = {this.removeElement}
              />
          ))}
        <Button
          outline color="primary"
          onClick={e => this.onClick(e)}
          style={{marginLeft:'1%'}}
          >
           Update
         </Button>
         <Button
           outline color="primary"
           onClick={e => this.addCard(e)}
           style={{marginLeft:'1.5%'}}
           >
           Add Card
          </Button>
      </div>
    );
  }
}

export default App;
