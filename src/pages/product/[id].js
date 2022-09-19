
import ProductsDetail from '../../layouts/product-details'



export async function getServerSideProps (context)  {

  const details = await fetch(`${process.env.NEXT_PUBLIC_URL_BE}/api/v1/product/${context.params.id}`)
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