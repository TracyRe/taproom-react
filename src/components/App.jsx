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
          beername:'Hefeweizen',
          brand:'Widmer Brothers',
          price: 5.5,
          abv: 4.9,
          ibu: 26,
          pintCount: 124
        },
        '1' : {
          img: whiskeybarrel,
          beername:'Pliny the Elder',
          brand:'Russian River',
          price: 6.5,
          abv: 8.0,
          ibu: 92,
          pintCount: 124
        },
        '2' : {
          img: oakbarrel,
          beername:'Miller Lite',
          brand:'Miller',
          price: 4,
          abv: 4.2,
          ibu: 10,
          pintCount: 124
        }
      },

    };
    this.handleSellPint = this.handleSellPint.bind(this);

    this.handleSellGrowler = this.handleSellGrowler.bind(this);

    this.handleReplaceKeg = this.handleReplaceKeg.bind(this);

    this.handleAddNewKeg = this.handleAddNewKeg.bind(this);

    this.handleEditKeg = this.handleEditKeg.bind(this);

    this.handleRemoveKeg = this.handleRemoveKeg.bind(this);
  }

  handleSellPint(newPintCount, kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    if (newMasterKegList[kegId].pintCount > 0) {
      newMasterKegList[kegId].pintCount--;
      this.setState({masterKegList: newMasterKegList});
    }
  }

  handleSellGrowler(newPintCount, kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    if (newMasterKegList[kegId].pintCount > 3) {
      newMasterKegList[kegId].pintCount -=4;
      this.setState({masterKegList: newMasterKegList});
    }
  }

// intended to refill keg
  handleReplaceKeg(newPintCount, kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
      newMasterKegList[kegId].pintCount = 124;
      this.setState({masterKegList: newMasterKegList});
    }

  // adds new keg to list
  handleAddNewKeg(newKeg) {
    let newKegId = v4();
    let newMasterKegList = Object.assign({}, this.state.masterKegList,
      {
        [newKegId]: newKeg
      });
    this.setState({masterKegList: newMasterKegList});
  }

  // intended to replace existing keg in list
  handleEditKeg(kegId, updatedKeg) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    newMasterKegList[kegId] = updatedKeg;
    this.setState({masterKegList: newMasterKegList});
    console.log(kegId);
  }

  // intended to remove existing keg from list
  handleRemoveKeg(kegId) {
    let newMasterKegList = Object.assign({}, this.state.masterKegList);
    delete newMasterKegList[kegId];
    this.setState({masterKegList: newMasterKegList});
      console.log(kegId);
  }


  render() {
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
            onSellPint = {this.handleSellPint}
            onSellGrowler = {this.handleSellGrowler}
            onReplaceKeg = {this.handleReplaceKeg}/>}/>
          <Route path = '/admin' render = {()=><Admin
            kegList = {this.state.masterKegList}
            onEditKeg = {this.handleEditKeg}
            onRemoveKeg = {this.handleRemoveKeg}
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
