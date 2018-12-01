import React, { Component } from 'react';
import "./css/style.css"
import Img from 'react-image'

class App extends Component {

  state={
    menu_home: [],
    menu_breakfast: [],
    menu_lunch: [],
    menu_diner: [],
    hot_drinks:[],
    cold_drinks:[],
    stateToRender: 'menu_breakfast'
  }
  componentDidMount(){
    fetch('https://banquetingsheets.herokuapp.com/menu_home',{
      method:'get',
      headers:{'Content-Type':'application/json'}
    }).then(res=>res.json())
    .then(data=> this.setState({menu_home : data.menu_home}));

    fetch('https://banquetingsheets.herokuapp.com/menu_breakfast',{
      method:'get',
      headers:{'Content-Type':'application/json'}
    }).then(res=>res.json())
    .then(data=> this.setState({menu_breakfast : data.menu_breakfast}));

    fetch('https://banquetingsheets.herokuapp.com/menu_lunch',{
      method:'get',
      headers:{'Content-Type':'application/json'}
    }).then(res=>res.json())
    .then(data=> this.setState({menu_lunch : data.menu_lunch}))

    fetch('https://banquetingsheets.herokuapp.com/menu_diner',{
      method:'get',
      headers:{'Content-Type':'application/json'}
    }).then(res=>res.json())
    .then(data=> this.setState({menu_diner : data.menu_diner}))

    fetch('https://banquetingsheets.herokuapp.com/cold_drinks',{
      method:'get',
      headers:{'Content-Type':'application/json'}
    }).then(res=>res.json())
    .then(data=> this.setState({cold_drinks : data.cold_drinks}))

    fetch('https://banquetingsheets.herokuapp.com/hot_drinks',{
      method:'get',
      headers:{'Content-Type':'application/json'}
    }).then(res=>res.json())
    .then(data=> this.setState({hot_drinks : data.hot_drinks}))

  }
  checkState(){

    return this.state.menu_home
  }
  
  render() {
    
    const menu = this.checkState();

    return (
      <div className="App">
        <div className="menu">

          <ul className='menu__categories'>
            <li className='menu__categories-item'>Home</li>
            {menu.map(item=>{
              console.log(menu[0].imgurl)
              return(
                <li className='menu__categories-item' key={item.name} >{item.name}</li>
                )
              })
            }
          </ul>
          
        </div>

        <div className="main">
          <div className="main__description">
            
            {menu.length===0?null:(<ul className="main__description-list">
                                  <Img className="main__description-list-photo" src={menu[0].imgurl} alt='food' />
                                  <li className="main__description-list-name">{menu[0].name}</li>
                                  <li className="main__description-list-description">{menu[0].description}</li>
                                  <li className="main__description-list-calories">{menu[0].calories}</li>
                                  <li className="main__description-list-allergie">{menu[0].allergie}</li>
                                  <li className="main__description-list-price">{menu[0].price}</li>
                                  </ul>)}
            
          </div>
          <div className="main__basket">Basket</div>
        </div>
      </div>
    );
  }
}

export default App;

/*this.state.menu_breakfast.map(item=>{
      return(
        <div key={item.name}>{item.name}</div>
        )
    })*/