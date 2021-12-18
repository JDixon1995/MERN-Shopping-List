import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import { useState } from 'react'

const AppNavbar = () => {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
          <Navbar color="dark" dark expand="lg" className="mb-5">
            <Container>
              <NavbarBrand href="/">ShoppingList</NavbarBrand>
                <NavbarToggler onClick={setIsOpen} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/JDixon1995">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
            </Container>
          </Navbar>
        </div>
    )
}

export default AppNavbar;