import React from "react";
import { connect } from "react-redux";
import "../../App.css";
import CarCard from "./CarCard"
import { getOneCar } from "../../Store/cars/actions"

class IndividualCar extends React.Component {
    async componentDidMount() {
        this.props.getCar(this.props.match.params.car_id)
    }
    render() {
        return (
            <div>
                <h1>{this.props.myState.cars.oneCar.year} {this.props.myState.cars.oneCar.make} {this.props.myState.cars.oneCar.model}</h1>
                <img src={this.props.myState.cars.oneCar.photo_url}></img>
                <h2>${this.props.myState.cars.oneCar.price}</h2>
                <h3>{this.props.myState.cars.oneCar.miles} miles</h3>
                {this.props.myState.cars.oneCar.location ? <p>{this.props.myState.cars.oneCar.location.name}</p> : ""}
                <p>VIN: {this.props.myState.cars.oneCar.vin} </p>
                {console.log(this.props.myState.cars.oneCar)}
            </div>

        )
    }
}




const mapStateToProps = (state, ownProps) => {
    return {
        myState: state
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getCar: function (id) {
            dispatch(getOneCar(id));
        }
    };
}


export default connect(mapStateToProps, mapDispatchToProps)(IndividualCar);