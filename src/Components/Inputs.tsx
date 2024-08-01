import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

interface InputData {
  label: string;
  placeholder: string;
  onChange: (value: string) => void
  value?:string
}

export default function Inputs({ onChange, label, placeholder, value }: InputData)
 {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id={"filled-basic"}
      label={label}
      variant="filled"
      placeholder={"For example " + placeholder}
      onChange={(e) => onChange(e.target.value)} 
      value={value}
      />
    </Box>
  );
}