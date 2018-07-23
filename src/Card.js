import React, { Component } from 'react';
import
{
  Input,
  InputGroupAddon,
} from 'reactstrap';

const stylediv =
{
  width:'100%',
  margin:'1%',
  display:'flex',
  flexDirection:'row',
  flexWrap:'wrap',
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
       <label>Name : { name }
      <Input
        type='text'
        placeholder={"Name"}
        onChange={e => onChange(id, e)}
        /></label>

      <label >Initiative : { initiative }
      <Input
        type='number'
        placeholder="Initiative"
        onChange={e => initiativeUpdate(id, e)}
        /></label>

      <label >Hitpoints : { hitpoints }
        <Input
          type='number'
          placeholder={"Hitpoints"}
          onChange={e => hpUpdate(id, e)}
        /></label>
</div>
