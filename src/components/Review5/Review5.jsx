import axios from "axios";
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'


function Review5() {

    const feedbackList = useSelector(store => store.feedbackList);
    const history = useHistory();

    console.log(feedbackList);
    //packages up the values to be sent to the database
    const results = {
        feeling: feedbackList[0],
        understanding: feedbackList[1],
        support: feedbackList[2],
        comments: feedbackList[3]
    }
    //makes the POST request and moves to the next section
    const toDataBase = (event) =>{
        event.preventDefault();

        axios.post('/results', results)
        .then(response =>{
            history.push('/thanks6')
        }).catch(err =>{
            console.log('Issue with post', err);
        })
    }
    
    return(
        <div>
            <h2>Review Your Feedback</h2>
                {/* displays the user selected values */}
            <p>Feeling: {feedbackList[0]}</p>
            <p>Understanding: {feedbackList[1]}</p>
            <p>Support: {feedbackList[2]}</p>
            <p>Comments: {feedbackList[3]}</p>

            <button onClick={toDataBase}>Submit</button>


        </div>
    )
}

export default Review5;