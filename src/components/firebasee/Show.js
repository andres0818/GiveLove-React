import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, getDocs, getDoc, deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/config';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { BsFillPencilFill } from 'react-icons/bs';
import { MdDangerous } from 'react-icons/md';

const MySwal = withReactContent(Swal)

const Show = () => {
    // 1- Configuramos los HOOKS
    const [products, SetProducts] = useState( [] )
    //2- referenciamos a la DB firestore

    const productsCollection = collection(db, "products")
    //3- Funcion para mostrat TODOS los docs

    const getProudcts = async () => {
    const data = await getDocs(productsCollection)
    //console.log(data.docs);
    SetProducts(
        data.docs.map( (doc) => ( {...doc.data(),id:doc.id}))
    )
        console.log(products);
    }
    //4- Funcion para eliminar un documento
    const deleteProduct = async (id) => {
        const productDoc = doc(db, "products", id)
        await deleteDoc(productDoc)
        getProudcts()
    }
    //5- funcion de confirmacion para sweet alert 2
    const confirmDelete = (id) => {
      MySwal.fire({
        title: '¿Elimina el producto?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#d33',
        cancelButtonColor: '#3085d6',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) { 
          //llamamos a la fcion para eliminar   
          deleteProduct(id)               
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })    
    }
    // usamos useEffect

    useEffect( () => {
        getProudcts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    //7-deolvemos vista de nuestro componente
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col'>
          <div className="d-grid gap-2">
            <Link to="/create" className='btn btn-secondary mt-2 mb-2'>Create</Link>    
          </div>
          <table className='table table-dark table-hover'>
            <thead>
              <tr>
                <th>Description</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              { products.map( (product) => (
                <tr key={product.id}>
                  <td>{product.description}</td>
                  <td>{product.stock}</td>
                  <td>
                    <Link to={`/edit/${product.id}`} className="btn btn-light"> <BsFillPencilFill /> </Link>
                    <button onClick={ () => { confirmDelete(product.id) } } className="btn btn-danger"> <MdDangerous /> </button>
                  </td>
                </tr>                
              )) }
            </tbody>
          </table>
        </div>
      </div>
    </div> 
    </>
  )
}

export default Show