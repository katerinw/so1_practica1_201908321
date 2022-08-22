import { Button, Form, Segment, Grid } from 'semantic-ui-react'
import React, { useState } from "react";
import { helpHttp } from "../Helper/helpHttp";

//component

export default function AutoForm(props) {

    let urlAddCar = "http://localhost:8000/create"
    let urlEditCar = "http://localhost:8000/update"
    let urlAddLog = "http://localhost:8000/log"
    let api = helpHttp();
    var today = new Date();

    const [dataLog, setDataLog] = useState({
        Func: props.tipo === "Agregar auto"?"Registrar":"Editar",
        Time: today.toLocaleString()
    });

    const [dataCar, setDataCar] = useState({
        Placa: "",
        Marca: "",
        Modelo: "",
        Serie: "",
        Color: ""
    });

    const [dataEditCar, setDataEditCar] = useState({
        Placa: props.data ? props.data.Placa:"",
        Marca: props.data ? props.data.Marca : "",
        Modelo: props.data ? props.data.Modelo : "",
        Serie: props.data ? props.data.Serie : "",
        Color: props.data ? props.data.Color : "",
    });

    const handleInputChange = (e) => {
        if (props.tipo === "Agregar auto") {
            setDataCar({
                ...dataCar,
                [e.target.name]: e.target.value
            })
            setDataLog({
                ...dataLog,
                Func: props.tipo === "Agregar auto"?"Registrar":"Editar",
                Time: today.toLocaleString()
            })
        } else {
            setDataEditCar({
                ...dataEditCar,
                [e.target.name]: e.target.value
            })
            setDataLog({
                ...dataLog,
                Func: props.tipo === "Agregar auto"?"Registrar":"Editar",
                Time: today.toLocaleString()
            })
        }

        //window.location.href = window.location.href;
        // or
        //window.location.replace('');
    };


    const sendData = (data) => {
        data.preventDefault();

        if (props.tipo === "Agregar auto") {
            api.post(urlAddCar, { body: dataCar }).then((res) => {
                if (!res.err) {
                    setDataCar(res)
                    alert("Se agregó auto")
                    console.log(res)
                } else {
                    console.log("ERROR")
                }
            })
            api.post(urlAddLog, { body: dataLog }).then((res) => {
                if (!res.err) {
                    setDataLog(res)
                    //alert("Se agregó log")
                    console.log(res)
                } else {
                    console.log("ERROR")
                }
            })
        } else {
            api.put(urlEditCar, { body: dataEditCar }).then((res) => {
                if (!res.err) {
                    setDataEditCar(res)
                    alert("Se actualizó el auto")
                    console.log(res)
                } else {
                    console.log("ERROR")
                }
            })
            api.post(urlAddLog, { body: dataLog }).then((res) => {
                if (!res.err) {
                    setDataLog(res)
                    //alert("Se agregó log")
                    console.log(res)
                } else {
                    console.log("ERROR")
                }
            })
        }
    }

    return (
        <div>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20 }}>
                    <Segment>
                        <Form>
                            {props.tipo === "Agregar auto" ?
                                <Form.Field>
                                    <Form.Input
                                        name={props.tipo === "Agregar auto"
                                            ? 'Placa'
                                            : 'Placa'}
                                        placeholder='Placa'
                                        onChange={handleInputChange}
                                    />
                                </Form.Field> : null}

                            <Form.Field>
                                <Form.Input
                                    name={props.tipo === "Agregar auto"
                                        ? 'Marca'
                                        : 'Marca'}
                                    placeholder='Marca'
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    name={props.tipo === "Agregar auto"
                                        ? 'Modelo'
                                        : 'Modelo'}
                                    placeholder='Modelo'
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    name={props.tipo === "Agregar auto"
                                        ? 'Serie'
                                        : 'Serie'}
                                    placeholder='Serie'
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input
                                    name={props.tipo === "Agregar auto"
                                        ? 'Color'
                                        : 'color'}
                                    placeholder='Color'
                                    onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Button onClick={sendData} fluid primary type="submit">{props.tipo}</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}