import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'


function Supported3() {
    
    const dispatch = useDispatch();
    const history = useHistory();


    const [data, setData] = useState('');

    //handles sending the entered vale to reducer
    const handleSubmit = () => {

        if (data >= "1" && data <= "5") {
            dispatch({
                type: 'SUPPORTED',
                payload: data
            });
            console.log('sending', data);
            history.push('/comments4')

        } else {
            alert("Please make a selection.");
        }
    }

    return (
        <div>
            <h2>How well are you being supported?</h2>

            <form onSubmit={handleSubmit}>

                <select name="Understanding" onChange={(event) => setData(event.target.value)}>
                    <option id="blank" >Select</option>
                    <option id="1" value="1" >1</option>
                    <option id="2" value="2">2</option>
                    <option id="3" value="3">3</option>
                    <option id="4" value="4">4</option>
                    <option id="5" value="5">5</option>
                </select>

            </form>

            <button onClick={handleSubmit}>
                Next
            </button>

        </div>
    )
}

export default Supported3;
