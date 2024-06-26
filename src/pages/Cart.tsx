import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { CartList } from '../components/CartList';
import { EmpytCart } from '../components/EmpytCart';

const Cart = () => {
  const { cart, total, cartAmount } = useContext(CartContext);

  return (
    <section className="layout flex flex-col gap-6">
      {cartAmount === 0 ? (
        <EmpytCart />
      ) : (
        <>
          <h1 className="font-medium text-4xl  w-full text-center">
            Meu carrinho
          </h1>
          <div className="flex flex-col">
            {cart.map((product) => (
              <CartList key={product.id} {...product} />
            ))}
          </div>
        </>
      )}

      {cartAmount !== 0 && <strong className="text-2xl">Total:{total}</strong>}
    </section>
  );
};

export default Cart;
