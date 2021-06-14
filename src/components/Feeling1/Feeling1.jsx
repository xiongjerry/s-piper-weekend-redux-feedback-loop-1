import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'

import Button from '@material-ui/core/Button';


const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#ffee58',
            dark: '#c9bs1f',
            light: '#ffff8b',
            contrastText: '#000000',
        },
        secondary: {
            main: '#90a4ae',
            dark: '#62757f',
            light: '#c1d5e0',
            contrastText: '#000000'
        }
    }
})

function Feeling1() {


    const dispatch = useDispatch();
    const history = useHistory();

    const [data, setData] = useState('');

    //handles sending the entered vale to reducer
    const handleSubmit = () => {
        //makes sure a value is selected and provides a prompt 
        //if the user trues to move forward without selecting something
        if (data >= "1" && data <= "5") {
            dispatch({
                type: 'FEELING',
                payload: data
            });
            console.log('sending', data);
            history.push('/understand2')

        } else {
            alert("Please make a selection.");
        }
    }



    return (
        <ThemeProvider theme={theme}>

            <div >
                <h2>How are you feeling today?</h2>

                <form onSubmit={handleSubmit}>
                    {/* Creates a drop down to select a value */}
                    <select name="Feeling" onChange={(event) => setData(event.target.value)}>
                        <option id="blank" >Select</option>
                        <option id="1" value="1" >1</option>
                        <option id="2" value="2">2</option>
                        <option id="3" value="3">3</option>
                        <option id="4" value="4">4</option>
                        <option id="5" value="5">5</option>
                    </select>

                </form>

                <button onClick={handleSubmit} variant="contained" color="primary">
                    Next
            </button>

            </div>
        </ThemeProvider>

    )
}

export default Feeling1;