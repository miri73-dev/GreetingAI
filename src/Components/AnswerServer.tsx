import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { KeyboardArrowRight } from '@mui/icons-material';

export default function AnswerServer() {
  const [clickButton, setClickButton] = useState({
    numGreeting : 1,
    buttonDisplay : true
  });

  const showAnswerPage = useSelector((state:any) => state.navigationSlice.showAnswerPage);
  const answer = useSelector((state: any) => state.dataServerSlice.data);
  const navigate = useNavigate();
  
  const handleButtonClick = (event: React.MouseEvent<HTMLButtonElement>,) => {
    console.log(`Button clicked!${clickButton.numGreeting}`); // בדוק את הלחיצה
        if (clickButton.numGreeting < 3) {
          setClickButton((prevState) => ({
            ...prevState,
            numGreeting: prevState.numGreeting + 1,
            buttonDisplay: true
          }));
    } else {
        console.log('No more greetings'); // הודעה אם אין עוד ברכות
            setClickButton(prevState => ({
                ...prevState,
        buttonDisplay: false

    }));
    }
  };
  const handleSubmit = async () => {
    navigate('/');
    clickButton.numGreeting=1
    }
    console.log("answer " + answer[clickButton.numGreeting])    

  return (
    <>
    <div>
      {showAnswerPage && (
        <Card variant="outlined" sx={{ maxWidth: 1200, mt: 2 }} style={{borderWidth: '3px', borderColor: 'green'}}>
          <Typography level="h2" fontSize="xl" sx={{ mb: 0.5 }}>
            I will gladly write you a greeting for your event! </Typography>      
          {answer ? (
            <Card variant="outlined" sx={{ maxWidth: 400, mt: 2 }}>
            <Typography>{answer[clickButton.numGreeting]}</Typography>
            </Card>           
          ) : (
            <Typography>I'm on the mend right now, please try again later</Typography>
          )}
          <h5> Offer {clickButton.numGreeting}of 3 </h5>
        </Card>
      )}
      <div style={{height: '15px'}}></div>
      { clickButton.buttonDisplay&&(
        <button
            style={{color:'green', borderColor: 'green'}}
            onClick={handleButtonClick} >
            I want a different blessing
        </button>)
      }
      <div style={{height: '200px'}}></div>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button endDecorator={<KeyboardArrowRight />} color="success" 
            onClick={handleSubmit} >
            to update the request
      </Button>
      </Box>   
    </div>
    </>
  );
}