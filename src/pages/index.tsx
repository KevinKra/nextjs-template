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
    </Background>
  );
}

const Background = styled("div")`
  /* background-color: #111; */
  height: 100vh;
  width: 100vw;
`;
