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
    const {categories}=props;
    return (
        <divs>
            <Navbar
                color="dark"
                dark
                expand="md"
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
                                Categories
                            </DropdownToggle>
                            <DropdownMenu end>
                                {
                                    categories.map((cat,index)=>
                                        <DropdownItem key={index}>
                                            <Link href='/products/category/[title]' as={`/products/category/${cat}`}><a>{cat}</a></Link>
                                        </DropdownItem>
                                    )
                                }

                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavLink href='http://imomid.ir/'>
                            About Me
                        </NavLink>
                    </Nav>
                    <Link href='/'><a className='nav-link text-secondary'>Login / Sign Up</a></Link>
                </Collapse>
            </Navbar>
        </divs>
    )
}

export default NavbarCustom;