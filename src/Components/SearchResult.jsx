import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllProducts } from "../Redux/products/productSlice";
import { filterProducts, filterUniqueProducts } from "../Redux/products/FilteredProductslice";
import { useDispatch } from "react-redux";
import axios from "axios";
import { Link,  useParams } from "react-router-dom";
//  import { getAllFilters } from "../Redux/products/FilteredProductslice";
 import { setCategoryFilter } from "../Redux/products/filterSlice";
import { TiThList } from "react-icons/ti";
import { BsFillGridFill } from "react-icons/bs";
import { getgridView } from "../Redux/products/FilteredProductslice";
import { setGrid_view } from "../Redux/products/FilteredProductslice";
import { FaRegEye } from "react-icons/fa";
import { RxDotFilled } from "react-icons/rx";



const SearchResult = ()=>{
  const gridview = useSelector(getgridView);
  const [filterTags, setFilterTags] = useState([])
  
  
   const categories =[
    "Engraving Machine", "Fiber leaser cutting machines", "Lease Welding machine", "Sheet metal foaming", "Lease Hardining"
   ]

   const dispatch = useDispatch();
  //  const category = useSelector((state) => state.filters.category);
   const { price, rating, discount, category } = useSelector(state => state.filters)

   const [Values, setCheckedvalues] = useState([]);

  const handleChange = (e) => {
    const {value,checked} = e.target;
    if(checked){
      setCheckedvalues(pre=>[...pre, value]);
    }
   
  };
  

  useEffect(()=>{
    const fetchFilters = async ()=>{
      const res = await axios.get("https://my-machine-store-restapi.onrender.com/fetch")
      .catch((error)=>{
console.log("err=>", error);
      });
      dispatch(filterProducts(res.data))
    } 
    fetchFilters();  
  },[])
 
  
  const products = useSelector(getAllProducts);
  console.log("products==>", products);
  // const filters = useSelector(getAllFilters);
  // console.log("selector==>", filters)
  let proarray = Object.values(products);

  
  // const filteredDATA = filters.filter((node) =>
  //   filterTags.length > 0
  //     ? filterTags.every((filterTag) =>
  //         node.category.includes(filterTag)
  //       )
  //     : filters
  // )
  
  // const filterHandler = (event) => {
  //   if (event.target.checked) {
  //     setFilterTags([...filterTags, event.target.value])
  //   } else {
  //     setFilterTags(
  //       filterTags.filter((filterTag) => filterTag !== event.target.value)
  //     )
  //   }
  // }

  // filter by category

  const handleFilterCategory = (category) => {
    const filterCategory = proarray?.filter(product => product.category === category)
    console.log("filtercategory", filterCategory);
    dispatch(setCategoryFilter(filterCategory))
  }
  // filters by category
 

  let renderProducts = "";

  renderProducts = gridview ? (
  proarray.length > 0 &&  proarray.map((product, index) => (
    <div key={index} className="col-xl-3 col-lg-3 col-md-6 col-sm-6">
                  <div className="product__item product__item-d">
                    <div className="product__thumb fix fix-height">
                      <div className="product-image w-img">
                        <a href="product-detail.html">
                          <img src={`https://my-machine-store-dashboardapi.onrender.com/${product.image}`} alt="product" />
                        </a>
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
                    <div className="product__content-3">
                      <h6><a href="product-detail.html">{product.product_name}</a></h6>
                      
                    </div>
                    <div className="product__add-cart-s text-center">
                      <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                        enquire now
                      </button>
                    </div>
                  </div>
                </div>
  )) ) :  (
    proarray.length > 0 &&  proarray.map((product, index) => (
    <div key={index} className="row align-items-center">
    <div className="col-xl-9">
    <div className="single-features-item single-features-item-df b-radius mb-20">
      <div className="row  g-0 align-items-center">
        <div className="col-md-4">
          <div className="features-thum">
            <div className="features-product-image w-img">
              <a href="#">
                <img src={`https://my-machine-store-dashboardapi.onrender.com/${product.image}`} alt />
              </a>
            </div>
            <div className="product-action">
              <a
                href="#"
                className="icon-box icon-box-1"
                data-bs-toggle="modal"
                data-bs-target="#productModalId"
              >
                <FaRegEye/>
                <FaRegEye />
              </a>
             
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="product__content product__content-d">
            <h6>
              <a href="#">{product.product_name}</a>
            </h6>
           
            <div className="features-des">
              <ul>
              <li>
                  <a href="product-detail.html">
                    <RxDotFilled/> <span>Model-No:</span>{product.modalNum}
                  </a>
                </li>
                <li>
                  <a href="product-detail.html">
                    <RxDotFilled /><span>Category:</span>{product.category}
                  </a>
                </li>
                <li>
                  <a href="product-detail.html">
                    <RxDotFilled /><span>Brand:</span>{product.brand}
                  </a>
                </li>
               
                <li>
                  <a href="product-detail.html">
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
  )))
  // proarray && proarray ?.filter((pro)=> pro.category <= filters.category).map((product, index) => (
  //   <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                 <div className="product__item product__item-d">
  //                   <div className="product__thumb fix fix-height">
  //                     <div className="product-image w-img">
  //                       <a href="product-detail.html">
  //                         <img src={`http://localhost:5001/${product.image}`} alt="product" />
  //                       </a>
  //                     </div>
  //                     <div className="product-action">
  //                       <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
  //                         <i className="fal fa-eye" />
  //                         <i className="fal fa-eye" />
  //                       </a>
  //                       <a href="#" className="icon-box icon-box-1">
  //                         <i className="fal fa-heart" />
  //                         <i className="fal fa-heart" />
  //                       </a>
  //                     </div>
  //                   </div>
  //                   <div className="product__content-3">
  //                     <h6><a href="product-detail.html">{product.product_name}</a></h6>
                      
  //                   </div>
  //                   <div className="product__add-cart-s text-center">
  //                     <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                       enquire now
  //                     </button>
  //                   </div>
  //                 </div>
  //               </div>
  // ))
  // (category.length < 0 ) ? (
  //  proarray.map((product, index) => (
  //     <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                   <div className="product__item product__item-d">
  //                     <div className="product__thumb fix fix-height">
  //                       <div className="product-image w-img">
  //                         <a href="product-detail.html">
  //                           <img src={`http://localhost:5001/${product.image}`} alt="product" />
  //                         </a>
  //                       </div>
  //                       <div className="product-action">
  //                         <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
  //                           <i className="fal fa-eye" />
  //                           <i className="fal fa-eye" />
  //                         </a>
  //                         <a href="#" className="icon-box icon-box-1">
  //                           <i className="fal fa-heart" />
  //                           <i className="fal fa-heart" />
  //                         </a>
  //                       </div>
  //                     </div>
  //                     <div className="product__content-3">
  //                       <h6><a href="product-detail.html">{product.product_name}</a></h6>
                        
  //                     </div>
  //                     <div className="product__add-cart-s text-center">
  //                       <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                         enquire now
  //                       </button>
  //                     </div>
  //                   </div>
  //                 </div>
  //   ))
  // ): (
  //   category.map((product, index) => (
  //     <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
  //                   <div className="product__item product__item-d">
  //                     <div className="product__thumb fix fix-height">
  //                       <div className="product-image w-img">
  //                         <a href="product-detail.html">
  //                           <img src={`http://localhost:5001/${product.image}`} alt="product" />
  //                         </a>
  //                       </div>
  //                       <div className="product-action">
  //                         <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
  //                           <i className="fal fa-eye" />
  //                           <i className="fal fa-eye" />
  //                         </a>
  //                         <a href="#" className="icon-box icon-box-1">
  //                           <i className="fal fa-heart" />
  //                           <i className="fal fa-heart" />
  //                         </a>
  //                       </div>
  //                     </div>
  //                     <div className="product__content-3">
  //                       <h6><a href="product-detail.html" className="a40">{product.product_name}</a></h6>
                        
  //                     </div>
  //                     <div className="product__add-cart-s text-center">
  //                       <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
  //                         enquire now
  //                       </button>
  //                     </div>
  //                   </div>
  //     </div>
  //   ))
  // );
    // ):(
    //     (product.length > 0) && product.map((product, index) => (
    //   <div key={index} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
    //                 <div className="product__item product__item-d">
    //                   <div className="product__thumb fix">
    //                     <div className="product-image w-img">
    //                       <a href="product-detail.html">
    //                         <img src={`http://localhost:5001/${product.image}`} alt="product" />
    //                       </a>
    //                     </div>
    //                     <div className="product-action">
    //                       <a href="#" className="icon-box icon-box-1" data-bs-toggle="modal" data-bs-target="#productModalId">
    //                         <i className="fal fa-eye" />
    //                         <i className="fal fa-eye" />
    //                       </a>
    //                       <a href="#" className="icon-box icon-box-1">
    //                         <i className="fal fa-heart" />
    //                         <i className="fal fa-heart" />
    //                       </a>
    //                     </div>
    //                   </div>
    //                   <div className="product__content-3">
    //                     <h6><a href="product-detail.html">{product.product_name}</a></h6>
                        
    //                   </div>
    //                   <div className="product__add-cart-s text-center">
    //                     <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
    //                       enquire now
    //                     </button>
    //                   </div>
    //                 </div>
    //               </div>
    // ))
    // )
  
    return(
        <>
        <div className="shop-area mb-20 mt-40">
    <div className="container">
      <div className="row">
        {/* <div className="col-xl-3 col-lg-4">
          <div className="product-widget mb-30">
            <h5 className="pt-title">Machine categories</h5>
            <div className="widget-category-list mt-20">
              {/* <form action="#"> */}
                {/* {
                  categories.map((cat)=>(
                    <div className="single-widget-category">
                    <Link to={"/machines/:" + cat}>
                    <button   onClick={() => dispatch(filterUniqueProducts(cat))}>
                      <span className="checkmark"></span>{cat}
                    </button>
                    </Link>
                    </div>
                  ))
                } */}
                {/* {
                  categories.map((cat)=>(
                    <div className="single-widget-category">
                    <input type="checkbox"  onClick={() => handleFilterCategory(cat)} id="cat-item-8" name="cat-item" />
                      <label htmlFor="cat-item-3">{cat}</label>
                    </div>
                  ))
                } */}

                
              
                
               
               
                
                {/* <div className="single-widget-category">
                <input type="checkbox" value="Bending Machine" onChange={ handleChange} id="cat-item-8" name="cat-item" />
                  <label htmlFor="cat-item-2">Fiber leaser cutting machines</label>
                </div>
                <div className="single-widget-category">
                <input type="checkbox"  onChange={ handleChange} id="cat-item-8" name="cat-item" />
                  <label htmlFor="cat-item-3">Lease Welding machine</label>
                </div>
                <div className="single-widget-category">
                <input type="checkbox"  onChange={ handleChange} id="cat-item-8" name="cat-item" />
                  <label htmlFor="cat-item-4">Sheet metal foaming</label>
                </div>
                <div className="single-widget-category">
                <input type="checkbox"  onChange={ handleChange} id="cat-item-8" name="cat-item" />
                  <label htmlFor="cat-item-5">Lease Hardining</label>
                </div> */}


                {/* <div className="single-widget-category">
                  <label htmlFor="cat-item-7">CNC Turning Machine</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="cat-item-8">Pasting Machine</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="cat-item-9">Printing Machine</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="cat-item-10">VMC Machines</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="cat-item-11">Corrugation Machine</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="cat-item-12">HMC Machines</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="cat-item-13">Moulding Machines</label>
                </div>  
              
            </div>
          </div>
          <div className="product-widget mb-30">
            <h5 className="pt-title">Choose Brand</h5>
            <div className="widget-category-list mt-20">
              <form action="#">
                <div className="single-widget-category">
                  <label htmlFor="brand-item-1">Caterpillar, Inc.</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="brand-item-2"> Deere &amp; Co. </label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="brand-item-3">CNH Industrial NV</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="brand-item-4">ABB Group</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="brand-item-5">Daikin Industries Ltd</label>
                </div>
                <div className="single-widget-category">
                  <label htmlFor="brand-item-7">Kubota Corp.</label>
                </div>
              </form>
            </div>
          </div>
          <div className="product-widget mb-30">
            <h5 className="pt-title">Special Offers</h5>
            <div className="product__sm mt-20">
              <ul>
                <li className="product__sm-item d-flex align-items-center">
                  <div className="product__sm-thumb mr-20">
                    <a href="product-detail.html">
                      <img src="assets/img/product/sm-1.jpg" alt />
                    </a>
                  </div>
                  <div className="product__sm-content">
                    <div className="product__sm-price">
                      <span className="price">Turret Punching Machine</span>
                    </div>
                    <h5 className="product__sm-title">
                      <a href="#">View More</a>
                    </h5>
                  </div>
                </li>
                <li className="product__sm-item d-flex align-items-center">
                  <div className="product__sm-thumb mr-20">
                    <a href="product-detail.html">
                      <img src="assets/img/product/sm-2.jpg" alt />
                    </a>
                  </div>
                  <div className="product__sm-content">
                    <div className="product__sm-price">
                      <span className="price">Bending Machine</span>
                    </div>
                    <h5 className="product__sm-title">
                      <a href="#">View More</a>
                    </h5>
                  </div>
                </li>
                <li className="product__sm-item d-flex align-items-center">
                  <div className="product__sm-thumb mr-20">
                    <a href="product-detail.html">
                      <img src="assets/img/product/sm-3.jpg" alt />
                    </a>
                  </div>
                  <div className="product__sm-content">
                    <div className="product__sm-price">
                      <span className="price">Shearing Machine</span>
                    </div>
                    <h5 className="product__sm-title">
                      <a href="#">View More</a>
                    </h5>
                  </div>
                </li>
                <li className="product__sm-item d-flex align-items-center">
                  <div className="product__sm-thumb mr-20">
                    <a href="product-detail.html">
                      <img src="assets/img/product/sm-4.jpg" alt />
                    </a>
                  </div>
                  <div className="product__sm-content">
                    <div className="product__sm-price">
                      <span className="price">Laser Cutting Machine</span>
                    </div>
                    <h5 className="product__sm-title">
                      <a href="#">View More</a>
                    </h5>
                  </div>
                </li>
                <li className="product__sm-item d-flex align-items-center">
                  <div className="product__sm-thumb mr-20">
                    <a href="product-detail.html">
                      <img src="assets/img/product/sm-5.jpg" alt />
                    </a>
                  </div>
                  <div className="product__sm-content">
                    <div className="product__sm-price">
                      <span className="price">VMC Machines</span>
                    </div>
                    <h5 className="product__sm-title">
                      <a href="#">View More</a>
                    </h5>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="col-xl-12 col-lg-8">
          {/* <div className="shop-banner mb-30">
            <div className="banner-image">
              <img className="banner-l" src="assets/image/machine/machinebanner.png" alt />                              
            </div>
          </div> */}
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
                    <div className="product__result pl-60" style={{margin:"0 auto"}}>
                    <p className="paradec"><span className="spandec">{renderProducts.length}</span> products are found</p>
                    </div>
                  </div>
                </div>
                {/* <div className="col-xxl-2 col-xl-6 col-lg-6 col-md-6">
                  <div className="product__filter-right d-flex align-items-center justify-content-md-end">
                    <div className="product__sorting product__show-no">
                      <select>
                        <option>10</option>
                        <option>20</option>
                        <option>30</option>
                        <option>40</option>
                      </select>
                    </div>
                    <div className="product__sorting product__show-position ml-20">
                      <select>
                        <option>Latest</option>
                        <option>New</option>
                        <option>Up coming</option>
                      </select>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
          <div className="tab-content" id="productGridTabContent">
            <div className="tab-pane fade  show active" id="FourCol" role="tabpanel" aria-labelledby="FourCol-tab">
              <div className="tp-wrapper">
                <div className="row g-0">
                  {
                    renderProducts
                  }
                  {/* <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p1.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Turret Punching Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p2.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Bending Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p3.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Shearing Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p4.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Laser Cutting Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p5.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Water Jet Cutting Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p1.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">CNC Turning Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p2.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Pasting Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p3.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Printing Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p4.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">VMC Machines</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/tp-12.jpg" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Corrugation Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p5.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">HMC Machines</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p1.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Moulding Machines</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p2.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">VMC Machines</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p3.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">CNC Turning Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p4.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Shearing Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p5.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Turret Punching Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p1.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Water Jet Cutting Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p2.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Printing Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p3.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Moulding Machines</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                    <div className="product__item product__item-d">
                      <div className="product__thumb fix">
                        <div className="product-image w-img">
                          <a href="product-detail.html">
                            <img src="assets/img/product/pro/p4.png" alt="product" />
                          </a>
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
                      <div className="product__content-3">
                        <h6><a href="product-detail.html">Laser Cutting Machine</a></h6>
                        <div className="rating mb-5">
                          <ul>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                            <li><a href="#"><i className="fal fa-star" /></a></li>
                          </ul>
                          <span>(01 review)</span>
                        </div>
                      </div>
                      <div className="product__add-cart-s text-center">
                        <button type="button" className="cart-btn d-flex mb-10 align-items-center justify-content-center w-100">
                          enquire now
                        </button>
                      </div>
                    </div>
                  </div> */}
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
                                <a href="product-detail.html"><img src="assets/img/product/sm-1.jpg" alt /></a>
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
                              <h6><a href="product-detail.html">HMC Machines</a></h6>
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
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
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
                                <a href="product-detail.html"><img src="assets/img/product/sm-2.jpg" alt /></a>
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
                              <h6><a href="product-detail.html">Moulding Machines</a></h6>
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
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
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
                                <a href="product-detail.html"><img src="assets/img/product/sm-3.jpg" alt /></a>
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
                              <h6><a href="product-detail.html">Laser Cutting Machine</a></h6>
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
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
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
                                <a href="product-detail.html"><img src="assets/img/product/sm-4.jpg" alt /></a>
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
                              <h6><a href="product-detail.html">Imported Wooden Felt Cushion Chair</a></h6>
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
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
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
                                <a href="product-detail.html"><img src="assets/img/product/sm-5.jpg" alt /></a>
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
                              <h6><a href="product-detail.html">Sunhouse Decorative Lights – Imported</a></h6>
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
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
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
                                <a href="product-detail.html"><img src="assets/img/product/sm-6.jpg" alt /></a>
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
                              <h6><a href="product-detail.html">Korea Stainless Steel Pot Set 5 Piecs</a></h6>
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
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
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
                                <a href="product-detail.html"><img src="assets/img/product/sm-7.jpg" alt /></a>
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
                              <h6><a href="product-detail.html">HP Stainless Steel Hot Water Bottle</a></h6>
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
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
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
                                <a href="product-detail.html"><img src="assets/img/product/sm-8.jpg" alt /></a>
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
                              <h6><a href="product-detail.html">The North Face Womens Resolve 2 Jack</a></h6>
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
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Bass and Stereo Sound.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Display with 3088 x 1440 pixels resolution.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Memory, Storage &amp; SIM: 12GB RAM, 256GB.</a></li>
                                  <li><a href="product-detail.html"><i className="fas fa-circle" /> Androi v10.0 Operating system.</a></li>
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
        </>
    )
}
export default SearchResult
