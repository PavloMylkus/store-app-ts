import React, { useState } from "react"
import { IProducts } from "../../models";
import axios from 'axios'

const productData: IProducts = {
	title: 'test product',
	price: 13.5,
	description: 'lorem ipsum set',
	image: 'https://i.pravatar.cc',
	category: 'electronic',
	rating: {
		rate: 42,
		count: 10
	}

}

interface CreateProductProps {
	onCreate: (product: IProducts) => void
}


const CreateProduct = ({ onCreate }: CreateProductProps) => {
	const [value, setValue] = useState('');
	const [error, setError] = useState('');


	const submitHandler = async (event: React.FormEvent) => {
		event.preventDefault();

		if (value.trim().length === 0) {
			setError('Please enter valid title')
			return
		}

		productData.title = value
		const response = await axios.post<IProducts>('https://fakestoreapi.com/products', productData)

		onCreate(response.data)
	}
	const changeHundler = (event: React.ChangeEvent<HTMLInputElement>) => {
		setValue(event.target.value)
	}
	return (
		<form onSubmit={submitHandler}>
			<input
				type='text'
				className="border py-2 px-4 md-2 w-full outline-0"
				placeholder="Enter product title"
				value={value}
				onChange={changeHundler}
			/>
			<button
				type="submit"
				className="py-2 px-4 border bg-yellow-400 hover:bg-yellow-300">
				Create
			</button>
			{error && <p className='text-center text-red-600'>{error}</p>}
		</form>


	)
};

export default CreateProduct;
