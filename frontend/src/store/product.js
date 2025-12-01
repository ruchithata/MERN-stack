import {create} from "zustand";

const API_BASE = import.meta.env.VITE_API_URL;

export const useProductStore = create((set) =>({
    products: [],
    setProducts: (products) => set({products}),
    createProduct: async(newProduct) => {
        if(!newProduct.name || !newProduct.image || !newProduct.price) {
            return {success:false, message:"Please fill in all the fields"}
        }
        const res = await fetch(`${API_BASE}/api/product`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(newProduct),
        });
        const data = await res.json();
        set((state) => ({ products: [...state.products, data.data] }));
        return {success: true, message: "Product created successfully"}
    },

    fetchProducts: async() => {
        const res = await fetch(`${API_BASE}/api/product`);
        const data = await res.json();
        set({ products: data.data});
    },

    deleteProduct: async(pid) => {
        const res = await fetch(`${API_BASE}/api/product/${pid}`, {
            method: "DELETE",
        });
        const data = await res.json();
        if(!data.success) return {success: false, messeage: data.message};
        // updates the ui immediately, without refresh
        set(state => ({products: state.products.filter(product => product._id !== pid)}));
        return {success: true, message: data.message};
    },

    updateProduct: async(pid, updateProduct) => {
        const res = await fetch(`${API_BASE}/api/product/${pid}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(updateProduct),
        });
        const data = await res.json();
        if(!data.success) return {success: false, message: data.message};
        set((state) => ({             //this is for updating the changed data without reloading the page again
            products: state.products.map((product) => (product._id===pid?data.data:product)),
        }));
        return {success: true, message: data.message};
    }
}));
