const getProductRoute = (id: string, searchparams: URLSearchParams) => {
  return `/products/${id}?${searchparams.toString()}`;
};

export default getProductRoute;
