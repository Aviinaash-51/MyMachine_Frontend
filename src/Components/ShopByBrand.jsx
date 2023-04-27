import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";

import { getgridView } from "../Redux/products/FilteredProductslice";
import { setGrid_view } from "../Redux/products/FilteredProductslice";
import { useLocation } from "react-router-dom";
import { FaAngleLeft, FaAngleRight, FaRegEye } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";
import { BsFillGridFill, BsListColumns } from "react-icons/bs";
import { TiThList } from "react-icons/ti";
import { getpopup, setShow, getSelectedFilter, setFilterShow, getFilterpopup } from '../Redux/products/PopupSlice';
import ProductEnquiryForm from './ProductEnquiryForm';
 

const ShopByBrand = () => {
    const location = useLocation();
  const { brand } = location.state;
  const [data, setData] = useState([]);
  console.log("brand=>", brand);
    useEffect(() => {
        const fetchMachine = async () => {
          const res = await axios
            .get("http://15.207.31.23:5000/fetch")
    
            .catch((error) => {
              console.log("err=>", error);
            });
          console.log("machine=>", res.data);
          setData(res.data);
        };
        fetchMachine();
      }, []);
    
      const machineData = Object.values(data);

      const gridview = useSelector(getgridView);
      const dispatch = useDispatch();
      const popupp = useSelector(getpopup);
      const popup = useSelector(getFilterpopup);
      

      let searchProducts = "";

      searchProducts = gridview ? (
      data.length > 0 &&  data.map((product, index) => (
        brand === product.brand ? (
       <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6 machine-mb">
                  <div className="product__item product__item-d proalign">
                    <div className="product__thumb fix fix-height">
                      <div className="product-image w-img">
                        <a href="#">
                          <img src={`http://15.207.31.23:5001/${product.image}`} alt="product" className="brandimg" />
                        </a>
                      </div>
                      {/* <div className="product-action">
                        <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                          <i className="fal fa-eye" />
                          <i className="fal fa-eye" />
                        </a>
                        <a href="#" className="icon-box icon-box-1">
                          <i className="fal fa-heart" />
                          <i className="fal fa-heart" />
                        </a>
                      </div> */}
                    </div>
                    <div className="product__content-3">
                      <h6><a href="#">{product.product_name}</a></h6>
                      
                    </div>
                    <div className="product__add-cart-s text-center">
                      <button type="button"  onClick={()=>dispatch(setFilterShow(["true", index, product.brand]))} className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                        enquire now
                      </button>
                    </div>
                  </div>
                </div>
        ) : ""
  )) ) :  (
    data.length > 0 &&  data.map((product, index) => (
        brand === product.brand ? (
    <div key={index} className="row align-items-center">
    <div className="col-xl-9">
    <div className="single-features-item single-features-item-df b-radius mb-20">
      <div className="row  g-0 align-items-center">
        <div className="col-md-4">
          <div className="features-thum">
            <div className="features-product-image w-img">
              <a href="#">
                <img src={`http://15.207.31.23:5001/${product.image}`} alt />
              </a>
            </div>
            {/* <div className="product-action">
              <a
                href="#"
                className="icon-box icon-box-1"
                data-bs-toggle="modal"
                data-bs-target="#productModalId"
              >
                <FaRegEye/>
                <FaRegEye />
              </a>
             
            </div> */}
          </div>
        </div>
        <div className="col-md-8">
          <div className="product__content product__content-d">
            <h6 className="textleft">
              <a href="#">{product.product_name}</a>
            </h6>
           
            <div className="features-des">
              <ul>
              <li>
                  <a href="#">
                    <RxDotFilled/> <span>Model-No:</span>{product.modalNum}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RxDotFilled /><span>Category:</span>{product.category}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <RxDotFilled /><span>Brand:</span>{product.brand}
                  </a>
                </li>
               
                <li>
                  <a href="#">
                    <RxDotFilled/><span>Color:</span>{product.colour}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
   </div>
   <div className="col-xl-3">
   <div className="product-stock mb-15">
     <h5>
       Availability: <span> 940 in stock</span>
     </h5>
     {/* <h6>$125.00</h6> */}
   </div>
   <div className="stock-btn ">
     <button
       type="button"
       className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100"
     >
       enquire now
     </button>
   </div>
  </div>
 </div>
        ) :""
  )))
  return (
    <>
      <div className="shop-area mb-20 mt-40">
    <div className="container">
      <div className="row">       
        <div className="col-xl-12 col-lg-8">         
          <div className="product-lists-top">
            <div className="product__filter-wrap">
              <div className="row align-items-center">
                <div className="col-xxl-10 col-xl-6 col-lg-6 col-md-6">
                  <div className="product__filter d-sm-flex align-items-center">
                    <div className="product__col">
                      <ul className="nav nav-tabs" id="myTab" role="tablist">
                        <li className="nav-item" role="presentation">
                          <button  onClick={() => dispatch(setGrid_view(true))}
                                className={gridview ? "nav-link active" : "nav-link"}  id="FourCol-tab" data-bs-toggle="tab" data-bs-target="#FourCol" type="button" role="tab" aria-controls="FourCol" aria-selected="true">
                             <BsFillGridFill /> 
                          </button>
                        </li>
                        <li className="nav-item" role="presentation">
                          <button   onClick={() => dispatch(setGrid_view(false))}
                                className={gridview ? "nav-link" : "nav-link active"}  id="FiveCol-tab" data-bs-toggle="tab" data-bs-target="#FiveCol" type="button" role="tab" aria-controls="FiveCol" aria-selected="false">
                          <TiThList />
                          </button>
                        </li>
                      </ul>
                    </div>
                    {/* <div className="product__result pl-60" style={{margin:"0 auto"}}>
                    <p className="paradec"><span className="spandec">{brand.length}</span> products are found</p>
                    </div> */}
                  </div>
                </div>                
              </div>
            </div>
          </div>
          <div className="tab-content" id="productGridTabContent">
            <div className="tab-pane fade  show active" id="FourCol" role="tabpanel" aria-labelledby="FourCol-tab">
              <div className="tp-wrapper">
                <div className="row g-0">
                  {
                    searchProducts
                  }
                 
                </div>
              </div>
            </div>
            <div className="tab-pane fade" id="FiveCol" role="tabpanel" aria-labelledby="FiveCol-tab">
              <div className="tp-wrapper-2">
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href="#"><img src="assets/img/product/sm-1.jpg" alt /></a>
                              </div>
                              <div className="product__offer">
                                <span className="discount">-15%</span>
                              </div>
                              
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="#">HMC Machines</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$220.00 - <del> $240.00</del></h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href="#"><img src="assets/img/product/sm-2.jpg" alt /></a>
                              </div>
                             
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="#">Moulding Machines</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$216.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href="#"><img src="assets/img/product/sm-3.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="#">Laser Cutting Machine</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$125.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href="#"><img src="assets/img/product/sm-4.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="#">Imported Wooden Felt Cushion Chair</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$160.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href="#"><img src="assets/img/product/sm-5.jpg" alt /></a>
                              </div>
                              <div className="product__offer">
                                <span className="discount">-15%</span>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="#">Sunhouse Decorative Lights – Imported</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$125.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href="#"><img src="assets/img/product/sm-6.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="#">Korea Stainless Steel Pot Set 5 Piecs</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$99</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href="#"><img src="assets/img/product/sm-7.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="#">HP Stainless Steel Hot Water Bottle</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$125.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="single-item-pd">
                  <div className="row align-items-center">
                    <div className="col-xl-9">
                      <div className="single-features-item single-features-item-df b-radius mb-20">
                        <div className="row  g-0 align-items-center">
                          <div className="col-md-4">
                            <div className="features-thum">
                              <div className="features-product-image w-img">
                                <a href="#"><img src="assets/img/product/sm-8.jpg" alt /></a>
                              </div>
                              <div className="product-action">
                                <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
                                  <i className="fal fa-eye" />
                                  <i className="fal fa-eye" />
                                </a>
                                <a href="#" className="icon-box icon-box-1">
                                  <i className="fal fa-heart" />
                                  <i className="fal fa-heart" />
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-8">
                            <div className="product__content product__content-d">
                              <h6><a href="#">The North Face Womens Resolve 2 Jack</a></h6>
                              <div className="rating mb-5">
                                <ul className="rating-d">
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                  <li><a href="#"><i className="fal fa-star" /></a></li>
                                </ul>
                                <span>(01 review)</span>
                              </div>
                              <div className="features-des">
                                <ul>
                                  <li><a href="#"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="#"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-xl-3">
                      <div className="product-stock mb-15">
                        <h5>Availability: <span> 940 in stock</span></h5>
                        <h6>$140.00</h6>
                      </div>
                      <div className="stock-btn ">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProductEnquiryForm show={popupp} />
    </>
  )
}

export default ShopByBrand