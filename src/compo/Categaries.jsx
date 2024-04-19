import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import { FaSearch, FaCartPlus } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import Header from './Header';
import { FaStar, FaRegStar } from "react-icons/fa6";
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { setSelectedProductId } from '../slice/selectedProductSlice';

function Categaries() {
    const [data, setdata] = useState([])
    const [categories, setcategories] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(res => res.json())
            .then(ndata => {
                setdata(ndata.products)
            });
        fetch('https://dummyjson.com/products/categories')
            .then(res => res.json())
            .then(ncate => {
                setcategories(ncate)
            });
    }, [])
    const inputbox = (event) => {
        setSearchQuery(event.target.value);
        fetch('https://dummyjson.com/products/search?q=' + searchQuery)
            .then(res => res.json())
            .then(nsearch => {
                setdata(nsearch.products);
            })
    }
    const categoryclick = (cate) => {
        fetch('https://dummyjson.com/products/category/' + cate)
            .then(res => res.json())
            .then(response => {
                setdata(response.products);
            });
    }
    const addToCart = (id) => {
        dispatch(setSelectedProductId(id));
    };

    return (
        <>
            <Header />
            <div className='category'>
                <div className='container mt-5'>
                    <Row>
                        <Col lg={3} className='category-list'>
                            <h3 className='fw-bolder category-title'>CATEGORIES</h3>
                            <ul className='py-3'>
                                {
                                    categories.map((cate) => {
                                        return (
                                            <li><a href="#" onClick={() => categoryclick(cate)}>{cate}</a></li>
                                        )
                                    })
                                }
                            </ul>
                        </Col>
                        <Col lg={9} className='ps-lg-5'>
                            <div className="search-box ms-auto input-group mb-5 ms-auto d-flex justify-content-end">
                                <input type="text" className='search' value={searchQuery} onChange={inputbox} placeholder='Search for products' />
                                <button className='px-3 border-0'><FaSearch /></button>
                            </div>
                            <div className="product">
                                <Row lg={3}>
                                    {
                                        data.map((item) => {
                                            return (
                                                <Col className='py-3'>
                                                    <div className="item position-relative overflow-hidden">
                                                        <div className="product-image">
                                                            <img src={item.thumbnail} className='img' width="100%" alt="" />
                                                        </div>
                                                        <div className="hover-icn">
                                                            <div className="wish">
                                                                <Link className="icn text-dark" ><CiHeart /></Link>
                                                                <p className='wish-cont'>wishlist</p>
                                                            </div>
                                                            <div className="wish">
                                                                <Link className="icn text-dark" to={{ pathname: '/single', state: { productId: item.id } }} onClick={() => addToCart(item.id)}><FaCartPlus /></Link>
                                                            </div>
                                                            
                                                        </div>
                                                        <div className="product-cont py-2">
                                                        
                                                            <h5><a href="#" className='text-dark fw-bold'>{item.title}</a></h5>
                                                            <p>{item.description}</p>
                                                            <div className='d-flex justify-content-between pt-1'>
                                                                <div className="price text-secondary fw-bold">${item.price}.00</div>
                                                                <div className="rate text-warning"><FaStar /><FaStar /><FaStar /><FaStar /><FaRegStar /></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Col>
                                            )
                                        })
                                    }
                                </Row>
                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
        </>
    )
}

export default Categaries
