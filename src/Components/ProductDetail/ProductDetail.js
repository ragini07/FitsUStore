import './ProductDetail.css'
import {useState , useEffect} from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import {Loader} from '../index'
import { useProducts } from '../../Context/products-context'

function ProductDetail() {
    const [product , setProduct] = useState({})
    const [isLoading, setIsLoading] = useState(false)

    const {id} = useParams();
  

    useEffect(() => {
    (  async  () => {
            try{
                setIsLoading(true)
                const {data} = await axios.get(`/api/products/${id}`)
                console.log(data.product)
                setProduct(data.product)
                setIsLoading(false)
            }catch(error){
                console.log("its error"+error)
            }
        })()
    },[])
  
  return (

 <>
    {isLoading && <Loader />}
     <div class="product-container">
        <img src={product.imageURL} alt="product preview" class="res-img-large"/>
          <div class="product-detail-container">
              <h2>{product.desc}</h2>
              <p class="brand">{product.name}</p>
              <span class="rating-badge-number">{product.rating}<i class="fa fa-star filled-star"></i></span>
              <div class="price">
                <div class="sale-price">{`₹${product.salePrice}`}</div>
                <div class="mrp-price">{`₹${product.price}`}</div>
                <div class="discount">{`(${Math.trunc( (product.price - product.salePrice )/product.price*100 )}% OFF)`}</div>
              </div>
              <div class="divider"></div>
                <div class="extra-detail">
                    <p><i class="fa fa-check-square"></i>{product.inStock ? 'Item in Stock' : 'Item Out Of Stock'}</p>
                    <p><i class="fa fa-check-square"></i>Price is inclusive of all taxes</p>
                </div>
                <div class="cta-btn">
                    <button class="btn" disabled={!product.inStock}>{product.inStock ? 'Add To Cart' : 'Out Of Stock'}</button>
                    <button class="btn secondary">Add To Wishlist</button>
                </div>
          </div>
      </div>
    </> 
  )
}

export  {ProductDetail}