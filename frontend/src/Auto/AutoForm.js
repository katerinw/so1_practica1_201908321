import { Button, Form, Segment, Grid} from 'semantic-ui-react'
import React, { useState} from "react";
//import { helpHttp } from "../Helper/helpHttp";

//component

export default function AutoForm(props) {

    /*let urlAddEstudiante = "http://localhost:4200/alumno/add"
    let urlEditEstudiante = "http://localhost:4200/alumno/update"
    let api = helpHttp();

    const [dataAlumno, setDataAlumno] = useState({
        Nombre: "",
        Apellido: "",
        Carnet: "",
        Telefono: "",
        Direccion: "",
        Correo: "",
        Contrasena: ""
    });

    const [dataEditAlumno, setDataEditAlumno] = useState({
        id: props.data?props.data.id_alumno:"",
        carne: props.data?props.data.carne:"",
        nombre: props.data?props.data.nombre:"",
        apellido: props.data?props.data.apellido:"",
        telefono: props.data?props.data.telefono:"",
        direccion: props.data?props.data.direccion:"",
        email: props.data?props.data.email:"",
        contrasenia: props.data?props.data.contrasenia:""
    });

    const handleInputChange = (e) => {
        if(props.tipo === "Agregar alumno"){
            setDataAlumno({
                ...dataAlumno,
                [e.target.name] : e.target.value
            })
        }else{
            setDataEditAlumno({
                ...dataEditAlumno,
                [e.target.name] : e.target.value
            })
        }

        window.location.href = window.location.href;
        // or
        window.location.replace('');
    };

    
    const sendData = (data)=> {
        data.preventDefault();

        if(props.tipo === "Agregar alumno"){
            api.post(urlAddEstudiante, {body:dataAlumno}).then((res) => {
                if(!res.err){
                    setDataAlumno(res)
                    alert("Se agregó el alumno")
                    console.log(res)
                }else{
                    console.log("ERROR")
                }
            })
        }else{
            api.put(urlEditEstudiante, {body:dataEditAlumno}).then((res) => {
                if(!res.err){
                    setDataEditAlumno(res)
                    alert("Se actualizó el alumno")
                    console.log(res)
                }else{
                    console.log("ERROR")
                }
            })
        }
    }*/

    return (
        <div>
            <Grid centered>
                <Grid.Column style={{ maxWidth: 550, marginTop: 20}}>
                    <Segment>
                        <Form>
                            <Form.Field>
                                <Form.Input 
                                    /*name={props.tipo === "Agregar alumno"
                                        ?'Nombre'
                                        :'nombre'}*/
                                    placeholder='Placa' 
                                    //onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    /*name={props.tipo === "Agregar alumno"
                                    ?'Apellido'
                                    :'apellido'}*/  
                                    placeholder='Marca' 
                                    //onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    /*name={props.tipo === "Agregar alumno"
                                    ?'Carnet'
                                    :'carne'}*/ 
                                    placeholder='Modelo' 
                                    //onChange={handleInputChange}
                                    />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    /*name={props.tipo === "Agregar alumno"
                                        ?'Telefono'
                                        :'telefono'}*/
                                    placeholder='Serie' 
                                    //onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Form.Field>
                                <Form.Input 
                                    /*name={props.tipo === "Agregar alumno"
                                    ?'Direccion'
                                    :'direccion'}*/
                                    placeholder='Color' 
                                    //onChange={handleInputChange}
                                />
                            </Form.Field>
                            <Button /*onClick={sendData}*/ fluid primary type="submit">{props.tipo}</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
    )
}