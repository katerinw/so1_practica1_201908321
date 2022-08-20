import { Icon, Menu, Table, Button } from 'semantic-ui-react'
import React, { useState, useEffect } from 'react'
import { helpHttp } from "../Helper/helpHttp";

//componentes
import EditAuto from "./EditAuto";

export default function DataAuto(props) {
    const estiloTabla = {
        position: 'absolute',
        width: '1200px',
        top: '30%',
        left: '17%',
    };
    /*let urlGetEstudiante = "http://localhost:4200/alumno/obtenerTodos"
    let urlDeleteEstudiante = "http://localhost:4200/alumno/delete"
    let api = helpHttp();

    const [datosAlumno, setDatosAlumno] = useState([]);

    useEffect(() => {
        api.get(urlGetEstudiante).then((res) => {
            if(!res.err){
                setDatosAlumno(res)
            }else{
                console.log("ERROR")
            }
        })
    }, [])

    const sendData = (data, {value})=> {
        data.preventDefault();

        api.post(urlDeleteEstudiante, {body:{id:value}}).then((res) => {
            if(!res.err){
                alert("Se eliminó el alumno")
                console.log(res)
            }else{
                console.log("ERROR")
            }
        })

        window.location.href = window.location.href;
        // or
        window.location.replace('');
    }*/

    return(
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
                <Table.Row>
                        <Table.Cell>Mai3893jjf</Table.Cell>
                        <Table.Cell>Honda</Table.Cell>
                        <Table.Cell>2011</Table.Cell>
                        <Table.Cell>Element</Table.Cell>
                        <Table.Cell>Azul</Table.Cell>
                        <Table.Cell> 
                        <div className='ui two buttons'>
                            <EditAuto /*data={e}*//> 
                            <Button 
                                /*value = {e.id_alumno}
                                onClick={sendData} */
                                basic color='red'
                            >
                                Eliminar
                            </Button>
                        </div>
                        </Table.Cell>
                </Table.Row>
                <Table.Row>
                        <Table.Cell>Mai3893jjf</Table.Cell>
                        <Table.Cell>Honda</Table.Cell>
                        <Table.Cell>2011</Table.Cell>
                        <Table.Cell>Element</Table.Cell>
                        <Table.Cell>Azul</Table.Cell>
                        <Table.Cell> 
                        <div className='ui two buttons'>
                            <EditAuto /*data={e}*//> 
                            <Button 
                                /*value = {e.id_alumno}
                                onClick={sendData} */
                                basic color='red'
                            >
                                Eliminar
                            </Button>
                        </div>
                        </Table.Cell>
                </Table.Row>
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
    )
}

/*<Table.Body>
                {datosAlumno
                    ?datosAlumno.map(e => 
                    <Table.Row key={e.carne}>
                        <Table.Cell>{e.id_alumno}</Table.Cell>
                        <Table.Cell>{e.nombre}</Table.Cell>
                        <Table.Cell>{e.apellido}</Table.Cell>
                        <Table.Cell>{e.carne}</Table.Cell>
                        <Table.Cell>{e.telefono}</Table.Cell>
                        <Table.Cell>{e.direccion}</Table.Cell>
                        <Table.Cell>{e.email}</Table.Cell>
                        <Table.Cell> 
                        <div className='ui two buttons'>
                            <EditAlumno data={e}/> 
                            <Button 
                                value = {e.id_alumno}
                                onClick={sendData} 
                                basic color='red'
                            >
                                Eliminar
                            </Button>
                        </div>
                    </Table.Cell>
                    </Table.Row>)
                    :null}
            </Table.Body>*/