import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import { Button, Input, ModalFooter, Modal, Label, ModalHeader, ModalBody, Form, DropdownToggle } from 'reactstrap';
import { newLoc } from "../../Store/locations/actions"


class NewLocation extends React.Component {

    state = {
        newLocation: {}
    }

    editLocation = (e) => {

        let newLoc = this.state.newLocation;
        newLoc[e.target.name] = e.target.value;
        console.log(newLoc)
        this.setState(prevState => ({
            ...prevState,
            newLocation: newLoc
        }))

    }
    persistChanges = () => {
        this.props.newLocation(this.state.newLocation);
    }
    render() {
        let name = ""
        return (
            <div>

                <Form>
                    <Label>Name</Label>
                    <Input name="name" type="text" value={this.state.newLocation.name} onChange={(e) => this.editLocation(e)} />
                    <Label>Address</Label>
                    <Input name="address" type="text" value={this.state.newLocation.address} onChange={(e) => this.editLocation(e)} />
                    <Button onClick={this.persistChanges} >Make Changes</Button>
                </Form>

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
        newLocation: function (body) {
            dispatch(newLoc(body));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(NewLocation);