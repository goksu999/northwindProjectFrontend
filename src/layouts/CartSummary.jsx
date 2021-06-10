//rfc yap
import React from "react";
import { NavLink } from "react-router-dom";
import { Dropdown, DropdownItem, DropdownMenu } from "semantic-ui-react";

export default function CartSummary() {
  return (
    <div>
      <Dropdown item text="Sepetiniz">
        <DropdownMenu>
          <DropdownItem>Acer Laptop</DropdownItem>
          <DropdownItem>Asus Laptop</DropdownItem>
          <DropdownItem>Dell Laptop</DropdownItem>
          <Dropdown.Divider/> 
          <DropdownItem as={NavLink} to="/cart">Sepete Git</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}
