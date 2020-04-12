import * as authorApi from '../../api/authorApi';


export function getAuthor(authors) {
    return { type: "LOAD_AUTHOR_SUCCESS", authors }
}




export function loadAuthors() {
    return function (dispatch) {
        return authorApi.getAuthors().then(authors=>{
            dispatch(getAuthor(authors));

        }).catch(error=>{
            throw error;
        })

    }
}