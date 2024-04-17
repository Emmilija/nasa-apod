import fetchNasaData from '../data/fetchNasaData';
import { useState } from 'react';

export default function NasaImages() {
    const [date, setDate] = useState<string>(''); 
    const [data, setData] = useState<any>(null); 
    const [error, setError] = useState<string | null>(null); 
  
    // const apiKey = process.env.REACT_APP_NASA_API_KEY; 
  
    const handleDateChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedDate = event.target.value
      setDate(selectedDate);
      await fetchData(selectedDate)
    };
  console.log(date)




    const fetchData = async (selectedDate : string) => {
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
      <button className='submit'type='submit' onClick={() => fetchData(date)}>Search</button>


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