import {FilterValuesType, TodolistType} from '../App';

export type RemoveTodolistAT = {
    type: "REMOVE-TODOLIST"
    todolistId: string
}
export type AddTodolistAT = {
    type: "ADD-TODOLIST"
    title: string
    todolistID: string
}

export type ChangeTodolistTitleAT = {
    type: "CHANGE-TODOLIST-TITLE"
    title: string
    todolistId: string
}
export type ChangeTodolistFilterAT = {
    type: "CHANGE-FILTER-TODOLIST"
    todolistId: string
    filter: FilterValuesType
}

export type ActionType = RemoveTodolistAT | AddTodolistAT | ChangeTodolistTitleAT | ChangeTodolistFilterAT

export const todolistsReducer =
    (todolists: TodolistType[], action: ActionType): TodolistType[] => {
    switch (action.type) {
        case 'REMOVE-TODOLIST':
            return todolists.filter(tl => tl.id != action.todolistId)
        case "ADD-TODOLIST":
            return [ ...todolists, {id: action.todolistID, title: action.title, filter: 'all'}]
        case 'CHANGE-TODOLIST-TITLE':
            const todolist = todolists.find(tl => tl.id === action.todolistId);
            if (todolist) todolist.title = action.title
            return [...todolists]
        case 'CHANGE-FILTER-TODOLIST':
            let todolist1 = todolists.find(tl => tl.id === action.todolistId);
            if (todolist1) todolist1.filter = action.filter
            return [...todolists]
        default:
            return todolists
    }
}

export const RemoveTodolistAC = (todolistId: string): RemoveTodolistAT => {
    return {
        type: 'REMOVE-TODOLIST',
        todolistId
    }
}

export const AddTodolistAC = (title: string, todolistID: string): AddTodolistAT => {
    return {
        type: 'ADD-TODOLIST',
        title,
        todolistID
    }
}

export const ChangeTodolistTitleAC = (title: string, todolistId: string): ChangeTodolistTitleAT => {
    return {
        type: 'CHANGE-TODOLIST-TITLE',
        title,
        todolistId
    }
}

export const ChangeTodolistFilterAC = (todolistId: string, filter: FilterValuesType): ChangeTodolistFilterAT => {
    return {
        type: 'CHANGE-FILTER-TODOLIST',
        todolistId,
        filter
    }
}
