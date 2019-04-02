import React from 'react';
import CommentBox from '../CommentBox';
import {mount} from 'enzyme';
import Root from '../../root';



let wrapped;


beforeEach(()=>{
     wrapped=mount(
     <Root>
     <CommentBox/>
     </Root>
    
    );

});


it("has a text area and a button",()=>{

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);

});


describe("the text area",()=>{


    beforeEach(()=>{
        //find and simulate change//
        wrapped.find("textarea").simulate("change",{
            target:{value:"new Comment"}
        });

        //force Update

        wrapped.update();
   
   });

    
    it('has a text area that user can type in ',()=>{
        

        expect(wrapped.find("textarea").prop("value")).toEqual("new Comment")



    });

    it("enter a text in the text area , and then click submit Button ,clear state",()=>{
        expect(wrapped.find("textarea").prop("value")).toEqual("new Comment");
        wrapped.find("form").simulate("submit");
        wrapped.update();
        expect(wrapped.find("textarea").prop("value")).toEqual("");

    });



})




afterEach(()=>{
    wrapped.unmount();
})