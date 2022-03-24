import { armazenarObject, getLocalStorage } from '@cs/single-utils'
import { useEffect, useState } from 'react';
import { User } from '@cs/single-data'

export default function Root() {

  function handleUser(){
    let userStorage = getLocalStorage('user')
  }

  console.log(armazenarObject())
  console.log("Init statement");
  
  return (
    <>
      <h3>MFE Statement</h3><br></br>
       <button type="buttons" onClick={handleUser}>Recuperar Dados Storage</button> 
    </>
  );
}


