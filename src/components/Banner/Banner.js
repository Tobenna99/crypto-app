import { Container, makeStyles, Typography } from "@material-ui/core";
import Carousel from "./Carousel";

const useStyles = makeStyles((theme) => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
    backgroundSize: "100% auto",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25, 
    justifyContent: "space-around",
  },
  tagline: {
    display: "flex",
    height: "40%",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
  },
  carousel: {
    height: "50%",
    display: "flex",
    alignItems: "center",
  },
}));

function Banner() {
  const classes = useStyles();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{
              color:"#e6e6e6",
              fontWeight: "bold",
              marginBottom: 15,
              fontFamily: "Roboto",
            }}
          >
              Nebula
          </Typography>
          <Typography
            variant="h7"
            style={{
              color: "darkgrey",
              textTransform: "capitalize",
              fontFamily: "Roboto",
            }}
          >
            Keep Track Of Your Favourite Crypto's Right Here
          </Typography>
        </div>
        <Carousel />
      </Container>
    </div>
  );
}

export default Banner;
