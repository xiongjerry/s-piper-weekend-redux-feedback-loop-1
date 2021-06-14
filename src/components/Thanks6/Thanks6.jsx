import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'

function Thanks6() {

    const dispatch = useDispatch();
    const history = useHistory();

    //clears data from the reducer and brings them back
    const reset = () => {

        dispatch({
            type: 'RESET'
        })

        history.push('/')
    }


    return (
        <div>
            <h1>Thank You!</h1>
            <button onClick={reset}>Leave New Feedback</button>
        </div>
    )
}

export default Thanks6;