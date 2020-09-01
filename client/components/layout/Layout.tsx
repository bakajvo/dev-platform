import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import {createStyles, makeStyles, Theme} from '@material-ui/core/styles';
import LeftMenu from "./LeftMenu";
import TopMenu from "./TopMenu";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
        },
        content: {
            flexGrow: 1,
        },
        toolbar: theme.mixins.toolbar,
    }),
);

interface LayoutProps {
    container?: Element;
}

const Layout: React.FC<LayoutProps> = ({container, children}) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <TopMenu />
            <LeftMenu container={container}/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                {children}
            </main>
        </div>
    );
};

export default Layout;