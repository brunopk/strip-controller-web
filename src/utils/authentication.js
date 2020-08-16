// TODO : Invocar otro endpoint que solo reciba username y password (todavia no esta implementado en backend)
/**
 * @returns {Promise} resuelve en null si no se pudo obtener el token
 */
async function getToken(){
  let token = null;
  try {  
    token = await fetch('http://localhost:8000/o/token/', {
      method: 'POST',
      body: JSON.stringify({
        username: "admin",
        password: "admin",
        client_id: "QhRNkdPf6v5KXkR4huEi7grQoQDLigHcX7sVGKV9",
        client_secret: "1yTSz4BSnl1EjItbNsgrFHvsGfH5s89Cc48P4PJCOZuoeC9f55d082nwsfaz2Iw45vdVRmZM0rr7C1vaLzY17IQ8YKRiB7RsFZVmnqDkfoNsOX5IDBgOwhUuhz4mR6KW",
        grant_type: "password"
      })
    })
  } catch (error){
    console.log('Error en getToken : \n' + error);
  }
  return token;
}

export {getToken};
