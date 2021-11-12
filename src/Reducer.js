const initialState=0;
const Reducer=(state=initialState,action)=>{
    switch(action.type){
        case 'ICREMENT':
            return state+1;
         case  'DECREMENT' :
             return state-1   ;
     default : return state
    }
}
export default Reducer;