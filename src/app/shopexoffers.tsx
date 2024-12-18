
import Image from 'next/image';

const ShopexOffers = () => {
  const offers = [
    {
      id: 1,
      title: '24/7 Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      icon: '/icons/support-icon1.png', // Add your icon paths
    },
    {
      id: 2,
      title: 'Fast Delivery',
      description: 'Unlimited free delivery for all orders.',
      icon: '/icons/support-icon2.png',
    },
    {
      id: 3,
      title: 'Secure Payments',
      description: 'Enjoy safe and secure payments with us.',
      icon: '/icons/support-icon3.png',
    },
  ];

  return (
    <div className="offers-section">
      <h2>What Shopex Offers!</h2>
      <div className="offers-container">
        {offers.map((offer) => (
          <div className="offer-card" key={offer.id}>
            <Image
              src={offer.icon}
              alt={offer.title}
              width={50}
              height={50}
              className="offer-icon"
            />
            <h3>{offer.title}</h3>
            <p>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShopexOffers;


