import { UserDetails } from 'src/app/add-user/add-user.component';
import { Action } from '@ngrx/store';

export const ADD_USER = 'ADD_USER';

export function addUserReducer(state: UserDetails[] = [], action: any) {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload];
        default:
            return state;
    }
}
