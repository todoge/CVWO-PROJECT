// Actions for dispatching flash messages to the store 
export default ({type = "", text = ""}={})=>{
    return{
        type: "ADD_FLASH",
        flash:{
            type,
            text
        }
    };
}