import { useContext } from 'react';
import CreateProduct from './components/CreateProduct';
import Loader from './components/Loader';
import Modal from './components/Modal';
import { Product } from './components/Product';
import { ModalContext } from './context/ModalContext';
import { useProducts } from './hooks/useProducts';
import { IProducts } from './models';


function App() {
	const { modal, open, close } = useContext(ModalContext)
	const { loading, error, products, addProduct } = useProducts();

	const createHandler = (product: IProducts) => {
		close()
		addProduct(product)
	}

	return (
		<div className="container mx-auto max-w-2xl pt-5">
			{loading && <Loader />}
			{error && <p className='text-center text-red-600'>{error}</p>}
			{products.map(prod =>
				<Product key={prod.id} product={prod} />
			)}
			{modal && <Modal
				onClose={close}
				title='Create new product'>
				<CreateProduct onCreate={createHandler} />
			</Modal>}
			<button
				onClick={open}
				className='fixed bottom-5 right-5 rounded-full bg-red-400 text-white text-2xl px-4 py-2'>+</button>
		</div>

	);
}

export default App;
