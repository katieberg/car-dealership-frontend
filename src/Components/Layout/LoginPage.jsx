import React from 'react';
import { connect } from "react-redux";
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { getCars } from "../../Store/cars/actions"

const App = props => {
    return (

        <Form>
            <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
            </FormGroup>
            <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                <Button type="submit" href="../">LOG IN</Button>
            </FormGroup>
        </Form>

    );
}

const mapDispatchToProps = dispatch => {
    return {
        getAllCars: function () {
            dispatch(getCars());
        }
    };
};

export default connect(mapDispatchToProps)(App);

