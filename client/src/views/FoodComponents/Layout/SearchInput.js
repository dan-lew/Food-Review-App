import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/icons
import LocationOn from "@material-ui/icons/LocationOn";
import LocalDiningIcon from '@material-ui/icons/LocalDining';
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/componentsSections/navbarsStyle.js";
import InputAdornment from "@material-ui/core/InputAdornment";

const useStyles = makeStyles(styles);

export default function SearchInput() {
    const classes = useStyles();
    return (
        <div className={classes.section}>
            <div className={classes.container}>
                <GridContainer>
                    <GridItem xs={10} sm={4} md={4} lg={4}>
                        {/* <Place /> */}
                        <CustomInput
                            labelText="City"
                            id="float"
                            formControlProps={{
                            fullWidth: true,
                           
                            }}
                            inputProps={{
                                endAdornment: (
                                  <InputAdornment position="end">
                                    <LocationOn />
                                  </InputAdornment>
                                )
                              }}
                        />   
                    </GridItem>
                    <GridItem xs={10} sm={4} md={4} lg={4}>
                        <CustomInput
                            labelText="Restaurant"
                            id="float"
                            formControlProps={{
                            fullWidth: true
                        }}
                        inputProps={{
                            endAdornment: (
                              <InputAdornment position="end">
                                <LocalDiningIcon/>
                              </InputAdornment>
                            )
                          }}
                    />
                    </GridItem>
                </GridContainer>
            </div>
        </div>
    )
}
