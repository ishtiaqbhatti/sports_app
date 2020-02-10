import React from "react";
import { Link } from "react-router-dom";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import { makeStyles } from "@material-ui/core/styles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons

// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";

import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardIcon from "components/Card/CardIcon.js";
import CardFooter from "components/Card/CardFooter.js";

import styles from "assets/jss/material-dashboard-react/views/dashboardStyle.js";

const useStyles = makeStyles(styles);

export default function Dashboard() {
  const classes = useStyles();
  return (
    <div>
      <GridContainer>
        <GridItem xs={12} sm={6} md={3}>
          <Link to="/giveyourpate/sfljsdalfksdjaf/sads;dfadsfasdf/asdfdasd">
            <Card>
              <CardHeader color="warning" stats icon>
                <CardIcon color="warning">
                  <Icon>content_copy</Icon>
                </CardIcon>

                <h3 className={classes.cardTitle}>Club Name</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <GridItem>
                    <p>Atheletes - 4</p>
                    <p>Groups - 3</p>
                  </GridItem>
                </div>
              </CardFooter>
            </Card>
          </Link>
        </GridItem>
      </GridContainer>
    </div>
  );
}
