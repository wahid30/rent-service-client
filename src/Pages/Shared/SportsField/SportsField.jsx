import React from "react";

const SportsField = () => {
  return (
    <div className="my-5">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://th.bing.com/th/id/R.92f6d31b20ed067ff2ec664f3144a160?rik=dC1gRUWSQRcR1g&riu=http%3a%2f%2fgreenplay.com.au%2fimages%2fsunnybank-sports-field-18.jpg&ehk=zdGPBf0J0v%2fCuBQFVxYT7%2f8amvkmsmIMp5WrBLUr7gM%3d&risl=&pid=ImgRaw&r=0")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Sports</h1>
            <p className="mb-5">
              Sportsfield Specialties is the leader in the manufacture & sale of
              sports construction equipment for all levels of play. Let our
              knowledgeable team of engineers, installation professionals, sales
              personnel, & industry partners provide you with the products and
              solutions for your athletic venue upgrade. Our commitment to
              customer service, innovation, & excellence makes us the standard
              in sports construction.
            </p>
            <button className="btn btn-primary">Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsField;
