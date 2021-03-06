const ItemCount = ({
	quantity,
	handleAddQuantity,
	handleRemoveQuantity,
	product,
	addItemToCart,
}) => {
	return (
		<>
			<div className='grid place-content-center mt-4'>
				<div className='flex items-center'>
					<button
						onClick={() => handleRemoveQuantity()}
						className='bg-secondary text-primary font-bold py-2 px-4 rounded'
					>
						-
					</button>
					<span className='px-2 text-secondary font-bold'>{quantity}</span>
					<button
						onClick={() => handleAddQuantity()}
						className='bg-secondary text-primary font-bold py-2 px-4 rounded'
					>
						+
					</button>
				</div>
			</div>
			<button
				onClick={() => {
					addItemToCart({ ...product, quantity });
				}}
				className='bg-secondary text-primary font-bold py-2 px-4 rounded block mx-auto mt-4'
			>
				Agregar al carrito
			</button>
		</>
	);
};

export default ItemCount;
