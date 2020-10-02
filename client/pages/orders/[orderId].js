import Router from 'next/router';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';

import useRequest from '../../hooks/use-request';

const OrderShow = ({ order, currentUser }) => {
  const [timeLeft, setTimeLeft] = useState(0);
  const { doRequest, errors } = useRequest();

  const onPayment = (token) => {
    doRequest({
      url: '/api/payments',
      method: 'post',
      body: {
        orderId: order.id,
        token,
      },
      onSuccess: (payment) => Router.push('/orders'),
    });
  };

  useEffect(() => {
    const findTimeLeft = () => {
      const msLeft = new Date(order.expireAt) - new Date();
      setTimeLeft(Math.round(msLeft / 1000));
    };

    findTimeLeft();
    const timerId = setInterval(findTimeLeft, 1000);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  if (timeLeft < 0) {
    return <div>Order expired</div>;
  }

  return (
    <div>
      Time left to pay: {timeLeft} seconds
      <StripeCheckout
        token={({ id }) => {
          onPayment(id);
        }}
        stripeKey="pk_test_51H6p4ZL7LWbwA7NY4tWGtaVkGoOARHZSBciSxlgMZqauvXPcxz8OUsAUKIIOvPcdPjtBohPM1tfxqsNFj82kjiMH008ceE1K9R"
        amount={order.ticket.price * 100}
        email={currentUser.email}
        locale="en"
      />
      {errors}
    </div>
  );
};

OrderShow.getInitialProps = async (context, client) => {
  const { orderId } = context.query;
  const { data } = await client.get(`/api/orders/${orderId}`);

  return { order: data };
};

export default OrderShow;
