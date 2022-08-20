
import { Button,Modal } from 'semantic-ui-react'
import React from 'react'

//component
import AutoForm from './AutoForm';

function AddAuto() {
  const [open, setOpen] = React.useState(false)


  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Crear nuevo auto</Button>}
    >
      <Modal.Header>Agregar un auto</Modal.Header>
      <Modal.Content>
        <AutoForm tipo = "Agregar auto"/>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Salir
        </Button>
      </Modal.Actions>
    </Modal>
  )
}


export default AddAuto