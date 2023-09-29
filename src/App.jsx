import FormSignUp from "./components/FornmSignUp"
import { Container, Typography } from "@mui/material"

function App() {
  const handleSubmit = (values) => {
    console.log('APPJS', values);
  }

  return (
    <Container component='section' maxWidth='sm'>
      <Typography align="center" variant="h2" component='h1'>Registration</Typography>
      <FormSignUp handleSubmit={handleSubmit} />
    </Container>
  )
}

export default App
