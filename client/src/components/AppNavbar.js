import { render } from 'express/lib/response';
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
import useState from 'react'

const AppNavbar = () => {

    const [isOpen, toggle] = useState(false)

    render = () => {
        <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">Shoppping List</NavbarBrand>
                    <NavbarToggler onClick={toggle()} />
                    <Collapse isOpen={isOpen=!isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/JDixon1995">
                                    GitHub
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    }
}

export default AppNavbar;