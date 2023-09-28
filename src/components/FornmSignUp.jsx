import Button from '@mui/material/Button';

const FormSignUp = () => {
    return (
        <form action="">
            <label htmlFor="firstInput">Name</label>
            <input type="text" name="Name" id="firstInput" />

            <label htmlFor="secondInput">Last Name</label>
            <input type="text" name="Last Name" id="secondInput" />

            <label htmlFor="tirdInput">E-mail</label>
            <input type="email" name="E-mail" id="tirdInput" />

            <label htmlFor="fourthInput">Get Promos</label>
            <input type="checkbox" name="Get Promos" id="fourthInput" />

            <label htmlFor="fifthInput">News</label>
            <input type="checkbox" name="News" id="fifthInput" />

            <Button variant="contained">Register</Button>
        </form>
    )
};

export default FormSignUp;