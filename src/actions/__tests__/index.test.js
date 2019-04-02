import {saveCommnet} from '../../actions';
import {SAVE_COMMENT} from '../../actions/type';


describe('saveComment',()=>{


    it('has the correct type',()=>{

        const action=saveCommnet();

        expect(action.type).toEqual(SAVE_COMMENT);

    });



    it('has the correct payload',()=>{

        const action=saveCommnet('newComment');

        expect(action.payload).toEqual('newComment');

    });

    
})