import React from 'react';
import { Container, Grid } from '@material-ui/core';
import { List } from './list';
import './style.scss';
import { Content } from './content';

export class Dashboard extends React.Component {
    render() {
        return (
            <div className="dashboard">
                <Container maxWidth="lg">
                    <Grid container>
                        <Grid item xs={12} md={3}>
                            <List />
                        </Grid>
                        <Grid item xs={12} md={1}>
                            <div className="line"></div>
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Content />
                        </Grid>
                    </Grid>
                </Container>
            </div>
        )
    };
}