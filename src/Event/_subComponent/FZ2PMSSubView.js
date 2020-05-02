import React, { Fragment } from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
// material ui icons
import Pageview from "@material-ui/icons/Pageview";
// core components
import GridContainer from "../../_rootComponent/Grid/GridContainer";
import GridItem from "../../_rootComponent/Grid/GridItem";
// style for this view
import formStyle from "../../_rootAsset/jss/formStyle";
// other

const useFormStyle = makeStyles(formStyle);

const FZ2PMSSubView = props => {
  const { event } = props;
  const classes = { ...useFormStyle() };

  React.useEffect(() => {
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      <GridContainer>
        <GridItem>
          <p className={classes.title}>Event Details</p>
          <div className={classes.iconWrapper}>
            <Pageview fontSize="small" />
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer>
        <GridItem lg={12}>
          <div className={classes.subTitleWrapper}>
            <Typography className={classes.subTitle}>Event Overview</Typography>
          </div>
        </GridItem>
      </GridContainer>
      <GridContainer className={classes.childContainer}>
        <GridItem lg={12}>
          <GridContainer className={classes.gridAlternateBgColor}>
            <GridItem lg={2}>
              <Typography className={classes.labelHorizontalView}>
                Event ID:
              </Typography>
            </GridItem>
            <GridItem lg={10}>
              <p className={classes.viewText}>{event.id}</p>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem lg={2}>
              <Typography className={classes.labelHorizontalView}>
                Event Name:
              </Typography>
            </GridItem>
            <GridItem lg={10}>
              <p className={classes.viewText}>{event.name}</p>
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem lg={2}>
              <Typography className={classes.labelHorizontalView}>
                Organizer:
              </Typography>
            </GridItem>
            <GridItem lg={10}>
              <p className={classes.viewText}>{event.organizer}</p>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
    </Fragment>
  );
};

FZ2PMSSubView.propTypes = {
  history: PropTypes.object,
  dispatchValidate: PropTypes.func,
  event: PropTypes.object,
  children: PropTypes.node
};

export default FZ2PMSSubView;