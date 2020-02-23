import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    width: 100,
    minWidth: 200,
  }
});

export default function FeatureCard(props) {
  const classes = useStyles();
  const {title, value} = props

  return (
    <Card  variant="outlined" className={classes.root}>
      <CardContent>
        <Typography variant="h6" >
          {title}
        </Typography>
        <Typography variant="h2">
          {value}
        </Typography>
      </CardContent>
    </Card>
  );
}
