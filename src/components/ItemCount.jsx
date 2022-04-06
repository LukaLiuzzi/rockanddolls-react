import React from 'react';

const ItemCount = ({ counter, addItem, removeItem, addToCart, stock }) => {
	return (
		<div className='d-flex justify-center items-center flex-col'>
			<div>
				<button className='btn btn-danger' onClick={removeItem}>
					-
				</button>
				<span className='badge fs-4'>{counter}</span>
				<button className='btn btn-success' onClick={addItem}>
					+
				</button>
			</div>
			<div className='mt-2'>
				<button className='btn btn-outline-info' onClick={addToCart}>
					Agregar al carrito
				</button>
			</div>
			<span className='badge fs-4'>Stock: {stock}</span>
		</div>
	);
};

export default ItemCount;