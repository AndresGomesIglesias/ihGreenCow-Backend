import React, { Fragment, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { Table } from 'reactstrap';


import CategorieList from './index';
import CustomModal from './Modal'


const Categorie = props => {






    

     
        
        // const show = async id => {
        //     let result = await  showCategorie(id)
        //     setStoreCategorie(result.data.data)
        // }
    
        
        
        // const update = async (obj) => {
        //     try {
        //         const result = await  updateCategorie(obj)
        //         categories.data.map(categorie => (categorie.id === result.data.data.id ?  setStoreCategorie(      
        //             categorie.id         = categorie.id,
        //             categorie.name       = obj.name,
        //             categorie.status     = categorie.status,
        //             categorie.slug       = obj.slug,
        //             categorie.created_at = categorie.created_at,
        //             categorie.updated_at = categorie.updated_at) : categories.data))
        //     }
        //     catch (error) {
        //         setErrors(error.response.data)
        //     }
        
        // }
       
 
        // const stores = async obj => {
        //     try {
        //         let result = await  addCategories(obj)
        //         categories.data.push(result.data.data)
        //         setStoreCategorie('')
        //     }
        //     catch (error) {
        //         setErrors(error.response.data)
        //     }
        // }
        
        // useEffect(() =>{
        //     // index()
        // }, [])

    return (
        <Fragment> 
        <CustomModal />
         <Table>
             <thead>
                 <tr>
                     <th className="pl-4">#</th>
                     <th>Name</th>
                     <th>slug</th>
                     <th>action</th>
                 </tr>
             </thead>
                 <CategorieList />
         </Table>
     </Fragment>
    )
}
export default Categorie 

