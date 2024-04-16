import fetchNasaData from '../data/fetchNasaData';
import { useState } from 'react';

export default function NasaImages() {
    const [date, setDate] = useState<string>(''); // State to store the selected date
    const [data, setData] = useState<any>(null); // State to store the fetched data
    const [error, setError] = useState<string | null>(null); // State to store error message
  
    // const apiKey = process.env.REACT_APP_NASA_API_KEY; 
  
    const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setDate(event.target.value);
    };
  
    const fetchData = async () => {
      try {
        setError(null); 
        const fetchedData = await fetchNasaData(date);
        setData(fetchedData);
      } catch (error) {
        setError('Failed to fetch, please select an earlier date');
      
      }
    };
    return(
<main className='info-container'>
    <div className='date-picker'>

   <input type="date" value={date} onChange={handleDateChange} />
      <button className='submit'type='submit' onClick={fetchData}>Search</button>


    </div>

      {error && <p>{error}</p>}
      {data && (
        <div className='info-api'>
            <div className='image-container'>
            <img src={data.url} alt={data.title} />
            </div>
       <div className='info'>
       <p>Date: {data.date}</p>
          <h2>{data.title}</h2>
          <p>{data.explanation}</p>
       
       </div>
       
        </div>
      )}
</main>
    )
}