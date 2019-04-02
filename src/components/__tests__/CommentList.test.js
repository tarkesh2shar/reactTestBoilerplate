import React from 'react';
import {mount} from 'enzyme';


import CommentList from '../../components/CommentList';
import Root from '../../root';



let wrapped;

beforeEach(()=>{

    const initialState={
        comments:['Comment 1',"Comment 2"]
    }

    wrapped=mount(

        <Root x={initialState}>
            <CommentList/>
        </Root>
        );

});

it('creates 1 li per comment !',()=>{

    expect(wrapped.find('li').length).toEqual(2);

});

it('shows the text for each li',()=>{

    expect(wrapped.render().text()).toContain("Comment 1");
    expect(wrapped.render().text()).toContain("Comment 2");

})


