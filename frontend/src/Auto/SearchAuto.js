import { Icon, Menu, Table, Button, Form, Segment } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../Helper/helpHttp";

export default function SearchAuto(props) {
    let urlGetCar = "http://localhost:8000/read"
    let api = helpHttp();
    var h = ""
    var Marca = []
    var element = ''


    const [datosCar, setDatosCar] = useState([]);
    const [modeloCar, setModeloCar] = useState([]);
    const [datosColor, setColorCar] = useState([]);

    useEffect(() => {
        api.get(urlGetCar).then((res) => {
            if (!res.err) {
                setDatosCar(res)
                for (var i in datosCar) {
                    h = Marca.find(element => element === datosCar[i].Marca)
                    if (h == undefined)
                        Marca.push(datosCar[i].Marca)
                    console.log(datosCar[i].Marca)
                }
            } else {
                console.log("ERROR")
            }
        })

    }, [])

    const handleInputChange = (e) => {
        for (var i in datosCar) {
            h = Marca.find(element => element === datosCar[i].Marca)
            if (h == undefined)
                Marca.push(datosCar[i].Marca)
            console.log(datosCar[i].Marca)
        }
    };


    return (
        <Segment>
            <Form>
                <Form.Field>
                    <Form.Input
                        name={props.nameButton === "Marca"
                            ? 'Marca'
                            : props.nameButton === "Modelo"
                                ? 'Modelo'
                                : 'Color'}
                        placeholder={props.nameButton === "Marca"
                            ? 'Marca'
                            : props.nameButton === "Modelo"
                                ? 'Modelo'
                                : 'Color'}
                        onChange={handleInputChange}
                    />

                </Form.Field>
                <Button /*onClick={sendData}*/ fluid primary type="submit">Filtrar</Button>
            </Form>
        </Segment>
    )
}
//<Button  /*onClick={sendData}*/ fluid primary type="submit">{props.tipo}</Button>

/*{props.materias.map(e =>
                            <option key={parseInt(e.id_materia, 10)} value={parseInt(e.id_materia, 10)}>
                                {e.nombre}
                            </option>
                        )}*/