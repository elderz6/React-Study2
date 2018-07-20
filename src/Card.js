import React, { Component } from 'react';
import
{
  Input,
  InputGroupAddon,
} from 'reactstrap';

const stylediv =
{
  width:'33%',
  margin:'1%',
}

export default
({
  id,
  name,
  onChange,
  initiative,
  initiativeUpdate,
  updateName,
  hitpoints,
  hpUpdate
  }) =>

<div style={stylediv}>
      <InputGroupAddon addonType='prepend'>
        Player {id}
       </InputGroupAddon>
      <Input
        type='text'
        placeholder={"Name : " + name }
        onChange={e => onChange(id, e)}
        />
      <Input
        type='number'
        placeholder={"initiative : "+  initiative }
        onChange={e => initiativeUpdate(id, e)}
        />
        <Input
          type='number'
          placeholder={"Hitpoints : "+  hitpoints }
          onChange={e => hpUpdate(id, e)}
        />
</div>
