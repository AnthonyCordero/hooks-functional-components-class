import Button from '@mui/material/Button';
import { TextField, Switch, FormGroup, FormControlLabel } from '@mui/material';
import { useState, useEffect } from 'react';


const FormSignUp = () => {

    const [name, setName] = useState('');
    useEffect(() => {
        console.log('name change: ', name)
    }, [name]);

    return (
        <form action="">
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                required
                margin='normal'
                onChange={(e) => {
                    console.log(e.target.value)
                    setName(e.target.value)
                }}
                value={name}
            />
            <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                margin='normal'
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                margin='normal'
            />

            <FormGroup>
                <FormControlLabel control={
                    <Switch defaultChecked />
                } label="Receive Promos" name="Receive Promos" id="firstInput"
                />
                <FormControlLabel control={
                    <Switch defaultChecked />
                } label="News" name="News" id="secondInput"
                />
            </FormGroup>
            <Button variant="contained">Register</Button>
        </form >
    )
};

export default FormSignUp;