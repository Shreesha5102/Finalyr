import React, { Component } from 'react'
import RideshareContract from '../../../build/contracts/Rideshare.json'
import store from '../../store'
import JoinRideContainer from '../../rideshare/ui/joinride/JoinRideContainer'
import { Link } from 'react-router'
import {RideDetails} from "../details/RideDetails"

const contract = require('truffle-contract')

class RideList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      rideshares: [],
      passengers: [],
      rideshareLoading: true,
      driveracc:"0x0"
    };
    this.getRides = this.getRides.bind(this);
    this.rideshareButton = this.rideshareButton.bind(this);
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

        rideshareInstance.getRideCount.call()
        .then(function(result) {
          console.log('get rideshare count')
          console.log(result)
          let rideshareCount = result["c"][0];

          for (let i = 0; i < rideshareCount; i++) {
            rideshareInstance.getRide.call(i)
            .then(function(result) {
              // If no error, login user.
              console.log('driver account')
              _this.state.driveracc=result[0]
              var tempArr = _this.state.rideshares;
              let tempRideshares = tempArr.concat([result]);
              _this.setState({rideshares: tempRideshares})
              
              // debugger
              // return result;
              // return dispatch(loginUser())
            })
            rideshareInstance.getPassengers.call(i)
            .then(function(result) {
              var tempArr = _this.state.passengers;
              let tempPassengers = tempArr.concat([result]);
              _this.setState({passengers: tempPassengers})
              console.log('test2');
              console.log(_this.state.passengers);
            })
            .catch(function(result) {
              // If error...
            })
            // console.log(_this.state.passengers.at(i))
            // rideshareInstance.getPassengerRideState.call(i,_this.state.passengers.get(i)).then(function(res){
            //   console.log(res)
            // })
          }
          _this.setState({rideshareLoading: false})
        })
      })
    })
    
  }
  check(){
    let web3 = store.getState().web3.web3Instance
    if(this.state.driveracc!==web3.currentProvider.selectedAddress){
     return( <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Ride State</div>
              <Link to={`/details/${this.state.rideshares.length-1}`}>Details</Link>
            </div>
          </li> )
    }
  }
  rideshareButton(condition, bigNum,i) {
    let web3 = store.getState().web3.web3Instance
    if(this.state.driveracc===web3.currentProvider.selectedAddress){
      return (
        <Link to={`/details/${this.state.rideshares.length-1}`}>Confirm passenger</Link>
        )
    }else 
    if (condition) {
      return (
        <button className='btn btn-primary' disabled>Ride Picked Up</button>
      )
    } else {
      return (
        <JoinRideContainer ride_number={i} payment={web3.fromWei(bigNum, "ether" ).toNumber()} destination={this.state.rideshares.at(-1)[4]}/>
      )
    }
  }

  render() {
    let web3 = store.getState().web3.web3Instance
    if (this.state.rideshareLoading) {
      return (
        <p>Loading</p>
      )
    } else {
      if(this.state.rideshares.length!==0   & this.state.rideshares.at(-1)[2]["c"][0]>0){
        
      return(
        <div className="container fluid">
          <div className="row">
            <div className="col">
              <p>
                <h2>Current Ride</h2>
                <div className='row'>
                  <div className='col'>
                    <ul className="list-group">
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Account Address</div>
                          {this.state.rideshares.at(-1)[0]}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Cost</div>
                          {web3.fromWei(this.state.rideshares.at(-1)[1], "ether" ).toNumber()}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Capacity</div>
                          {this.state.rideshares.at(-1)[2]["c"][0]}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">From</div>
                          {this.state.rideshares.at(-1)[3]}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">To</div>
                          {this.state.rideshares.at(-1)[4]}
                        </div>
                      </li>
                      <li className="list-group-item d-flex justify-content-between align-items-start">
                        <div className="ms-2 me-auto">
                          <div className="fw-bold">Confirm </div>
                          {this.rideshareButton(this.state.passengers.indexOf(web3.eth.accounts[0]) === -1, this.state.rideshares.at(-1)[1],this.state.rideshares.length-1)}
                        </div>
                      </li>
                      {
                        this.check()
                        }
                    </ul>
                  </div>
                </div>
              </p>
            </div>
          </div>
          <div className='row'>
            <div className='col'>
              <div className="row">
                <div className='col'>
                  <h3>History</h3>
                </div>
              </div>
              <table className="table table-striped table-hover">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Account Address</th>
                    <th scope="col">Cost</th>
                    <th scope="col">Capacity</th>
                    <th scope="col">From</th>
                    <th scope="col">To</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.state.rideshares.map((ride, i) => {
                      console.log(ride)
                      return(
                        <tr>
                        <td>{i}</td>
                        <td>{ride[0]}</td>
                        <td>{web3.fromWei(ride[1], "ether" ).toNumber()}</td>
                        <td>{ride[2]["c"][0]}</td>
                        <td>{ride[3]}</td>
                        <td>{ride[4]}</td>
                      </tr>
                      )
                    })
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )
                }
                
    }
  }
}

export default RideList
