import fetch from '../config/fetch'

export const getAllUsers = (payload) => fetch('/management/getAllUsers', payload, "GET");

export const getUsersCount = () => fetch('/management/getUsersCount', {}, "GET");

export const getAllProducts = (payload) => fetch('/management/getAllProducts', payload, "GET");

export const getProductsCount = () => fetch('/management/getProductsCount', {}, "GET");

export const changeProductChecked = (product_id, isCheck) => fetch(`/management/changeProductChecked/${product_id}/${isCheck}`, {}, "GET")

export const getAllComments = (payload) => fetch('/management/getAllComments', payload, "GET");

export const getCommentCount = () => fetch('/management/getCommentCount', {}, "GET");

export const delComments = (comment_id) => fetch(`/management/delComments/${comment_id}`, {}, 'DELETE')

export const addSort = (payload) => fetch('/management/addSort', payload, "GET");

export const getAllSorts = (payload) => fetch('/management/getAllSorts', payload, "GET");

export const getSortCount = () => fetch('/management/getSortCount', {}, "GET");