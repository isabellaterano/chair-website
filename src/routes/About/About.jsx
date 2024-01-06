import "./About.css";

const About = () => {
  return (
    <div className="color">
      <div className="container-about">
        <div className="title">
          <h1>About Us</h1>
        </div>
        <div className="about-us">
          <div className="img-men">
            <img src="src\assets\image8.jpg" className="men-working" />
          </div>
          <div className="about-text">
            <p>
              Our journey began with a simple belief, that a chair is not merely
              an object, an integral part of your life, witnessing your moments
              of joy, contemplation, and relaxation. We embarked on a quest to
              curate a collection that goes beyond the ordinary, blending form
              and function seamlessly. Every chair in our store carries the
              essence of thoughtful design and meticulous craftsmanship, from
              classic elegance to avant-garde aesthetics.
            </p>

            <p>
              Our commitment extends beyond selling furniture, about creating an
              experience. Our knowledgeable staff is here to guide you, ensuring
              that you find the perfect chair that resonates with your unique
              style and comfort preferences. We understand that a well-crafted
              chair is more than an accessory, a statement, a reflection of your
              personality and taste.
            </p>
            <p className="last-text">
              Join us on this journey of comfort, style, and discovery. Let our
              chairs become an integral part of your story, making your space a
              canvas where memories are created and comfort is celebrated.
              Welcome to our chair furniture store, where every seat tells a
              tale and every purchase is a step toward a more comfortable and
              stylish life.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
