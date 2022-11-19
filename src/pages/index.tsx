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

export default function Home() {
  return (
    <Background>
      <Card>
        <XButton>Hello World</XButton>
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
      <Tooltip title="Add" arrow>
        <Button>Arrow</Button>
      </Tooltip>
      <CircularProgress color="success" />
      <Skeleton />
      <Skeleton animation="wave" />
      {/* <Popover
        open={true}
        anchorOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        The content of the Popover.
      </Popover> */}
    </Background>
  );
}

const XButton = styled("button")`
  border: 1px solid red;
  padding: 1rem;
  color: white;
  background: #333;
  cursor: pointer;
`;

const Background = styled("div")`
  /* background-color: #111; */
  height: 100vh;
  width: 100vw;
`;
