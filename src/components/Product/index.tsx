import React, { useState } from 'react';
import { IProducts } from '../../models';

interface ProductProps {
	product: IProducts
}

export function Product({ product }: ProductProps) {
	const [showDescripion, setShowDescription] = useState(false);

	return (
		<div
			className="border py-2 px-4 rounded flex flex-col items-center mb-2"
		>
			<img
				src={product.image}
				className='w-1/6'
				alt={product.title} />
			<p>
				{product.title}
			</p>
			<span className='font-bold'>{product.price}$</span>
			<button onClick={() => setShowDescription(prev => !prev)}
				className={`py-2 px-4 border ${!showDescripion ? 'bg-yellow-400' : 'bg-blue-400'}`}>
				{!showDescripion ? 'Show Details' : 'Hide Details'}
			</button>
			{showDescripion &&
				<span>
					{product.description}
				</span>}

		</div>
	)
}