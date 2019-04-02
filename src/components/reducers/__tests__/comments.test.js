import commentsReducer from '../../reducers/comment';

import {SAVE_COMMENT} from '../../../actions/type';


it('handles actions of type "SAVE_COMMENT" ',()=>{

    const action={
        type:SAVE_COMMENT,
        payload:"New Comment"
    };

    const newState=commentsReducer([],action);

    expect(newState).toEqual(["New Comment"]);

});

it("handle action with unknown type",()=>{
    const newState=commentsReducer([],{});
    expect(newState).toEqual([]);
})