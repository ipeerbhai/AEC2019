import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserAlt } from '@fortawesome/pro-regular-svg-icons';
import { faUsdCircle } from '@fortawesome/pro-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './Menu.css';

library.add(faUserAlt, faUsdCircle, faShoppingCart);


//----------------------------------------------------------------------------------
// Component:
//  This component creates the top nav menu that we can use in any "page".
//  It manages state on its own.
class Menu extends Component {
    //----------------------------------------------------------------------------------
    // Constructor:
    //  We're using the constructor from the example code.
    //  It binds the toggle handler to this instance, and it sets a default state for
    //  the toggle.
    constructor(props) {
        super(props);
        let _renderMenu = (props.RenderMenu) ? true : false;

        this.toggleHamburger =
            this.toggleHamburger.bind(this);
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseExit = this.mouseExit.bind(this);
        this.state = {
            hamburgerOpen: false,
            productsOpen: false,
            servicesOpen: false,
            accountOpen: false,
            renderMenu: _renderMenu
        };
    }

    //----------------------------------------------------------------------------------
    // Helper:
    //  This helper helps the mouse/touch event handler for opening subwindows.
    menuDropDownToggleHelper(target, update) {
        let newState = { ...this.state };
        switch (target) {
            case 'drpProducts':
                newState.productsOpen = update;
                break;
            case 'drpServices':
                newState.servicesOpen = update;
                break;
            case 'drpAccount':
                newState.accountOpen = update;
                break;
            default:
                break;
        }
        this.setState(newState)
    }

    //----------------------------------------------------------------------------------
    // Handler:
    //  This event handler is called when someone clicks the toggle "hamburger"
    //  to flip to the opposite state of either opened or closed.
    toggleHamburger() {
        let newState = { ...this.state };
        newState.hamburgerOpen = !newState.hamburgerOpen;
        this.setState(newState);
    }

    //----------------------------------------------------------------------------------
    // Handler:
    //  This handler is for mouse hovers of DropDownToggles
    mouseEnter = (event) => {
        let eventID = event.currentTarget.id;
        this.menuDropDownToggleHelper(eventID, true)
    }

    //----------------------------------------------------------------------------------
    // Handler:
    //  This handler is for mouse exits of DropDownToggles
    mouseExit = (event) => {
        let eventID = event.currentTarget.id;
        this.menuDropDownToggleHelper(eventID, false)
    }

    //----------------------------------------------------------------------------------
    // Handler:
    //  This handler is for toggles of  DropDownToggles
    onDropDownToggle = (target, currentState) => {
        this.menuDropDownToggleHelper(target, !currentState);
    }

    //----------------------------------------------------------------------------------
    // Delegate:
    //  This react delegate is always called when react decides to re-render a component.
    render() {
        let menu = null;
        if (this.state.renderMenu) {
            menu = (
                <React.Fragment>
                    <NavbarToggler onClick={this.toggleHamburger} />
                    <Collapse isOpen={this.state.hamburgerOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar id="drpProducts" isOpen={this.state.productsOpen} onMouseOver={this.mouseEnter} onMouseLeave={this.mouseExit} toggle={() => { this.onDropDownToggle("drpProducts", this.state.productsOpen) }}>
                                <DropdownToggle nav caret >
                                    Edition
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <a href="/enterprise/dashboard/" className="tp-nav" >Enterprise</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="/personal/settings" className="tp-nav" >Personal</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                            <UncontrolledDropdown nav inNavbar id="drpServices" isOpen={this.state.servicesOpen} onMouseOver={this.mouseEnter} onMouseLeave={this.mouseExit} toggle={() => { this.onDropDownToggle("drpServices", this.state.servicesOpen) }}>
                                <DropdownToggle nav caret >
                                    Services
                            </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <a href="/services/service1/" className="tp-nav" >Service1</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="/services/service2" className="tp-nav" >Service2</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                                <NavLink href="/ShoppingCart"><FontAwesomeIcon icon={faShoppingCart} size="lg" transform={{ rotate: 0 }} alt="Shopping Cart" /></NavLink>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar id="drpAccount" isOpen={this.state.accountOpen} onMouseOver={this.mouseEnter} onMouseLeave={this.mouseExit} toggle={() => { this.onDropDownToggle("drpAccount", this.state.accountOpen) }}>
                                <DropdownToggle nav caret >
                                    <FontAwesomeIcon icon={faUserAlt} alt="Account" />
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        <a href="/account/register/" className="tp-nav" >Register New Account</a>
                                    </DropdownItem>
                                    <DropdownItem>
                                        <a href="/account/login/" className="tp-nav" >Login</a>
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </React.Fragment>
            );

        }
        return (
            <React.Fragment>
                <Navbar color="dark" dark expand="md" className="fixed-top">
                    <NavbarBrand href="/" className="text-white"><img src="/static/img/mediumLogo.png" className="img-fluid thumbnail-sm" alt="Company Logo" />Accidon't</NavbarBrand>
                    {menu}
                </Navbar>
                <div style={{clear:"both", paddingBottom:"0.33rem"}}></div>
            </React.Fragment>
        );
    }
}

export default Menu;