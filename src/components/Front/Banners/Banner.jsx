import "./Banners.css";

export default function Banner({ banner }) {
  return (
    <div className="carousel-item active" data-bs-interval="7000">
      <img className="banner-img d-block" src={`${banner.image}`} alt="" />
      <div className="carousel-caption">
        <h5 className="banner-title">{banner.name}</h5>
      </div>
    </div>
  );
}
