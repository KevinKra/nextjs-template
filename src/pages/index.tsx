import {
  Avatar,
  Button,
  Card,
  CircularProgress,
  Skeleton,
  Slider,
  Stack,
  styled,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import UnitSnapshot from "../components/molecules/UnitSnapshot";

export default function Home() {
  return (
    <Background>
      <UnitSnapshot
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: "water", value: 98, status: "success" }}
        energy={{ type: "energy", value: 85, status: "success" }}
        pressure={{ type: "pressure", value: 25, status: "error" }}
        inError={true}
      />
      <UnitSnapshot
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: "water", value: 98, status: "success" }}
        energy={{ type: "energy", value: 79, status: "success" }}
        pressure={{ type: "pressure", value: 85, status: "success" }}
        inError={false}
      />
      <UnitSnapshot
        loading={true}
        inError={true}
        title="Unit #1"
        uuid="abcd-1234-efgh-5678"
        water={{ type: "water", value: 98, status: "success" }}
        energy={{ type: "energy", value: 79, status: "success" }}
        pressure={{ type: "pressure", value: 85, status: "success" }}
      />
      {/* <Stack spacing={2} direction="row">
        <Button>Hello World</Button>
        <Button variant="text">Test</Button>
        <Button variant="outlined">Click me</Button>
        <Button variant="contained">Greetings</Button>
      </Stack>
      <Card>
        <Typography variant="body1">Hello World</Typography>
      </Card>
      <Stack spacing={2} direction="row">
        <Button variant="text">Test</Button>
        <Button variant="outlined">Click me</Button>
        <Button variant="contained">Greetings</Button>
      </Stack>
      <Slider
        size="small"
        defaultValue={70}
        aria-label="Small"
        valueLabelDisplay="auto"
      />
      <Slider defaultValue={50} aria-label="Default" valueLabelDisplay="auto" />
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <TextField id="filled-basic" label="Filled" variant="filled" />
      <TextField id="standard-basic" label="Standard" variant="standard" />
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
      <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
      <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      <CircularProgress color="success" />
      <Skeleton /> */}
    </Background>
  );
}

const Background = styled("div")`
  /* background-color: #111; */
  height: 100vh;
  width: 100vw;
`;
