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

export default ({ id, onChange, initiative, name, initiativeUpdate, updateName }) =>
<div style={stylediv}>
      <InputGroupAddon
        addonType='prepend'
        >
        Player {id}
       </InputGroupAddon>
      <Input
        type='text'
        placeholder={ name }
        onChange={e => onChange(id, e)}
        />
      <Input
        type='number'
        placeholder={ initiative }
        onChange={e => initiativeUpdate(id, e)}
        />
</div>
