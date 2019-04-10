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

export function Product (state = [], action) {
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
		case "SORT_PRODUCT":
			const sortProduct = Object.create(state)
			sortProduct.data = action.sorted;
			return sortProduct
		default:
			return state;
	}
}

function add(state, data){
	var temp = true;
	state.forEach(obj => {
		if(obj.product.id === data.id){
			obj.quant = obj.quant + 1;
			temp = false;
		}
		return null;
		});
		if (temp){
			const obj = {
				product : data,
				quant: 1
			}
			state.push(obj)
		}
	return [...state]
}

export function cart (state = [], action) {
	switch (action.type) {
		case "ADD_TO_CART":
			return add(state, action.data);
		case "REMOVE_FROM_CART":
			console.log('remove cart');
			return state.filter(v => v.product.id !== action.id);
		default:
			return state;
	}
}

