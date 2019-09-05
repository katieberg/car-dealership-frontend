import React from 'react'
import { Collapse, Nav, NavItem, NavLink, Navbar, NavbarToggler, NavbarBrand, DropdownToggle, UncontrolledDropdown, DropdownMenu, DropdownItem } from 'reactstrap'
import { getLocations } from '../../Store/locations/actions'
import { connect } from 'react-redux'

class NavComponent extends React.Component {
    async componentDidMount() {
        this.props.getAllLocations();
    }
    state = {
        isOpen: false
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <NavbarBrand href="/">Car Dealership</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    See locations
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {this.props.locations.map(location => {
                                        return (
                                            <DropdownItem href={`../${location.id}`} key={location.id}>
                                                {location.name}
                                            </DropdownItem>
                                        )
                                    })}
                                    <DropdownItem divider />
                                    <DropdownItem href="/">
                                        All Locations
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        locations: state.locations.locations
    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        getAllLocations: function () {
            dispatch(getLocations());
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NavComponent);