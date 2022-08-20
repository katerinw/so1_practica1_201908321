import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

//component
import AutoForm from './AutoForm';

function EditAuto(props) {
  const [open, setOpen] = React.useState(false)

  const sendData = (data)=> {
    data.preventDefault();
    console.log(props.data)
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button onClick={sendData} basic color='blue'>Ediatr Auto</Button>}
    >
      <Modal.Header>Editar un auto</Modal.Header>
      <Modal.Content>
        <AutoForm tipo="Editar auto" data={props.data}/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default EditAuto