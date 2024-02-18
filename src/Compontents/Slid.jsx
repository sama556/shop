
import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const slides = [
  {
    imgPath: 'https://elessi2.myshopify.com/cdn/shop/files/slider01_1512x.jpg?v=1614392000',
    text: 'Autum & Winter 2024',
    buttonText: 'Shop Now',
  },
  {
    imgPath: 'https://elessi2.myshopify.com/cdn/shop/files/slider03_1512x.jpg?v=1614392001',
    text: 'Summer collection 2024',
    buttonText: 'Shop Now',
  },
  {
    imgPath: 'https://elessi2.myshopify.com/cdn/shop/files/slider02_1512x.jpg?v=1614392001',
    text: 'Looking for Best Price',
    buttonText: 'Shop Now',
  },
];

const Slid = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = useState(0);
  const maxSteps = slides.length;

  const handleNext = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);

  const handleBack = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const handleStepChange = (step) => setActiveStep(step);

  return (
    <Box sx={{ width: '100%', flexGrow: 1 }}>
      <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{slides[activeStep].text}</Typography>
      </Paper>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {slides.map((slide, index) => (
          <div key={index}>
            {Math.abs(activeStep - index) <= 2 && (
              <Box sx={{ position: 'relative' }}>
                <img
                  src={slide.imgPath}
                  alt={slide.text}
                  style={{
                    width: '100%',
                    hight: 255,
                  }}
                />
                <Box sx={{ position: 'absolute', top: 150, left: 150 }}>
                <Typography variant="h5" color="#333" sx={{ marginBottom: 5  , letterSpacing: "0.2em",
        fontWeight: "bold",
        lineHeight: 2,}}>{slide.text}</Typography>
                
                  <Button
                    variant="contained"
                    color="primary"
                    style={{
                 
                      backgroundColor: '#f76b6a',
                      color: 'black',
                      alignSelf: 'flex-start',
                      paddingLeft: 38,
                      paddingRight: 38,
                      borderRadius: 1,
                      letterSpacing: 2,
                      fontWeight: 600,
                      minHeight: 40,
                      fontSize: 12,
                      
                    }}
                    onClick={() => console.log('Button clicked')}
                  >
                    {slide.buttonText}
                  </Button>
                </Box>
              </Box>
            )}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
          >
            Next
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
          </Button>
        }
        backButton={
          <Button
            size="small"
            onClick={handleBack}
            disabled={activeStep === 0}
          >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            Back
          </Button>
        }
      />
    </Box>
  );
};

export default Slid;
