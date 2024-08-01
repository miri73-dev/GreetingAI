import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { useState } from'react';
import { postServices } from '../Services/server';
import { useDispatch } from 'react-redux';
import { postData } from '../Slices/dataServerSlice';
import { setShowAnswerPage } from '../Slices/navigationSlice';
import { useNavigate } from 'react-router-dom';

export default function ButtonSubmit() {
    const [dataToSend] = useState({});
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
          const response = await postServices(dataToSend);
          console.log('הנתונים נשלחו בהצלחה:', response);

          dispatch(postData(response));//שולח את הנתונים 
          dispatch(setShowAnswerPage(true));//מעדכן את מצב ההצגה
          navigate('/answer');

        }
        catch (error) {
          console.error('שגיאה בשליחת הנתונים:', error);
        }
      };

  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button endDecorator={<KeyboardArrowRight />} color="success" onClick={handleSubmit}>
      Send a request
      </Button>
    </Box>
  );
}