const intialState=[
    {
      id:1,
      name:'Pitter',
      number:9922112124,
      email:'pitter@gmail.com'
    },
    {
        id:2,
        name:'Smith',
        number:9955664422,
        email:'smith@gmail.com'
    }
];

const contactReducer=(state=intialState,action)=>{
   switch(action.type)
   {
     case "ADD_CONTACT":
        state=[...state,action.payload];
        return state;
     case "UPDATE_CONTACT":
      const updateState=state.map((contact)=>
         contact.id===action.payload.id?action.payload:contact
      );
      state=updateState;
      return state; 
      case "DELETE_CONTACT":
         const deleteContact= state.filter(contact=>contact.id!==action.payload && contact);
          state=deleteContact;
          return state;  
     
     default:
        return state;
   }
}
export default contactReducer;