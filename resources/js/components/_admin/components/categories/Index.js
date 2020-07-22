import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useSelector, useDispatch } from 'react-redux'

import { toggleRedux, items, remove, show} from "../../../../actions/admin_categorieAction"
import { categorieReducer } from "../../../../reducers/admin_categorieReducer"

import { Button } from 'reactstrap';


const index = props => {
       
    const categories = useSelector(state => state.categorieReducer);
   
    const dispatch = useDispatch();

    const handleClickShow = id => {
        dispatch(toggleRedux())
        dispatch(show(id))
    } 

    useEffect(() =>{
        dispatch(items())
    }, [] )
 
    return (
        <tbody>
            {categories.data.status === 200 ?
             categories.data.data.data.map((categorie) =>(
                 <tr key={categorie.id}>
                     <th className="pl-4">{categorie.id}</th>
                     <th>{categorie.name}</th>
                     <th>{categorie.slug}</th>
                     <th>
                         <Button onClick={() => handleClickShow(categorie.id)}  className="mr-3" color="primary">modifier</Button>
                         <Button onClick={() => dispatch(remove(categorie.id))} color="danger">Suppimer</Button>
                     </th>
                 </tr>
              )):<tr></tr>} 
            <tr></tr>
        </tbody>

    )
} 
export default  index ;