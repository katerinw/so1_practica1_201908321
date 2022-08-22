import { Icon, Menu, Table, Button, Form, Segment } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { helpHttp } from "../Helper/helpHttp";

//componentes
import EditAuto from "./EditAuto";

export default function DataAuto(props) {
    const estiloTabla = {
        position: 'absolute',
        top: '30%',
    };

    const estiloSearch = {
        background: 'white'
    };
    let urlDeleteCar = "http://localhost:8000/delete"
    let urlGetCar = "http://localhost:8000/read"
    let urlAddLog = "http://localhost:8000/log"
    let urlFindMarca = "http://localhost:8000/marca"
    let urlFindModelo = "http://localhost:8000/modelo"
    let urlFindColor = "http://localhost:8000/color"
    let api = helpHttp();
    var today = new Date();

    const [datosCar, setDatosCar] = useState([]);
    const [datosMarca, setDatosMarca] = useState([]);
    const [datosModelo, setDatosModelo] = useState([]);
    const [datosColor, setDatosColor] = useState([]);

    const [dataLog, setDataLog] = useState({
        Func: "Eliminar",
        Time: today.toLocaleString()
    });

    useEffect(() => {
        api.get(urlGetCar).then((res) => {
            if (!res.err) {
                setDatosCar(res)
            } else {
                console.log("ERROR")
            }
        })
    }, [])

    const handleInputChange = (e) => {
        setDatosMarca({
            ...datosMarca,
            [e.target.name]: e.target.value
        })
        setDatosModelo({
            ...datosModelo,
            [e.target.name]: e.target.value
        })
        setDatosColor({
            ...datosColor,
            [e.target.name]: e.target.value
        })
    };

    const getMarca = (data, { value }) => {
        api.post(urlFindMarca, { body: datosMarca}).then((res) => {
            if (!res.err) {
                console.log(res)
                setDatosCar(res)
            } else {
                console.log("ERROR")
            }
        })
    }

    const getModelo = (data, { value }) => {
        api.post(urlFindModelo, { body: datosModelo}).then((res) => {
            if (!res.err) {
                console.log(res)
                setDatosCar(res)
            } else {
                console.log("ERROR")
            }
        })
    }

    const getColor = (data, { value }) => {
        api.post(urlFindColor, { body: datosColor}).then((res) => {
            if (!res.err) {
                console.log(res)
                setDatosCar(res)
            } else {
                console.log("ERROR")
            }
        })
    }

    const sendData = (data, { value }) => {
        data.preventDefault();

        api.del(urlDeleteCar, { body: { placa: value } }).then((res) => {
            if (!res.err) {
                if (res.DeletedCount > 0) {
                    alert("Se eliminó el auto")
                }
                console.log(res)
            } else {
                console.log("ERROR")
            }
        })

        setDataLog({
            ...dataLog,
            Func: "Eliminar",
            Time: today.toLocaleString()
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

        //window.location.href = window.location.href;
        // or
        //window.location.replace('');
    }

    return (
        <div>

            <Menu pointing secondary style={estiloSearch}>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        name='Marca'
                                        placeholder='Marca'
                                        onChange={handleInputChange}
                                    />
                                </Form.Field>
                                <Button onClick={getMarca} fluid primary type="submit">Filtrar</Button>
                            </Form>
                        </Segment>
                    </Menu.Item>
                    <Menu.Item>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        name='Modelo'
                                        placeholder='Modelo'
                                        onChange={handleInputChange}
                                    />
                                </Form.Field>
                                <Button onClick={getModelo} fluid primary type="submit">Filtrar</Button>
                            </Form>
                        </Segment>
                    </Menu.Item>
                    <Menu.Item>
                        <Segment>
                            <Form>
                                <Form.Field>
                                    <Form.Input
                                        name='Color'
                                        placeholder='Color'
                                        onChange={handleInputChange}
                                    />
                                </Form.Field>
                                <Button onClick={getColor} fluid primary type="submit">Filtrar</Button>
                            </Form>
                        </Segment>
                    </Menu.Item>
                </Menu.Menu>
            </Menu>

            <Table style={estiloTabla} celled>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Placa</Table.HeaderCell>
                        <Table.HeaderCell>Marca</Table.HeaderCell>
                        <Table.HeaderCell>Modelo</Table.HeaderCell>
                        <Table.HeaderCell>Serie</Table.HeaderCell>
                        <Table.HeaderCell>Color</Table.HeaderCell>
                        <Table.HeaderCell>Opciones</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {datosCar
                        ? datosCar.map(e =>
                            <Table.Row key={e.Placa}>
                                <Table.Cell>{e.Placa}</Table.Cell>
                                <Table.Cell>{e.Marca}</Table.Cell>
                                <Table.Cell>{e.Modelo}</Table.Cell>
                                <Table.Cell>{e.Serie}</Table.Cell>
                                <Table.Cell>{e.Color}</Table.Cell>
                                <Table.Cell>
                                    <div className='ui two buttons'>
                                        <EditAuto data={e} />
                                        <Button
                                            value={e.Placa}
                                            onClick={sendData}
                                            basic color='red'
                                        >
                                            Eliminar
                                        </Button>
                                    </div>
                                </Table.Cell>
                            </Table.Row>)
                        : null}
                </Table.Body>

                <Table.Footer>
                    <Table.Row>
                        <Table.HeaderCell colSpan='6'>
                            <Menu floated='right' pagination>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron left' />
                                </Menu.Item>
                                <Menu.Item as='a'>1</Menu.Item>
                                <Menu.Item as='a'>2</Menu.Item>
                                <Menu.Item as='a'>3</Menu.Item>
                                <Menu.Item as='a'>4</Menu.Item>
                                <Menu.Item as='a' icon>
                                    <Icon name='chevron right' />
                                </Menu.Item>
                            </Menu>
                        </Table.HeaderCell>
                    </Table.Row>
                </Table.Footer>
            </Table>
        </div>
    )
}