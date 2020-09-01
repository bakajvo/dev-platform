import React, {useState} from "react";
import {Container} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import makeStyles from "@material-ui/core/styles/makeStyles";
import {SignUpRequest} from "../../models/request/SignUpRequest";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

interface SignUpProps {
    onSignUp: (user: SignUpRequest) => void;
}

const SignUp: React.FunctionComponent<SignUpProps> = ({onSignUp}) => {

    const classes = useStyles();

    const defaultUser: SignUpRequest = {
        nick: '',
        email: '',
        firstName: '',
        lastName: '',
        password: '',
    };

    const [user, setUser] = useState<SignUpRequest>(defaultUser);

    const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value
        })
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSignUp(user);
    };

    return (
        <Container component="main" maxWidth="xs">
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate onSubmit={onSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={user.firstName}
                                onChange={onChange}
                                autoComplete="firstName"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                value={user.lastName}
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lastName"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={user.nick}
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="nick"
                                label="Nick"
                                name="nick"
                                autoComplete="nick"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={user.email}
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                value={user.password}
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Link href="#" variant="body2">
                                Already have an account? Sign in
                            </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Typography variant="body2" color="textSecondary" align="center">
                    {'Copyright © '}
                    <Link color="inherit" href="https://bakaj.cz/">
                        bakaj.cz
                    </Link>{' '}
                    {new Date().getFullYear()}
                    {'.'}
                </Typography>
            </Box>
        </Container>
    );
};

export default SignUp;