import React from "react";
import "../../App.css";
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, Input, Label } from 'reactstrap';
import { connect } from "react-redux";
import { updateCar, deleteCar } from "../../Store/cars/actions"
import { FaTrash } from "react-icons/fa";

class CarCard extends React.Component {
    state = {
        modal: false,
        carUpdate: {
            make: this.props.car.make,
            model: this.props.car.model,
            miles: this.props.car.miles,
            price: this.props.car.price,
            photo_url: this.props.car.photo_url,
            vin: this.props.car.vin,
            year: this.props.car.year

        }
    };

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
    }

    editCar = (e) => {
        let newCar = this.state.carUpdate;
        newCar[e.target.name] = e.target.value;
        this.setState(prevState => ({
            ...prevState,
            carUpdate: newCar
        }))
    }
    persistChanges = () => {
        this.setState(prevState => ({
            modal: !prevState.modal
        }));
        this.props.updateOneCar(this.props.car.id, this.state.carUpdate);
    }
    render() {
        const { props } = this;
        return (
            <div key={props.car.id}>
                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                    <ModalHeader toggle={this.toggle}>Edit Car</ModalHeader>
                    <ModalBody>
                        <Form>
                            <Label>Make</Label>
                            <Input name="make" type="text" value={this.state.carUpdate.make} onChange={(e) => this.editCar(e)} />
                            <Label>Model</Label>
                            <Input name="model" type="text" value={this.state.carUpdate.model} onChange={(e) => this.editCar(e)} />
                            <Label>Miles</Label>
                            <Input name="miles" type="number" value={this.state.carUpdate.miles} onChange={(e) => this.editCar(e)} />
                            <Label>Image URL</Label>
                            <Input name="photo_url" type="text" value={this.state.carUpdate.photo_url} onChange={(e) => this.editCar(e)} />
                            <Label>Price</Label>
                            <Input name="price" type="number" value={this.state.carUpdate.price} onChange={(e) => this.editCar(e)} />
                            <Label>VIN</Label>
                            <Input name="vin" type="text" value={this.state.carUpdate.vin} onChange={(e) => this.editCar(e)} />
                            <Label>Year</Label>
                            <Input name="year" type="number" value={this.state.carUpdate.year} onChange={(e) => this.editCar(e)} />
                        </Form>
                    </ModalBody>
                    <ModalFooter>
                        <Button color="warning" onClick={this.persistChanges}>Submit Changes</Button>{' '}
                        <Button color="warning" onClick={this.toggle}>Cancel</Button>

                    </ModalFooter>
                </Modal>

                <Card>
                    <CardImg top width="100%" src={props.car.photo_url} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{props.car.year} {props.car.make} {props.car.model}</CardTitle>
                        <CardSubtitle>${props.car.price}</CardSubtitle>
                        <CardText>{props.car.location.name}</CardText>
                        <CardText>{props.car.miles} miles</CardText>
                        <div className="buttons">
                            <Button color="warning" >See More</Button>
                            <Button color="warning" onClick={this.toggle}>Edit</Button>
                            <Button color="warning" onClick={() => props.deleteOneCar(props.car.id)}><FaTrash></FaTrash></Button>
                        </div>
                    </CardBody>
                </Card>
            </div>
        )
    }


}

const mapDispatchToProps = dispatch => {
    return {
        updateOneCar: function (id, postBody) {
            dispatch(updateCar(id, postBody));
        },
        deleteOneCar: function (id) {
            dispatch(deleteCar(id));
        }
    };
};

export default connect(null, mapDispatchToProps)(CarCard);