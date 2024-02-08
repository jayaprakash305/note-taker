
import './App.css';
import { useState } from 'react';

function App() 
{
  const[note, setnote] = useState('');
  const[currentNotes,setCurrentNotes] = useState([]); 
  const handlechange = (event) =>{
    setnote(event.target.value)
  }
    const handelclick =() =>{
      setCurrentNotes([...currentNotes,note]);
      console.log(currentNotes);
    }
  return (
    <div className="App">
      <h2>note making</h2>
     <p>notes taking...</p>
     <div className='formholder'>
      <div  className='mb-3'>
        <label htmlFor='note' className='form-label'>Notes:</label>
        <input type='text' className='form-control' id='note' name='note' placeholder='enter a note here...' onChange={handlechange} value={note}>
          
        </input>
        <br></br>
        <button type="button" class="btn btn-outline-success" onClick={handelclick}>Submit</button>
      </div>
     </div>
    <div className='mb-3'>
      {
        currentNotes.length == 0
        ?
        <p>No notes to display</p>
        :
        <table>
          <thead>
            <th>Note</th>
            </thead>
            <tbody>
              {
                currentNotes.map((n) => (
                  <tr>
                    <td>
                      {n}
                    </td>
                  </tr>
                ))
              }
            </tbody>
        
        </table>
      }

    </div>
    </div>
  );
}

export default App;
