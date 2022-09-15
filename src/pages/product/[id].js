
import ProductsDetail from '../../layouts/product-details'



export async function getServerSideProps (context)  {

  const details = await fetch(`https://coffee-shop-be-dio.herokuapp.com/api/v1/product/${context.params.id}`)
  const dataDetails = await details.json()
  return {
    props: { productsDetail: dataDetails }
  }
}

const Details = ({productsDetail}) => {
  return(
    <ProductsDetail
    productsDetail={productsDetail}/>
  )
}

export default Details;