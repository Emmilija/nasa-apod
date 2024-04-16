const fetchNasaData = async (date: string): Promise<any> => {
    const url = `https://api.nasa.gov/planetary/apod?api_key=s3ufEmGcyifc2EzL8BlIelU4bRzb6gznmwRqnrTF&date=${date}`;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Failed to fetch data from NASA API');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error('Failed to fetch data from NASA API');
    }
};

export default fetchNasaData;