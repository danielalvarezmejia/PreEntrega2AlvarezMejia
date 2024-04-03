const products = [
  { id: 1, name: "Camiseta", price: 50 },
  { id: 2, name: "Pantalones", price: 80 },
  { id: 3, name: "Zapatillas", price: 120 },
  { id: 4, name: "Muñequera", price: 60 },
];

const buyProducts = () => {
  const historial = [];
  let total = 0;

  while(true){
    const idProduct = parseInt(prompt(`Ingrese el ID del producto que desea comprar:\n${products.map(el => `${el.id}: ${el.name}`).join('\n')}\nIngrese 0 para terminar la compra:`
    ));
  
    if (idProduct === 0) {
      break;
    } else {
      const product = products.find(el => el.id === idProduct);

      if (product) {
        const quantity = parseInt(prompt(`Ingrese la cantidad de ${product.name} que desea comprar:`));
        const subtotal = product.price * quantity;
        total += subtotal;
        historial.push({ product: product.name, quantity, subtotal });
      }
    };
  };

  console.log('Productos comprados:', historial);

  if (historial.length >= 3) {
    const discount = total * 0.15;
    total -= discount;
    console.log('¡Felicidades! Se aplicó un descuento del 15% por comprar 3 o más productos.')
  };

  console.log('--- Historial de compras ---');
  historial.forEach(el => {
    console.log(`${el.quantity} ${el.product} - Subtotal: S/${el.subtotal}`);
  });

  console.log(`Costo total de la compra: S/${total}`);
}

buyProducts();
