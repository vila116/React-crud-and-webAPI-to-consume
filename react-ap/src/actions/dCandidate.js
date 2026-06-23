import api from "./api";
export const ACTION_TYPES={
    CREATE : 'CREATE',
    UPDATE : 'UPDATE',
    DELETE : 'DELETE',
    FETCH_ALL : 'FETCH_ALL'
}
//fucntion to return data from db 
export const fetchAll=()=>dispatch=>{
        //get api to get all records
        api.dCandidate().fetchAll()
        .then(response =>{
            console.log(response);
             dispatch({
            type : ACTION_TYPES.FETCH_ALL,
            payload:response.data
        });
    }).catch(error=>console.log(error))
       
    }
