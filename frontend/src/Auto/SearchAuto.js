import { Icon, Menu, Table, Button, Form, Segment } from 'semantic-ui-react';
import React, { useState, useEffect } from 'react';
import { helpHttp } from "../Helper/helpHttp";

export default function SearchAuto(props) {
    return (
        <Segment>
            <Form>
                <Form.Field>
                    <select
                        name="id_materia"
                    /*onChange={handleInputChange}*/
                    >
                        <option key="1" value="Honda">
                            Honda
                        </option>
                    </select>
                </Form.Field>
                <Button  /*onClick={sendData}*/ fluid primary type="submit">{props.nameButton}</Button>
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