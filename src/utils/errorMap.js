const errorM = {
  ALREADY_REGISTERED: 409,
  ERRO_USER: 400,
};

const mapError = (err) => errorM[err] || 500;

// console.log(mapError('PRODUCT_NOT_FOUND')); Exemplo de como o mapError funciona
module.exports = {
  errorM,
  mapError,
};