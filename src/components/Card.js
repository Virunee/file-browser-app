import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

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
      createdAt,
      modifiedAt,
      modifiedBy,
      parentId,
      title,
      children,
      classes,
      img
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