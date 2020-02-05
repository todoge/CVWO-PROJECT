// Actions for dispatching flash messages to the store 

export default AddFlashMessage = ({message = ""}={})=>{
    return{
        type: "ADD_FLASH",
        message
    };
}

export default ResetFlash = ()=>{
        return{
            type: "REMOVE_ALL_FLASH"
        };
}