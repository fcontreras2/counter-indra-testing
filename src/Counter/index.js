import {
  Button,
  ButtonGroup,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  return (
    <Container maxWidth="xs">
      <Grid container flexDirection={"column"} pt={10}>
        <Typography variant="h4" component={"h1"}>
          App Counter
        </Typography>
        <Typography variant="h6" component={"p"}>
          Contador: {counter}
        </Typography>
      </Grid>
      <Grid container pt={2}>
        <ButtonGroup
          variant="contained"
          aria-label="outlined primary button group"
        >
          <Button  onClick={() => setCounter(counter + 1)}>
            Incrementar
          </Button>
          <Button onClick={() => setCounter(counter - 1)}>
            Decrementar
          </Button>
          <Button
            color="secondary"
            onClick={() => setCounter(0)}
          >
            Reiniciar
          </Button>
        </ButtonGroup>
      </Grid>
    </Container>
  );
};

export default Counter;
