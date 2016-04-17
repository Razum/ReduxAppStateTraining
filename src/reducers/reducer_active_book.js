/**
 * Created by roman on 17.04.2016.
 */
export default function (state = null, action) {
    switch(action.type) {
        case "BOOK_SELECTED":
            return action.payload;
        default:
            return state;
    }
}