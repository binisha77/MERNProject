import { useEffect } from "react"
import Navbar from "../../globals/component/Navbar"
import { fetchProduct } from "../../store/productSlice"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { useParams } from "react-router"



function SingleProduct(){
  const {id} = useParams()
  const {product} = useAppSelector((store)=>store.products)
  const dispatch = useAppDispatch()
  useEffect(() => {
    if (id) {
      dispatch(fetchProduct(id))
    }
  }, [id, dispatch])
  console.log("Product Image URL:", product?.productImageUrl)

  return(
    <>
    <Navbar/>
    <div className="bg-gray-100 dark:bg-gray-800 py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row -mx-4">
      <div className="md:flex-1 px-4">
        <div className="h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
          <img className="w-full h-full object-cover" src={`http://localhost:4000/${product?.productImageUrl}`} alt="Product Image" />
        </div>
        <div className="flex -mx-2 mb-4">
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800 dark:hover:bg-gray-700">Add to Cart</button>
          </div>
          <div className="w-1/2 px-2">
            <button className="w-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white py-2 px-4 rounded-full font-bold hover:bg-gray-300 dark:hover:bg-gray-600">Add to Wishlist</button>
          </div>
        </div>
      </div>
      <div className="md:flex-1 px-4">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">{product?.productName}</h2>
        
        <div className="flex mb-4">
          <div className="mr-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">Price:</span>
            <span className="text-gray-600 dark:text-gray-300">{product?.productPrice}</span>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">Availability( In Stock)</span>
            <span className="text-gray-600 dark:text-gray-300">{product?.productTotalStock}</span>
          </div>
        </div>
        <div className="mb-4">
          <span className="font-bold text-gray-700 dark:text-gray-300">Category:{product?.Category.categoryName}</span>
          
        </div>
        
        <div>
          <span className="font-bold text-gray-700 dark:text-gray-300">Product Description:</span>
          <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
           {product?.productDescription}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

    </>
  )
}


export default SingleProduct