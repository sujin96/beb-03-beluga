import { Stack, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Stack sx={{ heigth: 100, width: 1 }}>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: 60, width: 1, background: "#1C69DA" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            marginLeft: 1,
            marginRight: 1,
          }}
        >
          <Button sx={{ color: "white" }}>andressen</Button>
          <Button sx={{ color: "white" }}>coinbase</Button>
          <Button sx={{ color: "white" }}>Combinator</Button>
          <Button sx={{ color: "white" }}>Trust Wallet</Button>
          <Button sx={{ color: "white" }}>Dapper</Button>
          <Button sx={{ color: "white" }}>Quantstamp</Button>
          <Button sx={{ color: "white" }}>FOUNDERS FUND</Button>
          <Button sx={{ color: "white" }}>BLOCKCHAIN</Button>
        </Stack>
      </Stack>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        sx={{ height: 100, width: 1, background: "#1552A8" }}
      >
        <Stack
          direction="row"
          justifyContent="center"
          sx={{ height: 80, width: "60%" }}
        >
          <Stack sx={{ margin: 1, width: 60 }}>
            <img
              src="/Logo(beluga).png
        "
            />
          </Stack>
          <Stack justifyContent="space-around" sx={{ margin: 1, width: "60%" }}>
            <Stack
              alginItems="center"
              sx={{
                height: 15,
                marginLeft: 3,
                marginTop: 1,
                fontSize: 20,
                fontWeight: "bolder",
                color: "white",
              }}
            >
              BelugaSea
            </Stack>
            <Stack
              sx={{
                height: 30,
                alignItems: "start",
                marginRight: 1,
                marginTop: 2,
                color: "white",
              }}
            >
              Clone Opensea project
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent="space-around" sx={{ height: 80, width: "50%" }}>
          <Stack
            sx={{
              marginLeft: 1,
              color: "white",
              fontSize: 20,
              fontWeight: "bolder",
            }}
          >
            Join the community
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-around"
            sx={{ height: 40 }}
          >
            <Button sx={{ background: "#317cec" }}>
              <TwitterIcon sx={{ color: "white" }} />
            </Button>
            <Button sx={{ background: "#317cec" }}>
              <FacebookIcon sx={{ color: "white" }} />
            </Button>
            <Button sx={{ background: "#317cec" }}>
              <InstagramIcon sx={{ color: "white" }} />
            </Button>
            <Button sx={{ background: "#317cec" }}>
              <YouTubeIcon sx={{ color: "white" }} />
            </Button>
            <Button sx={{ background: "#317cec" }}>
              <GitHubIcon sx={{ color: "white" }} />
            </Button>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        justifyContent="center"
        sx={{
          height: 30,
          width: 1,
          background: "#1552A8",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            marginLeft: 2,
            marginRight: 2,
            height: 25,
            borderTop: 2,
            borderColor: "#ffffffa1",
            fontSize: 10,
            alignItems: "center",
          }}
        >
          <Stack sx={{ color: "white" }}>2022.4.8 ~ 2022.4.15</Stack>
          <Stack sx={{ color: "white" }}>Develop by team Beluga</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
