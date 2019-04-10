export function size (state = [], action) {
	switch (action.type) {
		case "ADD_SIZE":
			return action.sizes;
		case "TOGGLE_SIZE":
		return state.map(v => v === action.data ? {size: action.data.size, checked: !action.data.checked} : v);
		default:
			return state;
	}
}

// case "HANDLE_FILTER":
// 			return [...state,(action.data.Product.data).filter(v => 
// 			{	console.log(v)
// 				return (!v.availableSizes.includes(size.size))
// 			})];

export function filter (state = [], action) {
	// console.log(state, action, "filter reducer")
	switch (action.type) {
		case "HANDLE_FILTER":
			console.log(state,size);
			return (action.data.Product.data).filter(v => 
			{
				return (!v.availableSizes.includes(size.size))
			});
		default:
			return state;
	}
}

export function Product (state = [], action) {
	// console.log(state, action , "products")

	switch (action.type) {
		case "ADD_PRODUCT":
			return {data: action.data, loading: action.loading, isOpen: action.isOpen}
		case "TOGGLE_CART":
			const cartObj = Object.create(state)
			cartObj.isOpen = !action.data;
			return cartObj;
		case "OPEN_CART":
			const openCart = Object.create(state)
			openCart.isOpen = action.data;
			return openCart;
		case "ADD_TO_CART":
			// var newObj = Object.create(state)
			// newObj.isOpen = action.data;
			return state;
		case "SORT_PRODUCT":
			const sortProduct = Object.create(state)
			sortProduct.data = action.sorted;
			return sortProduct
			// console.log(state,"state", action.sorted, "action data");cart
		default:
			return state;
	}
}

export function cart (state = [], action) {
	// console.log(state, action , "cart")
	switch (action.type) {
		case "TOGGLE":
			// return action.state.isOpen = !action.state.isOpen;
		default:
			return state;
	}
}

