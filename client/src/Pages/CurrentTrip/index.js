import React from "react";
import {
    makeStyles,
    createMuiTheme,
    ThemeProvider,
} from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import AddressForm from './Components/AddressForm';
import PaymentForm from './Components/PaymentForm';
import Review from './Components/Review';

const useStyles = makeStyles((theme) => ({
    jumbotron: {
        background: 'linear-gradient(45deg, #BB86FC 10%, #29025a 90%)',
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "400px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    headline: {
        color: "white",
        fontSize: 100,
        fontWeight: 300,
        letterSpacing: "4px",
        padding: theme.spacing(4, 0, 1),
    },
    carousel: {
        padding: theme.spacing(6, 20),
    },
    mainGrid: {
        marginTop: theme.spacing(3),
    },
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(6),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    stepper: {
        padding: theme.spacing(3, 0, 5),
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));

export default function CurrentTrip() {
    const classes = useStyles();
    const theme = createMuiTheme({
        palette: {
            primary: {
                main: "#BB86FC",
            },
            type: "dark",
        },
    });
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep(activeStep + 1);
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        const steps = ['Shipping address', 'Payment details', 'Review your order'];

        function getStepContent(step) {
            switch (step) {
                case 0:
                    return <AddressForm />;
                case 1:
                    return <PaymentForm />;
                case 2:
                    return <Review />;
                default:
                    throw new Error('Unknown step');
            }
        }
        return (
            <ThemeProvider theme={theme}>
                <React.Fragment>
                    <CssBaseline />
                    {/* Hero unit */}
                    <div className={classes.jumbotron}>
                        <Typography
                            className={classes.headline}
                            component='h1'
                            variant='h2'
                            align='center'
                            color='textPrimary'
                            gutterBottom>
                            Current Trip
            </Typography>
                    </div>
                    <Container maxWidth="lg">
                        <AppBar position="absolute" color="default" className={classes.appBar}>
                            <Toolbar>
                                <Typography variant="h6" color="inherit" noWrap>
                                    Company name
    </Typography>
                            </Toolbar>
                        </AppBar>
                        <main className={classes.layout}>
                            <Paper className={classes.paper}>
                                <Typography component="h1" variant="h4" align="center">
                                    Checkout
    </Typography>
                                <Stepper activeStep={activeStep} className={classes.stepper}>
                                    {steps.map((label) => (
                                        <Step key={label}>
                                            <StepLabel>{label}</StepLabel>
                                        </Step>
                                    ))}
                                </Stepper>
                                <React.Fragment>
                                    {activeStep === steps.length ? (
                                        <React.Fragment>
                                            <Typography variant="h5" gutterBottom>
                                                Thank you for your order.
          </Typography>
                                            <Typography variant="subtitle1">
                                                Your order number is #2001539. We have emailed your order confirmation, and will
                                                send you an update when your order has shipped.
          </Typography>
                                        </React.Fragment>
                                    ) : (
                                            <React.Fragment>
                                                {getStepContent(activeStep)}
                                                <div className={classes.buttons}>
                                                    {activeStep !== 0 && (
                                                        <Button onClick={handleBack} className={classes.button}>
                                                            Back
                                                        </Button>
                                                    )}
                                                    <Button
                                                        variant="contained"
                                                        color="primary"
                                                        onClick={handleNext}
                                                        className={classes.button}
                                                    >
                                                        {activeStep === steps.length - 1 ? 'Place order' : 'Next'}
                                                    </Button>
                                                </div>
                                            </React.Fragment>
                                        )}
                                </React.Fragment>
                            </Paper>
                        </main>
                    </Container>
                </React.Fragment>
            </ThemeProvider>
        )
    }
}