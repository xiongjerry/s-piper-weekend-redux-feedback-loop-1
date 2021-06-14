import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


function Comments4() {
    
    const dispatch = useDispatch();
    const history = useHistory();


    const [data, setData] = useState('');

    //handles sending the entered vale to reducer
    const handleSubmit = () => {

            dispatch({
                type: 'COMMENTS',
                payload: data
            });
            console.log('sending', data);
            //sends them to the next section
            history.push('/review5')

    }

    return (
        <div>
            <h2>Any comments you want to leave?</h2>

            <form onSubmit={handleSubmit}>
            {/* Makes a box for the user to type in */}
            <textarea
            required
            value={data}
            placeholder="Comments"
            name="comments"
            rows="10"
            cols="40"
            onChange={(event) => setData(event.target.value)}></textarea>

            </form>

            <button onClick={handleSubmit}>
                Next
            </button>

        </div>
    )

}

export default Comments4;