import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection:'column',
    alignItems: 'center',
    height:'100%',
  },
  link: {
    textDecoration:'none',
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  text: {
    margin: theme.spacing(4.25),
    borderRadius: theme.spacing(.3),
    borderColor: '#ffcc00',
    backgroundColor: 'rgba(255, 255, 255, 0.5)'

  },
  button:{
    width:'100%'
  }
}));

const tiers = [
  {
    title: 'In-House Shoots',
    buttonText: 'Contact for Details',
    description: ['Full Day / Half Day Shoots', 'Single-Shooter / Multi-Shooter', 'Professional Lighting', 'Private Studio'],
    price: '$199.99 - $499.99'
  },
  {
    title: 'Editing & Printing',
    description: [
      'Digital Enhancemt',
      'Color Removal/Add',
      'Prints / Digital Options',
      'Framing / Matting Options',
    ],
     buttonText: 'Contact for Details',
     price: '$59.99 - $399.99'
  },
  {
    title: 'Concierge Services',
    buttonText: 'Contact for Details',
    description: [
      'All Day / Half Day Shoots',
      'Single-Shooter / Multi-Shooter',
      'Servicing All of Palm Beaches',
      'Drone-Photos Avail Upon Request',
    ],
    price: '$299.99 - $899.99'
  },
];


export default function Services() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="md"  component="main" className={classes.root}>
      <Typography variant='h3' component={Box} border={2} padding={2} className={classes.text}>Services</Typography>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card style={{marginTop:20}}>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography variant='h6' align='center'>
                      {tier.price}
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                    <Typography align='center' variant='h6' style={{padding:5}}>
                     {tier.buttonText}
                     </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
};