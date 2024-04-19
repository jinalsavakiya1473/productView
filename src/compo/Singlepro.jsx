import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Header from './Header';
import { Col, Container, Row } from 'react-bootstrap';
import { IoMdCart } from "react-icons/io";
import { addToCart } from '../slice/quantitySlice';
import { Link } from 'react-router-dom';

function Singlepro() {
    const selectedProductId = useSelector((state) => state.selectedProduct.productId);
    const [productData, setProductData] = useState(null);
    const [selectedImage, setSelectedImage] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        if (selectedProductId) {
            fetch('https://dummyjson.com/products/' + selectedProductId)
                .then(res => res.json())
                .then(data => {
                    setProductData(data);
                });
        }
    }, []);

    const cart = (product) =>{
        dispatch(addToCart(product));
        alert("Product added to cart successfully!");
    }

    const discount = productData ? parseInt(productData.price + productData.discountPercentage * productData.price / 100) : 0;
    const handleMiniImageClick = (index) => {
        setSelectedImage(productData.images[index]);
    };

    return (
        <div>
            <Header/>
            <Container className='my-5'>
                <nav aria-label="breadcrumb" className='my-4 d-flex justify-content-end'>
                    <ol class="breadcrumb fs-5">
                        <li class="breadcrumb-item"><Link to="/" className='pe-2 text-secondary'>Home</Link></li>
                        <li class="breadcrumb-item active text-danger" aria-current="page">Product</li>
                    </ol>
                </nav>
                <Row className='single-product p-5'>
                    {productData && (
                        <>
                            <Col lg={5}>
                                <div className="pro-img">
                                    <img src={selectedImage || productData.thumbnail} alt="" />
                                </div>
                                <div className='d-flex mini-img'>
                                   {
                                    productData.images.map((imglen,index)=>{
                                        return(
                                            <img src={imglen} className='img' onClick={() => handleMiniImageClick(index)} alt="" />
                                        )
                                    })
                                   }
                                </div>
                            </Col>
                            <Col lg={7} className='ps-5'>
                                <h1>{productData.title}</h1>
                                <h5 className='py-3'>{productData.description}</h5>
                                <div className='d-flex pro-des'>
                                    <span>Rating</span>
                                    <p className='bor'>{productData.rating}</p>
                                    <span>Brand</span>
                                    <p className='bor'>{productData.brand}</p>
                                    <span>Category</span>
                                    <p>{productData.category}</p>
                                </div>
                                <div className='dis-price my-3'>
                                    <div className='d-flex'>
                                         <p className='text-decoration-line-through'>${discount}.00</p> 
                                         <span className='ps-3'>(inclusive of all taxes)</span>               
                                    </div>
                                    <div className='d-flex'>
                                        <h3>${productData.price}.00</h3>
                                        <p className='dis-per ms-3 mb-auto mt-2'>{productData.discountPercentage}% off</p>
                                    </div>
                                </div>
                                {/* <div className='d-flex'>
                                    <h5>Quantity:</h5>
                                    <div className='d-flex ms-4 inc-dec-btn'>
                                        <button onClick={()=>dispatch(minus({selectedProductId}))}>-</button>
                                        <h3 className='px-3'>0</h3>
                                        <button onClick={()=>dispatch(plus({selectedProductId}))}>+</button>
                                    </div>
                                </div> */}
                                <button className='cart-btn mt-4' onClick={()=>cart(productData)}><IoMdCart/> Add To Cart</button>
                            </Col>
                        </>
                    )}
                </Row>
            </Container>
        </div>
    );
}

export default Singlepro;
