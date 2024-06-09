import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProduct } from './assets/redux/slice/productSlice'


function App() {
  const dispatch = useDispatch();
  
useEffect(() => {
    dispatch(fetchProduct());
}, [dispatch]);

const products = useSelector((state) => state.products?.products);
  const isLoading = useSelector((state) => state.product?.isLoading);
  const error = useSelector((state) => state.product?.error);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
        {products.map((product) => (
          <div key={product.id}>
            <h1>{product.title}</h1>
          </div>
        ))}
      </div>
  )
}


export default App
