import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { Grid, Row, Col } from 'react-flexbox-grid';



const OperationDetail = ({  operation_id, operation_type }) =>
    (
        <Paper>
    <Grid>
        <Row>
            <Col>
                Operación: { operation_id }
            </Col>
            <Col >
                Tipo operacion : { operation_type }
            </Col>
        </Row>
    </Grid>
        </Paper>
);

OperationDetail.prototype = {
    operation_id: PropTypes.string.isRequired,
    operation_type: PropTypes.string.isRequired,

}


export default OperationDetail;