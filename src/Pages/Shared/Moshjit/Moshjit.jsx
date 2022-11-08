import React from "react";

const Moshjit = () => {
  return (
    <div className="my-5">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/07/shutterstock_1106441237.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Mosques in Brunei</h1>
            <p className="mb-5">
              Brunei hosts some of Asia’s most beautiful examples of Islamic
              architecture, blending traditional and futuristic elements with
              elegance. Culture Trip presents the best of Brunei’s religious
              structures, including Bandar Seri Begawan’s most illustrious
              mosque and one that looks like it came from the Medina in
              Marrakesh.
            </p>
            <button className="btn btn-primary">CheckOut</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moshjit;
