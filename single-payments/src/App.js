import { armazenarObject, User } from '@cs/single-utils'
import { useEffect } from 'react';
//import { User } from '@cs/single-data';
import React, { Component } from 'react';


class App extends Component {
  constructor(props){
    super(props);
    this.init();
  }

  /*dados = {
      nome: 'Teste',
      perfil: 'Cliente',
  }*/

  
  // useEffect(() => {
  //   //setLocalStorage('user', dados);
  // }, []);
  
  init(){
   let  dados = {
      nome: 'Teste',
      perfil: 'Cliente',
    }

    armazenarObject(dados)
    
    console.log("Init payments");
  };
  

  render() {
      return(
        <h3>MFE Payments</h3>
      ) 
      
      
  };
}

export default App;
