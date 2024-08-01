import axios from 'axios';

export async function postServices(data: any) {
    try {
      const response = await axios.post('http://localhost:9292/gpt', { data });
      return response.data; // החזר את הנתונים מהסרבר
    } catch (error) {
      console.error(error);
      return null; // או כל ערך ברירת מחדל אחר
    }
  }