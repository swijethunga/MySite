import React, {useRef} from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'
import { Card, CardContent, Grid, TextField, Typography, Button } from '@material-ui/core';


const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_04jtb0c', 'template_i3ceqk4', form.current, 'CZE2Fn3f4U66MEa0l')
      .then((result) => {
          console.log(result.text);
          Swal.fire({
            icon:'success',
            title:'Message sent sucessfully '
          })
      }, (error) => {
          console.log(error.text);
          Swal.fire({
            icon:'error',
            title:"Something went wrong ",
            text:error.text,
          })
      });
      e.target.reset();
  };
    
    
    return (<div>
        <Typography align='center'>

        </Typography>

        <Card style={{maxWidth:450, margin:"10px auto", padding:"20px 20px"}}>
            <CardContent>

                <Typography gutterBottom variant='h5'>Contact Me</Typography>
                <form ref={form} onSubmit={sendEmail}>
                    <Grid container spacing={1}>
                        <Grid xs={12} item>
                            <TextField label='Name' placeholder='Enter name' variant='outlined' name='user_name' fullWidth required />
                        </Grid>

                        <Grid xs={12} item>
                            <TextField type='email' label='Email' placeholder='Enter email' variant='outlined' name='user_email'  fullWidth required />
                        </Grid>

                        <Grid xs={12} item>
                            <TextField label='Message' multiline rows={4} placeholder='Enter message' variant='outlined' name='message' fullWidth required />
                        </Grid>

                        <Grid xs={12} item>
                            <Button type='submit' variant='contained' color='primary' fullWidth>Send</Button>
                        </Grid>

                    </Grid>
                </form>
            </CardContent>

        </Card>

    </div>)

}
export default Contact;
