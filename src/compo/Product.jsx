import React from 'react'
import Header from './Header'
import { Col, Row } from 'react-bootstrap'
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { minus, plus, remove } from '../slice/quantitySlice';

function Product() {

    const cartItems = useSelector((state)=>state.quantity.productData)
    const dispatch = useDispatch()

    const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
    const taxRate = 0.13; 
    const tax = subtotal * taxRate;
    const total = subtotal + tax;
    
    return (
        <div>
            <Header />
            <div className='container-fluid'>
                <nav aria-label="breadcrumb" className='my-4 d-flex justify-content-end'>
                    <ol class="breadcrumb fs-5">
                        <li class="breadcrumb-item"><Link to="/" className='pe-2 text-secondary'>Home</Link></li>
                        <li class="breadcrumb-item active text-danger" aria-current="page">Cart</li>
                    </ol>
                </nav>
                <Row className='g-3 product-view'>
                    <Col lg={8}>
                        <Row>
                            {cartItems.map((item, index) => (
                                <>
                                    <Col lg={4} key={index} className='img-pro'>
                                        <img className='small-img p-3' src={item.thumbnail} alt="" width="100%" />
                                    </Col>
                                    <Col lg={8} key={index}>
                                        <div className='pb-4 pe-5'>
                                            <h2>{item.title}</h2>
                                            <p className='py-2'>{item.description}</p>
                                            <p className='d-flex align-items-center text-warning'><span className='text-dark me-1'>4.0</span> <FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></p>
                                            <div className='d-flex inc-dec py-3'>
                                                <button onClick={() => dispatch(minus(item.id))}>-</button>
                                                <h2 className='px-3'>{item.quantity}</h2>
                                                <button onClick={() => dispatch(plus(item.id))}>+</button>
                                            </div>
                                            <div className='d-flex align-items-center'>
                                                <h4>${item.price*item.quantity}.00</h4>
                                                <Link className="text-danger mt-2 ms-5 fw-bold" onClick={() => dispatch(remove(item.id))}>REMOVE</Link>
                                            </div>
                                        </div>
                                    </Col>
                                </>
                            ))}
                        </Row>
                    </Col>
                    <Col lg={4} className='total-bill border-start ps-3'>
                        <Table bordered>
                            <thead>
                                <tr className='text-center'>
                                    <th><h5>product</h5></th>
                                    <th><h5>Quantity</h5></th>
                                    <th><h5>Subtotal</h5></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cartItems.map((item, index) => {
                                        return (
                                            <tr>
                                                <td className='d-flex'>
                                                    <div className='d-flex'>
                                                        <h6>{index + 1}</h6>
                                                        <div className="pro-img mx-2">
                                                            <img src={item.thumbnail} className='img' alt="" />
                                                        </div>
                                                    </div>
                                                    <div className='total-price'>
                                                        <h6>{item.title}</h6>
                                                        <p className='text-secondary'>${item.price}.00</p>
                                                    </div>
                                                </td>
                                                <td align='center'><h6>{item.quantity}</h6></td>
                                                <td align='center'><h6>${item.price*item.quantity}.00</h6></td>
                                            </tr>
                                        )
                                    })
                                }
                                <tr>
                                    <th colSpan={2}><h5 className='text-end'>subtotal</h5></th>
                                    <td align='center'><h6>${parseInt(subtotal)}.00</h6></td>
                                </tr>
                                <tr>
                                    <th colSpan={2}><h5 className='text-end'>TAX (13.0%)</h5></th>
                                    <td align='center'><h6>${parseInt(tax)}.00</h6></td>
                                </tr>
                                <tr>
                                    <th colSpan={2}><h5 className='text-end'>TOTAL</h5></th>
                                    <td align='center'><h6>${parseInt(total)}.00</h6></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
        </div>
    )
}

export default Product
