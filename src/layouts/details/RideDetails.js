import React, { Component } from 'react'
import RideshareContract from '../../../build/contracts/Rideshare.json'
import store from '../../store'
import JoinRideContainer from '../../rideshare/ui/joinride/JoinRideContainer'
import ConfirmDriverMetContainer from '../../rideshare/ui/confirmDriverMet/ConfirmDriverMetContainer'
import ConfirmPassengersMetContainer from '../../rideshare/ui/confirmPassengersMet/ConfirmPassengersMetContainer'
import ArrivedContainer from '../../rideshare/ui/arrived/ArrivedContainer'
import { Link } from 'react-router'

const contract = require('truffle-contract')
const s = {0:"initial",1:"driverConfirmed",2:"passengerConfirmed",3:"enRoute",4:"completion",5:"canceled"};
class RideDetails extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ride: [],
      passenger: [],
      isPassenger: false,
      isDriver: false,
      passengerState: '',
      passengerStates: [],
      rideshareLoading: true,
      passengerLoaded: false,
    };
    this.getRides = this.getRides.bind(this);
  }

  componentDidMount() {
    this.getRides();
  }

  getRides() {
    let web3 = store.getState().web3.web3Instance

    const rideshare = contract(RideshareContract)
    rideshare.setProvider(web3.currentProvider)

    // Declaring this for later so we can chain functions on Authentication.
    var rideshareInstance

    var _this = this;

    // Get current ethereum wallet.
    web3.eth.getCoinbase((error, coinbase) => {
      // Log errors, if any.
      if (error) {
        console.error(error);
      }

      rideshare.deployed().then(function(instance) {
        rideshareInstance = instance

        rideshareInstance.getPassengers(_this.props.rideId)
        .then(function(result) {
          _this.setState({passenger: result})
          if (_this.state.passenger.indexOf(web3.eth.accounts[0]) > -1) {
            _this.setState({isPassenger: true});
            rideshareInstance.getPassengerRideState(_this.props.rideId, web3.eth.accounts[0])
            .then(function(result) {
              console.log(result,"this is passenger states");
              result=s[result]
              _this.setState({passengerState: result})
            })
          }
          console.log(result);
          rideshareInstance.getRide(_this.props.rideId)
          .then(function(result) {
            _this.setState({ride: result})
            if (result[0] == web3.eth.accounts[0]) {
              for (var i = 0; i < _this.state.passenger.length; i++) {
                rideshareInstance.getPassengerRideState(_this.props.rideId, _this.state.passenger[i])
                .then(function(result) {
                  var tempArr = _this.state.passengerStates;
                  for(var i=0;i<result.length;i++){
                    result[i][0]=s[result[i][0]]
                  }
                  let tempPassengerStates = tempArr.concat([result]);
                  _this.setState({passengerStates: tempPassengerStates});
                })
                _this.forceUpdate();
              }
            }
            _this.setState({passengerLoaded: true})
            console.log(result);
          })
        })
      })
    })
  }

  render() {
    let web3 = store.getState().web3.web3Instance

    if (this.state.passengerLoaded == false) {
      return (
        <p>Loading... from passenger</p>
      )
    } else {
      let rideId = this.props.rideId;
      let ride = this.state.ride;
      let isPassenger = (this.state.passenger.indexOf(web3.eth.accounts[0]) > -1);
      let isDriver = (ride[0] == web3.eth.accounts[0]);
      let passengerState = this.state.passengerState;
      let passengerStates = this.state.passengerStates;
      let passenger = this.state.passenger;

      if (isPassenger) {
        let confirmDriverMet;
        if (passengerState == "initial") {
          confirmDriverMet = <ConfirmDriverMetContainer ride_number={rideId}/>;
        } else if (passengerState == "enRoute") {
          confirmDriverMet = <ArrivedContainer ride_number={rideId} />
        }

        return(
          <main className="container">
            <div className="row">
              <div className="col text-center">
                <p>You are a passenger</p>

                <p>Current state: {passengerState}</p>

                {confirmDriverMet}
              </div>
            </div>
          </main>
        )
      } else if (isDriver) {
        if (passengerStates.length === 0) {
          return (<p>Loading... from driver</p>)
        } else {
          return(
            <main className="container">
              <div className="row">
                <div className="col text-center">
                  <h2>You are a driver</h2>
                  <p>Passenger States: </p>
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Account Address</th>
                            <th scope="col">Passenger State</th>
                          </tr>
                        </thead>
                        <tbody>
                          {passengerStates.length === 0 ? '' : passengerStates.map((passengerState, i) => {
                            return (
                              <tr>
                                <td>{passenger[i]} </td>
                                <td>{s[passengerState['c'][0]]}</td>
                              </tr> 
                            )
                          })}
                        </tbody>
                      </table>
                  <ConfirmPassengersMetContainer ride_number={rideId} />
                </div>
              </div>
            </main>
          )
        }
      } else {
        return(
          <main className="container">
            <div className="row">
              <div className="col">
                <p>Would you like to join this ride?</p>

                <JoinRideContainer ride_number={rideId} payment={web3.fromWei(ride[1], "ether" ).toNumber()}/>
              </div>
            </div>
          </main>
        )
      }
    }
  }
}

export default RideDetails