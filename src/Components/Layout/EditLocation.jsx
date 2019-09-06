import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import { Button, Input, ModalFooter, Modal, Label, ModalHeader, ModalBody, Form, DropdownToggle } from 'reactstrap';
import { getOneLocation, updateLocation } from "../../Store/locations/actions"


class EditLocation extends React.Component {

    state = {
        newLocation: {}
    }

    async componentDidMount() {
        this.props.getLocationData(this.props.match.params.location_id)
        this.setState(prevState => {
            return {
                newLocation: this.props.myState.locations.oneLocation
            }
        })
    }

    editLocation = (e) => {

        let newLoc = this.state.newLocation;
        newLoc[e.target.name] = e.target.value;
        this.setState(prevState => ({
            ...prevState,
            newLocation: newLoc
        }))


    }
    persistChanges = () => {
        this.props.editLocation(this.props.match.params.location_id, this.state.newLocation);
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
                    <Button onClick={this.persistChanges}>Make Changes</Button>
                </Form>
            </div >
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
        getLocationData: function (id) {
            dispatch(getOneLocation(id));
        },
        editLocation: function (id, editedLoc) {
            dispatch(updateLocation(id, editedLoc))
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(EditLocation);