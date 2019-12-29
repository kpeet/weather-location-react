import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';
import './styles.css'



const RequesterDetail = () => (
    <Paper >
    <Grid>
        <Row>
            <Col>
                <div>
                    <div className="locationCont"> Datos del Solicitante:  </div>
                </div>
            </Col>
        </Row>
    </Grid>
    </Paper>


);

RequesterDetail.prototype = {
    weekday: PropTypes.string.isRequired,
    hour: PropTypes.string.isRequired,

}


export default RequesterDetail;