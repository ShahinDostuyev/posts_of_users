import React from "react";
import { FormGroup, Label, Input } from "reactstrap";
function UserSelection({ users, handleChange }) {
  return (
    <FormGroup>
      <Label for="exampleSelect">Select</Label>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
        onChange={(e) => handleChange(e.target.value)}
      >
        <option value="0">All users</option>
        {users && users.map((item) => {
          return <option value={item.id} key={item.id}>{item.name}</option>;
        })}
      </Input>
    </FormGroup>
  );
}

export default UserSelection;
