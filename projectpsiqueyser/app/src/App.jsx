import React, { useState } from 'react';
import { Container, Grid, TextField, Button, Typography, Box, Paper } from '@mui/material';
import './App.scss';
import { getAnswer } from './callWxflows';
import imagen from "./assets/image.png";
import imagen1 from "./assets/image 1.png";

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await getAnswer(question);
      setAnswer(response || 'No response found');
    } catch (error) {
      console.error('Something went wrong', error);
    } finally {
      setIsLoading(false);
    }
  };

  const missingEnvVariables = !(import.meta.env.VITE_WXFLOWS_ENDPOINT && import.meta.env.VITE_WXFLOWS_APIKEY);

  return (
    <Container maxWidth="lg" className="wrapper">
      <Grid container spacing={2} style={{ display: 'flex' }}>
        <Grid item xs={12} md={6} style={{paddingTop: '5%', display: 'flex', flexDirection: 'column'}}>
          <Grid item xs={12} md={12} style={{ flexGrow: 1}}>
            <Paper elevation={3} style={{ padding: '16px', backgroundColor:'#E7E7E7', height: '100%', borderRadius:'20px'}}>
              <Typography variant="h5" gutterBottom align="center" style={{fontWeight:'bold',  paddingBottom:'5%'}}>
                ¿Qué quieres saber?
              </Typography>
              <Box sx={{ position: 'relative' }}>
                <TextField
                  variant="outlined"
                  fullWidth
                  placeholder="Escribe tu pregunta..."
                  multiline
                  rows={7}
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  sx={{
                    backgroundColor: 'white',
                    borderRadius: '20px',
                    paddingRight: '60px',
                    '& .MuiOutlinedInput-root': {
                      '& fieldset': {
                        border: 'none',
                      },
                    },
                  }}
                />
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleSubmit}
                  disabled={missingEnvVariables}
                  sx={{
                    position: 'absolute',
                    right: 8,
                    top: '80%',
                    transform: 'translateY(-50%)',
                    minWidth: '40px',
                    minHeight: '40px',
                    borderRadius: '50%',
                  }}
                >
                  ➤
                </Button>
              </Box>
            </Paper>
          </Grid>
          <Grid container spacing={2} style={{ marginTop: '16px' }}>
            <Grid item xs={6} md={6}>
              <Box 
                textAlign="center" 
                style={{
                  backgroundColor:'#054774', 
                  borderRadius:'20px', 
                  padding:'10%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  height: '250px' 
                }}
              >
                <img src={imagen} alt="Psique&Ser Logo" style={{maxWidth: '100%', maxHeight: '100%', objectFit: 'contain'}} />
              </Box>
            </Grid>
            <Grid item xs={6} md={6}>
              <Box 
                textAlign="center" 
                style={{
                  backgroundColor:'#054774', 
                  borderRadius:'20px', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  height: '250px' 
                }}
              >
                <img src={imagen1} alt="IBM Logo" style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '20px'}} />
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={12} md={6} style={{paddingTop: '5%', display: 'flex', flexDirection: 'column'}}>
          <Grid item xs={12} md={12} style={{ flexGrow: 1}}>
            <Paper elevation={3} style={{ padding: '16px', backgroundColor:'#C1D0EA', height: '100%', borderRadius:'20px'}}>
              <Typography variant="h5" gutterBottom align="center" style={{fontWeight:'bold', paddingBottom:'5%'}}>
                Respuesta
              </Typography>
              <TextField
                variant="outlined"
                fullWidth
                placeholder={isLoading ? "Cargando..." : "Resultados de tu búsqueda..."}
                multiline
                rows={15}
                value={answer}
                disabled
                sx={{
                  backgroundColor: 'white',
                  borderRadius:'20px',
                  '& .MuiOutlinedInput-root': {
                    '& fieldset': {
                      border: 'none',
                    },
                  },
                }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Box 
              textAlign="center" 
              mt={2} 
              style={{
                backgroundColor:'#7FBC0C', 
                borderRadius:'20px', 
                height:'100px', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center'
              }}
            >
              <Typography variant="h6" gutterBottom align="center" style={{fontWeight:'bold', color:'white'}}>
                Desarrollado por: Sofía Donlucas Bañuelos
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
