import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { v4 } from 'uuid';
import Header from './Header';
import Kegs from './Kegs';
import Admin from './Admin';
import Error404 from './Error404';
import bgimg from '../assets/patrick-tomasso-499112-unsplash.jpg';
import fancybarrel from '../assets/fancy-barrel.jpg';
import whiskeybarrel from '../assets/whiskey-barrel.jpg';
import oakbarrel from '../assets/oak-barrel.jpg';

class App extends React.Component  {
  constructor(props) {
    super(props);
    this.state =  {
      masterKegList:   {
        '0' : {
          img: fancybarrel,
          beername:'Fancy Beer',
          brand:'The Fanciest',
          price: 5,
          abv: 4.8,
          pintCount: 124
        },
        '1' : {
          img: whiskeybarrel,
          beername:'Pliny the Elder',
          brand:'Russian River',
          price: 9,
          abv: 5.5,
          pintCount: 124
        },
        '2' : {
          img: oakbarrel,
          beername:'Miller Lite',
          brand:'Miller',
          price: 3,
          abv: 3.4,
          pintCount: 124
        }
      },

    };
    this.handleSellPint = this.handleSellPint.bind(this);

    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);

    this.handleEditKeg = this.handleEditKeg.bind(this);
  }

handleSellPint(kegId) { 
  let newMasterKegList = Object.assign({}, this.state.masterKegList);
  newMasterKegList[kegId].pintCount--;
  this.setState({masterKegList: newMasterKegList}) }

  handleAddNewKeg(newKeg) {
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList,
      {
        [newKegId]: newKeg
      });
    this.setState({masterKegList: newMasterKegList});
  }

  handleEditKeg(kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList,
      {
        [kegId]: kegId
      });
    this.setState({masterKegList: newMasterKegList});
  }

  render() {
    console.log(this.state.masterKegList);
    return (

      <div>
        <style global jsx>{`
            * {
              padding: 0;
              margin: 0;
              box-sizing: border-box;
            }

            h1, h2, h3 {
              font-family: 'BioRhyme Expanded', serif;
              text-align: center;
            }

            a {
              text-decoration: none;
            }
            body {
              background-image: url(${bgimg});
              background-repeat: no-repeat;
              background-size: cover;
              background-color: #0f0e0d;
              width: 100vw;
              height: 100%;
              font-size: 18px;
              font-family: Helvetica, Arial, sans-serif;
            }

            * {
              margin: 0;
              padding: 0;
              box-sizing: border-box;
            }

            button {
              font-size: 1rem;
              text-transform: uppercase;
              letter-spacing: .1rem;
              padding: .25rem 1rem;
              margin: .5rem;
              box-shadow: 1px 1px 0px rgba(20, 20, 20, 0.5);
            }

            input {
              font-size: 1rem;
            }

            `}
        </style>
        <Header/>
        <Switch>
          <Route exact path = '/' render = {()=><Kegs
            kegList = {this.state.masterKegList}
            onSellPint = {this.handleSellPint}/>}/>
          <Route path = '/admin' render = {()=><Admin
            kegList = {this.state.masterKegList}
            onEditKeg = {this.handleEditKeg}
            onAddNewKeg = {this.handleAddNewKeg}/>}/>
          <Route component = {Error404} />
        </Switch>
      </div>

    );
  }
}


export default App;


// newPintCount = {this.state.pintCount}
// onShowPintCount = {this.handleShowPintCount}
// newPintCount = {this.state.pintCount}
