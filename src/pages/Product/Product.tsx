import { useParams } from 'react-router-dom'


const Product = () => {
	const { id } = useParams();
  return (
		<div>product - {id}</div>
  )
}

export default Product