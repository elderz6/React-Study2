import React, { Component } from 'react';
import
{
  Input,
  Button
} from 'reactstrap';

const stylediv =
{
  width:'60%',
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
  hpUpdate,
  onRemove
  }) =>

<div style={stylediv}>
      <Input disabled  value={'Id : '+ id}/>

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

      <Button
        style={{
          width:'10%',
          marginLeft:'5%',
          height:'50px',
          marginTop:'2%'}}
          onClick={() => onRemove(id)}
          >
          X
       </Button>
</div>
