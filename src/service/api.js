import fetch from '../config/fetch'

export const getAllUsers = (payload) => fetch('/management/getAllUsers', payload, "GET");

export const getUsersCount = () => fetch('/management/getUsersCount', {}, "GET");

export const getAllProducts = (payload) => fetch('/management/getAllProducts', payload, "GET");

export const getProductsCount = () => fetch('/management/getProductsCount', {}, "GET");

export const changeProductChecked = (product_id, isCheck) => fetch(`/management/changeProductChecked/${product_id}/${isCheck}`, {}, "GET")

export const getAllComments = (payload) => fetch('/management/getAllComments', payload, "GET");

export const getCommentCount = () => fetch('/management/getCommentCount', {}, "GET");
