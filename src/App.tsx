import { useState } from 'react';
import CreateProduct from './components/CreateProduct';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { Product } from './components/Product';
import { useProducts } from './hooks/useProducts';
import { IProducts } from './models';


function App() {
	const [modal, setModal] = useState(true)
	const { loading, error, products, addProduct } = useProducts();

	const createHandler = (product: IProducts) => {
		setModal(false)
		addProduct(product)
	}

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader />}
			{error && <p className='text-center text-red-600'>{error}</p>}
			{products.map(prod =>
				<Product key={prod.id} product={prod} />
			)}
			{modal && <Modal title='Create new product'>
				<CreateProduct onCreate={createHandler} />
			</Modal>}
		</div>

	);
}

export default App;
