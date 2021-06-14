import {useEffect, useState,} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';



function admin() {

    const dispatch = useDispatch();
    const [results, setResults] = useState ([]);

  
    
    useEffect(() =>{
    getResults();
}, [])


    const getResults = () =>{

        axios.get('/results')
        .then(response =>{
            console.log('Results', response.data);
            setResults(response.data);
        }).catch(err =>{
            console.log('get error', err);
        });
    }

    const handleDelete = (values) =>{
        console.log('delete');
        const lastChance = confirm("Delete this item?")
        if(lastChance){
        axios.delete(`/results/${values.id}`)
        .then((response) => {
            console.log(response);
            getResults();
        }).catch((err) => {
            console.log('delete', err);
        })}
    }

    return(
        <div>
            <h1>Feedback Results!</h1>

            <table>
                <thead>
                <tr>
                    <th>Feeling</th>
                    <th>Comprehension</th>
                    <th>Support</th>
                    <th>Comments</th>
                    <th>Delete</th>
                </tr>
                </thead>
                <tbody>
                {results.map((values, i) =>
                    <tr key = {i}>
                        <td>{values.feeling}</td>
                        <td>{values.understanding}</td>
                        <td>{values.support}</td>
                        <td>{values.comments}</td>
                        <td>
                            <button onClick={ () => handleDelete (values)}>Delete</button>
                        </td>
                    </tr>
                    
                )}
                
                </tbody>
            </table>
        </div>
    )
}

export default admin