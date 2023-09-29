import FormSignUp from "./components/FornmSignUp"
import { Container, Typography } from "@mui/material"
function App() {

  return (
    <Container component='section' maxWidth='sm'>
      <Typography align="center" variant="h2" component='h1'>Registration</Typography>
      <FormSignUp />
    </Container>
  )
}

export default App
