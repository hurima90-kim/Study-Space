import { markCompleteActionCreator, markInCompleteActionCreator, deleteTodoActionCreator } from "./actionCreatorType";

export const markComplete: markCompleteActionCreator = (todo) => {
    return {
        type: "MARK_COMPLETE",
        todo,
    };
}

export const markInComplete: markInCompleteActionCreator = (todo) => {
    return {
        type: "MARK_INCOMPLETE",
        todo,
    };
}

export const deleteTodo: deleteTodoActionCreator = (todo) => {
    return {
        type: "DELETE_TODO",
        todo,
    };
}