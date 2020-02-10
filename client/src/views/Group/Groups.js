import React from "react";
import MaterialTable from "material-table";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList(props) {
  const classes = useStyles();
  const { onClickEdit } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>All Groups</h4>
            <p className={classes.cardCategoryWhite}>
              List of all groups for you clubs
            </p>
          </CardHeader>
          <CardBody>
            <MaterialTable
              title=""
              columns={[
                { title: "Name", field: "name" },
                { title: "Club Associated", field: "club" },
                { title: "Players", field: "players", type: "numeric" },
                { title: "Coach", field: "coach" }
              ]}
              data={[
                {
                  name: "Mehmet",
                  club: "Baran",
                  players: 1987,
                  coach: "Martin"
                }
              ]}
              actions={[
                {
                  icon: "edit",
                  tooltip: "Edit Group",
                  onClick: (event, rowData) => onClickEdit(event, rowData)
                },
                rowData => ({
                  icon: "delete",
                  tooltip: "Delete Group"
                  // onClick: (event, rowData) =>
                  //   confirm("You want to delete " + rowData.name),
                  // disabled: rowData.birthYear < 2000
                })
              ]}
              detailPanel={[
                {
                  tooltip: "Show Name",
                  render: rowData => {
                    return (
                      <div
                        style={{
                          fontSize: 100,
                          textAlign: "center",
                          color: "white",
                          backgroundColor: "#43A047"
                        }}
                      >
                        {rowData.name}
                      </div>
                    );
                  }
                },
                {
                  icon: "account_circle",
                  tooltip: "Show Surname",
                  render: rowData => {
                    return (
                      <div
                        style={{
                          fontSize: 100,
                          textAlign: "center",
                          color: "white",
                          backgroundColor: "#E53935"
                        }}
                      >
                        {rowData.surname}
                      </div>
                    );
                  }
                },
                {
                  icon: "favorite_border",
                  openIcon: "favorite",
                  tooltip: "Show Both",
                  render: rowData => {
                    return (
                      <div
                        style={{
                          fontSize: 100,
                          textAlign: "center",
                          color: "white",
                          backgroundColor: "#FDD835"
                        }}
                      >
                        {rowData.name} {rowData.surname}
                      </div>
                    );
                  }
                }
              ]}
              options={{
                actionsColumnIndex: -1
              }}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
