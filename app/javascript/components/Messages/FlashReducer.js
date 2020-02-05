const FlashDefault = [];
const FlashReducer = (state=FlashDefault,action)=>{
    switch (action.type){
        case "ADD_FLASH":
            return state.concat(action.addFlashMessage);
        case "REMOVE_ALL_FLASH":
            return state.filter(x=>x);
        default:
            return state;
    }
}

export default FlashReducer;