import React from 'react'
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import styleBadge from "assets/jss/material-kit-react/components/badgeStyle.js"
import Badge from 'components/Badge/Badge.js';
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button";

export default function SelectViewFood(props) {
    const useStylesB = makeStyles(styleBadge);
    const classesB = useStylesB();
    console.log(classesB)
    props={
        food:[props.food],
        
    }
    const {...rest}=props

    let listFood= () => {
        let badgeS = [];
        btnS.push(props.food);
        <List>
          {badgeS.map((value, index) => {
            return (
              <ListItem key={index}>
                {" "}
                <Button onClick={props.onclick} color="primary" simple>
                  <Badge color="primary" badgeContent=" " className={classesB}>{value}</Badge>
                </Button>
              </ListItem>
            );
          })}
        </List>;
    }
    return (
        <div>
            <GridContainer>
                <GridItem>
                    <List>
                        
                    </List>
                </GridItem>
            </GridContainer>
            
        </div>
    )
}
