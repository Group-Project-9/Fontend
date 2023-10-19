import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import InputAdornment from '@mui/material/InputAdornment';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { styled } from '@mui/material/styles';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const activityType = [
  { label: 'Running' },
  { label: 'Yoga' },
  { label: 'Weight Training' },
  { label: 'Bicycle' },
  { label: 'Swimming' },
];

const Form = () => {
  const [activityData, setActivityData] = useState([]);
  const [imagePreview, setImagePreview] = useState(null);
  const [newActivity, setNewActivity] = useState({
    type: '',
    start: new Date(),
    duration: '',
    location: '',
    distance: '',
    note: '',
    image: null,
  });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
      setNewActivity({ ...newActivity, image: file });
    } else {
      setImagePreview(null);
      setNewActivity({ ...newActivity, image: null });
    }
  };

  const handleSave = () => {
    // Create a new activity and add it to the list
    const activity = {
      type: newActivity.type,
      start: newActivity.start,
      duration: newActivity.duration,
      location: newActivity.location,
      distance: newActivity.distance,
      note: newActivity.note,
      image: newActivity.image ? newActivity.image.name : null, // Include image file name
    };

    setActivityData([...activityData, activity]);

    // Reset the form
    setNewActivity({
      type: '',
      start: new Date(),
      duration: '',
      location: '',
      distance: '',
      note: '',
      image: null,
    });
  };

  const saveToJSON = () => {
    // Create a JSON object containing the saved activities
    const activitiesJSON = JSON.stringify(activityData, null, 2);

    // You can choose to do something with the JSON object here, such as sending it to a server or saving it to a file
    console.log(activitiesJSON);
  };

  return (
    <div className="h-100 h-full flex flex-col rounded-3xl p-10 py-20 bg-slate-100">
      <div className="w-full">
        <h1 className="text-center text-3xl text-black">Create Activity</h1>
      </div>
      <div className="flex w-full h-full py-10">
        <div className="Left w-full gap-4 flex flex-col items-center justify-center border-r border-black">
          <Autocomplete
            disablePortal
            options={activityType}
            sx={{ width: 300}}
            renderInput={(params) => <TextField {...params} label="Activity Type"
            value={newActivity.type}
             />}
          />
          
          <LocalizationProvider  value={newActivity.start} dateAdapter={AdapterDayjs} >
            <DemoContainer components={['DateTimePicker']}
            value={newActivity.start} 
            >
              <DateTimePicker className="w-[300px] mt-20" label="Start" 
              />
            </DemoContainer>
          </LocalizationProvider>
          <TextField className="w-[300px]" id="outlined-basic" label="Duration" variant="outlined" 
            value={newActivity.duration}
          />
          <TextField className="w-[300px]" id="outlined-basic" label="Location" variant="outlined" />
          <TextField
            className="w-[300px]"
            id="outlined-basic"
            label="Distance"
            variant="outlined"
            InputProps={{
              endAdornment: <InputAdornment position="start">KM</InputAdornment>,
            }}
          />
          <TextField className="w-[300px]" id="outlined-basic" label="Note" variant="outlined" />
          <Button className="w-[300px] h-[50px]" variant="contained"  onClick={handleSave} >SAVE</Button>
        </div>


        <div className="Right w-full flex flex-col gap-4 items-center justify-center">
          
          <div
            id="uploadIMG"
            className="w-[350px] h-[350px] bg-sky-400 flex justify-center relative items-center border bg-image rounded-xl overflow-hidden bg-center bg-no-repeat bg-50 bg-contain "
          >
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Selected Image"
                className="w-full h-full absolute object-contain z-10"
              />
            )}
          </div>
            <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
              Upload file
              <VisuallyHiddenInput type="file" className='absolute' onChange={handleImageChange} />
            </Button>
        </div>
      </div>
    </div>
  );
};

export default Form;
