import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import CarCard from "./CarCard"
import { Card, CardBody, Button, Dropdown, DropdownItem, DropdownMenu, Input, ModalFooter, Modal, Label, ModalHeader, ModalBody, Form, DropdownToggle } from 'reactstrap';
import { FaPlus } from "react-icons/fa";
import { getCars, newCar } from "../../Store/cars/actions"
import { getLocations } from "../../Store/locations/actions"


class LandingPage extends React.Component {
    state = {
        newCarModal: false,
        dropdownOpen: false,
        newCar: {
            location: {
                id: -1
            },
            make: "make",
            model: "model",
            miles: 0,
            photo_url: "http://",
            price: 0,
            VIN: "239819238",
            Year: 2000

        },
        dropdownLocation: "Location"
    }
    async componentDidMount() {
        this.props.getAllCars();
        this.props.getAllLocations();
    }
    dropdownToggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }))
    }

    newCarToggle = () => {
        this.setState(prevState => ({
            newCarModal: !prevState.newCarModal
        }))
    }

    editCar = (e) => {
        if (e.target.name === "location") {
            let newCarEdit = this.state.newCar;
            let newLocation = e.target.innerHTML;
            newCarEdit.location = {
                id: e.target.value
            }
            this.setState(prevState => ({
                ...prevState,
                newCar: newCarEdit,
                dropdownLocation: newLocation
            }))
        }
        else {
            let newCar = this.state.newCar;
            newCar[e.target.name] = e.target.value;
            this.setState(prevState => ({
                ...prevState,
                newCar: newCar
            }))
        }

    }
    persistChanges = () => {
        this.setState(prevState => ({
            newCarModal: !prevState.newCarModal
        }));
        this.props.addOneCar(this.state.newCar);
    }
    render() {
        return (
            <div className="carGrid" >
                <Card>
                    <CardBody>
                        <Button color="warning" onClick={this.newCarToggle}><FaPlus></FaPlus></Button>
                    </CardBody>
                </Card>
                {this.props.myState.cars.cars.map((el) => <CarCard car={el} key={el.id}></CarCard>)}

                <Modal isOpen={this.state.newCarModal} toggle={this.newCarToggle} className={this.props.className}>
                    <ModalHeader toggle={this.newCarToggle}>Add New Car</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.dropdownToggle}>
                                <DropdownToggle caret>
                                    {this.state.dropdownLocation}
                                </DropdownToggle>
                                <DropdownMenu  >
                                    {this.props.myState.locations.locations.map(loc => {
                                        return <DropdownItem key={loc.id} onClick={(e) => this.editCar(e)} name="location" value={loc.id}>{loc.name}</DropdownItem>
                                    })}
                                </DropdownMenu>
                            </Dropdown>
                            <Label>Make</Label>
                            <Input name="make" type="text" value={this.state.newCar.make} onChange={(e) => this.editCar(e)} />
                            <Label>Model</Label>
                            <Input name="model" type="text" value={this.state.newCar.model} onChange={(e) => this.editCar(e)} />
                            <Label>Miles</Label>
                            <Input name="miles" type="number" value={this.state.newCar.miles} onChange={(e) => this.editCar(e)} />
                            <Label>Image URL</Label>
                            <Input name="photo_url" type="text" value={this.state.newCar.photo_url} onChange={(e) => this.editCar(e)} />
                            <Label>Price</Label>
                            <Input name="price" type="number" value={this.state.newCar.price} onChange={(e) => this.editCar(e)} />
                            <Label>VIN</Label>
                            <Input name="vin" type="text" value={this.state.newCar.vin} onChange={(e) => this.editCar(e)} />
                            <Label>Year</Label>
                            <Input name="year" type="number" value={this.state.newCar.year} onChange={(e) => this.editCar(e)} />
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="primary" onClick={this.persistChanges}>Add Car</Button>{' '}
                        <Button color="secondary" onClick={this.newCarToggle}>Cancel</Button>

                    </ModalFooter>
                </Modal>
            </div>
        )
    }




    // 




}


const mapStateToProps = (state, ownProps) => {
    return {
        myState: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getAllCars: function () {
            dispatch(getCars());
        },
        getAllLocations: function () {
            dispatch(getLocations());
        },
        addOneCar: function (body) {
            dispatch(newCar(body));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(LandingPage);