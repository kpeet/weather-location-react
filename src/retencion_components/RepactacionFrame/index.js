import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { FormControl,TextField, FormHelperText,Input,InputLabel } from '@material-ui/core';

const initial_data ={
    title: "Nueva Repactación",
    operation_detail: "Id de Operacion",
}

class RepactacionFrame extends Component{

    constructor(props){
        super(props)
        const { city }=props;
        //Esta invocacion solo puede ser usada en el constructor
        this.state={
            description: city,
            operation_id:null,
            gloss: null,
            amount: null,

        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        console.log("constructor")

    }

    handleChange(event, targetSetState) {
        console.log("event.target")
        console.log(event.target)
        this.setState({description: event.target.value});
        console.log("this.state.city")
        console.log(this.state.city)
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.description);
        this.setState({description: this.state.description});
        this.setState({operation_id: this.state.operation_id});
        this.setState({amount: this.state.amount});
        console.log("this.state")
        console.log(this.state)
        event.preventDefault();
    }



    componentDidMount(){
        console.log("componentDidMount")
        this.handleUpdateClick()

    }
    componentDidUpdate(prevProps, prevState){
        console.log("componentDidUpdate")


    }
    handleUpdateClick = () =>{
        console.log("Actualizado");
        this.setState ( {
            city: "Otra ciudad mejor",
            data: {wind:"13"},
        });

        console.log(this.state);
        /*
        const api_weather = getUrlWeatherByCity(this.state.city)
        fetch(api_weather).then(resolve =>{
            console.log(resolve)
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);

            console.log(newWeather)
            this.setState({
                data: newWeather
            })




        })
        console.log("Actualizado")
        /* this.setState({
                 city: "Montevideo",
                 data: data2
             }
         );*/
    }


    render() {



        const {city, data}=this.state;

        console.log("render")
        const {onWeatherLocationClick} = this.props

        return(
                <form onSubmit={this.handleSubmit}>
                <Paper >
                    <Grid container >
                        <Grid >
                            <ButtonBase>
                                <img  alt="complex" src="/static/images/grid/complex.jpg" />
                            </ButtonBase>
                        </Grid>
                        <Grid item xs={12} sm container>
                            <Grid item xs container direction="column" spacing={2}>
                                <Grid item xs>
                                    <Typography gutterBottom variant="subtitle1">
                                        { initial_data.title }
                                    </Typography>
                                    <Typography variant="body2" gutterBottom>
                                        <TextField
                                            value={this.state.description}
                                            required
                                            id="filled-required"
                                            label="Descripción"
                                            variant="filled"
                                            onChange={this.handleChange}
                                        />


                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        Monto
                                        <InputLabel htmlFor="my-input">Monto</InputLabel>
                                        <Input id="my-input"
                                               type="number"
                                               value={this.state.amount}
                                               aria-describedby="my-helper-text"
                                               variant="filled"
                                               InputLabelProps={{
                                                   shrink: true,
                                               }}
                                        />
                                    </Typography>

                                    <Typography variant="body2" color="textSecondary">
                                        <TextField
                                            value={this.state.operation_id}
                                            required
                                            id="filled-required"
                                            label="ID Operación"
                                            defaultValue=""
                                            variant="filled"
                                            onChange={this.handleChange}
                                        />
                                    </Typography>
                                    <Typography variant="body2" color="textSecondary">
                                        <TextField
                                            required
                                            id="filled-required"
                                            label="Detalle Glosa"
                                            defaultValue=""
                                            variant="filled"
                                        />
                                    </Typography>


                                </Grid>
                                <Grid item>
                                    <Typography variant="body2" style={{ cursor: 'pointer' }}>
                                        Remove
                                    </Typography>

                                        Boton agregar
                                        <button onClick={this.handleUpdateClick}>Actualizar</button>
                                        <button onClick={this.handleSubmit}>Actualizar2</button>

                                        <input type="submit" value="Submit" />


                                </Grid>
                            </Grid>
                            <Grid item>
                                <Typography variant="subtitle1">Saldo a Solicitante: $19.00</Typography>
                            </Grid>
                        </Grid>

                    </Grid>
                </Paper>
                </form>



        );
    };

}


RepactacionFrame.propTypes ={
    description: PropTypes.string.isRequired,
    onWeatherLocationClick: PropTypes.func
}



export default RepactacionFrame;
