import {
    Collapse, DropdownItem, DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand, NavbarText,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown
} from "reactstrap";
import Link from "next/link";

const NavbarCustom = props => {
    return (
        <divs>
            <Navbar
                color="dark"
                dark
                expand="md"
                full
            >
                <NavbarBrand href="/">
                    Simple Shop
                </NavbarBrand>
                <NavbarToggler onClick={function noRefCheck() {
                }}/>
                <Collapse navbar>
                    <Nav
                        className="me-auto"
                        navbar
                    >
                        <NavItem>
                                <Link href="/"><a className='nav-link'>Home</a></Link>
                        </NavItem>
                        <NavItem>
                                <Link href="/products"><a className='nav-link'>Products</a></Link>
                        </NavItem>
                        <UncontrolledDropdown
                            inNavbar
                            nav
                        >
                            <DropdownToggle
                                caret
                                nav
                            >
                                Options
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                    Option 1
                                </DropdownItem>
                                <DropdownItem>
                                    Option 2
                                </DropdownItem>
                                <DropdownItem divider/>
                                <DropdownItem>
                                    Reset
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                    <NavLink href='http://imomid.ir/'>
                        imomid
                    </NavLink>
                </Collapse>
            </Navbar>
        </divs>
    )
}

export default NavbarCustom;