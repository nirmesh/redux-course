export default function courseReducer(state=[],action){
    switch(action.type){
        case "CREATE_COURSE":
            //state.push(action.course);
            return [...state,{...action.course}];
        case "LOAD_COURSES_SUCCESS":
            return action.courses;
    
        default:
            return state;
    }
}