export function setLocalStorage(key, data){
    localStorage.setItem(key,  JSON.stringify(data))
 }

 export function getLocalStorage(key){
    var dadosUser = localStorage.getItem(key);
    return JSON.parse(dadosUser);
 }


 export function armazenarObject(params){
    console.log(params);

   let dados = {
      nome: params && params.nome ? params.nome : "Ricardo",
      perfil: params &&  params.perfil ? params.perfil : "Cliente",
   }

   console.log(dados);

   return dados;
}



 