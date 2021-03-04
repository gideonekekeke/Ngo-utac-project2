import React, { useState, useEffect } from "react";
import "./event.css";
import { app } from "../Base";
import pic from "../img/cov.jpeg";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: 10,
  },
});

const db = app.firestore();

function Event() {
  const [uploads, setUploads] = useState([]);

  const getData = async () => {
    await db.collection("utac").onSnapshot((snapshot) => {
      const item = [];
      snapshot.forEach((doc) => {
        item.push(doc.data());
      });
      setUploads(item);
    });
  };

  useEffect(() => {
    getData();
  }, []);
  const classes = useStyles();
  return (
    <div
      style={{
        fontFamily: "poppins",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div className="container">
        <div className="body_name">
          <div style={{ color: "#478E02" }}>FEATURE EVENTS</div>
          <div className="feeding">
            SEE HOW UTAC IS HELPING AND FEEEDING THE POOR
          </div>
        </div>
        <div className="body_image">
          <img src={pic} />
        </div>
      </div>
      <div className="upcoming">
        <div
          style={{
            height: "100%",

            display: "flex",
            justifyContent: "space-between",
            margin: "00px 20px 20px 20px",
            alignItems: "center",
          }}
        >
          <div className="up_event">FEATURED EVENTS</div>
          <div className="events">Events</div>
        </div>
      </div>

      <div className="card_holder">
        {uploads.map(({ id, avatar, title, content }) => (
          <Card className={classes.root}>
            <CardActionArea>
              <div
                style={{
                  height: "200px",
                  width: "100%",
                  backgroundColor: "gray",
                }}
              >
                <img style={{ height: "100%", width: "100%" }} src={avatar} />
              </div>
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {title}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Event;
