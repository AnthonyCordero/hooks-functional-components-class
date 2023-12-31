import Button from '@mui/material/Button';
import { TextField, Switch, FormGroup, FormControlLabel } from '@mui/material';
import { useState } from 'react';


const FormSignUp = (props) => {
    const { handleSubmit } = props;

    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [promo, setPromo] = useState(true);
    const [news, setNews] = useState(true);

    const [errors, setErrors] = useState({
        name: {
            error: false,
            message: 'Must type at least 6 characters',
        },
    });

    const nameValidation = (name) => {
        if (name.length < 6) {
            setErrors({
                name: {
                    error: true,
                    message: 'Must type at least 6 characters',
                }
            })
        } else {
            setErrors({
                name: {
                    error: false,
                    message: '',
                }
            })
        }

    };

    return (
        <form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({
                    name,
                    lastName,
                    email,
                    promo,
                    news,
                });
            }}
        >
            <TextField
                id="name"
                label="Name"
                variant="outlined"
                fullWidth
                required
                margin='normal'
                onChange={(e) => setName(e.target.value)}
                value={name}
                error={errors.name.error}
                helperText={
                    errors.name.error
                        ? errors.name.message
                        : ""
                }
                onBlur={(e) => {
                    setErrors(
                        nameValidation(
                            e.target.value
                        )
                    )
                }}
            />

            <TextField
                id="lastName"
                label="Last Name"
                variant="outlined"
                fullWidth
                required
                margin='normal'
                onChange={(e) => setLastName(e.target.value)}
                value={lastName}
            />
            <TextField
                id="email"
                label="Email"
                variant="outlined"
                fullWidth
                required
                margin='normal'
                onChange={(e) => setEmail(e.target.value)}
                value={email}

            />

            <FormGroup>
                <FormControlLabel
                    control={
                        <Switch
                            checked={promo}
                            onChange={(e) => setPromo(e.target.checked)}
                        />}
                    label="Receive Promos"
                    name="Receive Promos"
                    id="firstInput"
                />
                <FormControlLabel
                    control={
                        <Switch
                            checked={news}
                            onChange={(e) => setNews(e.target.checked)}
                        />}
                    label="News"
                    name="News"
                    id="secondInput"
                />
            </FormGroup>
            <Button type='submit' variant="contained">Register</Button>
        </form >
    )
};

export default FormSignUp;