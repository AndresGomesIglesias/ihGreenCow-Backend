import ReactDOM from 'react-dom';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Button,Form, Modal, ModalHeader, ModalBody,Label ,Input, ModalFooter, Alert } from 'reactstrap';

import { toggleRedux, store, storeSucces } from "../../../../actions/admin_categorieAction"
import { categorieReducer } from "../../../../reducers/admin_categorieReducer"

import "./categorie.css";

const CustomModal = props => {

 
    // function AddOrUpdateButton()  { 
    //   if (isUpdateOrAdd) { 
    //     return  <Button name="update" onClick={() => update(storeCategorie, event)} color="primary">Modifier</Button>
    //   } 
    //   if (isAdd === 1) {
    //     setStoreCategorie({name: '', slug: ''})
    //     setIsAdd(0)
    // }
    //     return <Button  onClick={() => store(storeCategorie)} color="primary">ajouter</Button>
    // }

  const [hangleChangeCategorie, setHangleChangeCategorie] = useState({ name: '', slug: ''});
 

  const modalRedux    = useSelector(state => state.categorieReducer.modal);
  const messages      = useSelector(state => state.categorieReducer.messages);
  // const errorMessage  = useSelector(state => state.categorieReducer.messages.data.message);
  const isErrors      = useSelector(state => state.categorieReducer.isErrors);
  const categories    = useSelector(state => state.categorieReducer);
  const dispatch      = useDispatch();


  const handleChange = event => {
    const { name, value } = event.target
    setHangleChangeCategorie({ ...hangleChangeCategorie, [name]: value })
  }

  const handleClick = obj => {
    dispatch(store(obj))
      if( hangleChangeCategorie.name === ''){
        setHangleChangeCategorie({ ...hangleChangeCategorie, name: ''})
      }
      else if( (hangleChangeCategorie.slug !== "") && ( hangleChangeCategorie.name !== '')) {
        setHangleChangeCategorie({...hangleChangeCategorie, name: '', slug: '' })
      }
      else if( hangleChangeCategorie.slug === '') {
        setHangleChangeCategorie({ ...hangleChangeCategorie, slug: ''})
      }
  }



    return (
      <div>
        <Button  type="submit" name="add" className="mb-4" color="primary" onClick={() => dispatch(toggleRedux())}>{'Ajouter'}</Button>
        <Modal isOpen={modalRedux}  >
      
          <ModalHeader charCode="">Ajouter une catégorie </ModalHeader>
          <ModalBody>
            
          {messages ? <Alert color="danger">
            <span className="spanError" >{messages.data.message}</span> <br />
            {messages.data.errors.name ? <pre className="preError"> {' - ' + messages.data.errors.name} </pre> : null}
            {messages.data.errors.slug ? <pre className="preError"> {' - ' + messages.data.errors.slug} </pre> : null}
          </Alert> : null}

            <Form >
                <Label for="categorieName">Name</Label>
                <Input onChange={() => handleChange(event)} value={hangleChangeCategorie.name} name='name' id="categorieName" className="mb-4" placeholder="ex: Chaussure" />

                <Label for="categorieSlug">Slug</Label>
                <Input onChange={() => handleChange(event)} value={hangleChangeCategorie.slug} name='slug' id="categorieSlug" className="mb-4" placeholder="ex: chaussure" />
            </Form>
            
          </ModalBody>
          <ModalFooter>
            {/* {AddOrUpdateButton()} */}
            <Button onClick={() =>  handleClick(hangleChangeCategorie)} color="primary">ajouter</Button>
            <Button color="secondary"onClick={() => dispatch(toggleRedux())}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
  
  export default CustomModal;


  