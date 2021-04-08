import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    marginTop: '1.5rem',
    marginLeft: '3rem'
  },
  actions: {
    display: 'contents',
    float: 'right'
  }
});

interface HomeButtonProps {
  title: string;
  description: string;
  imageUrl: any;
  onClick: any;
}

export default function HomeButton(props: HomeButtonProps) {
  const classes = useStyles();
  const { title, description, imageUrl, onClick } = props;
  
  return (
    <Card className={classes.root} onClick={onClick}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Image"
          height="180"
          image={imageUrl}
          title="Image"/>
        <CardContent>
          <Typography gutterBottom variant="h6" component="h6">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}