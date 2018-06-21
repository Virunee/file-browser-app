import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: 345,
    backgroundColor: "white",
    padding: '10px',
  },
  media: {
    maxWidth: 300,
    paddingTop: '5%', // 16:9
  },
  maxWidth: 345,
};

function SimpleMediaCard(props) {
    const { 
      title,
      classes,
    } = props;
    return (
      <div className={classes.card}>
            <Typography gutterBottom variant="headline" component="h2">
              {title}
            </Typography>
      </div>
    );
  }

  SimpleMediaCard.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
  export default withStyles(styles)(SimpleMediaCard);