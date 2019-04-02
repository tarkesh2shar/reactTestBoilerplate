import React from 'react';
import {mount} from 'enzyme';
import Root from '../root';
import App from '../components/App';
import moxios from 'moxios';


beforeEach(()=>{

    moxios.install();
    moxios.stubRequest('https://jsonplaceholder.typicode.com/comments',{
        status:200,
        response:[{name:"Fetched #1"},{name:"Fetched #2"}]
    })

})

afterEach(()=>{

    moxios.uninstall();

})
it("can show a list of comments and display them!",(done)=>{

    //Attempt to render the entire App

    const wrapped=mount(
        <Root>
            <App/>
        </Root>
    )

    //find the fetchComments button and click it

    wrapped.find('.fetch-comments').simulate('click');


    //introduce a tiny little pause//


     setTimeout(()=>{
        wrapped.update();
        expect(wrapped.find("li").length).toEqual(2);

        done();
        wrapped.unmount();

     },100);


    //Expect to find a list of Commnets!

    

   
})