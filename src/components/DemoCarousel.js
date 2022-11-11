import Slider from "react-slick";
export default function DemoCarousel() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div className="carousel-item active">
        <div className="container">
          <div className="row p-5">
            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img
                className="img-fluid"
                src="https://n1s2.hsmedia.ru/39/e5/fa/39e5faa5ea8958df09fc8d21544990ac/728x486_1_5cf28f10a77d28b9248e692c7be25ff7@2000x1334_0xac120003_16016889571658521834.jpeg"
                alt="main"
              />
            </div>
            <div className="col-lg-6 mb-0 d-flex align-items-center">
              <div className="text-align-left align-self-center">
                <h1 className="h1 text-warning">
                  <b>Furniture </b> store
                </h1>
                <h3 className="h2">
                  Інтернет магазин мебелі та декору для вашого дому
                </h3>
                <p>щось цікаве про магазин....</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <div className="row p-5">
            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img
                className="img-fluid"
                src="https://i1.poltava.to/uploads/2022/08/19/photo_20220819_160219.jpg"
                alt="work-space"
              />
            </div>
            <div className="col-lg-6 mb-0 d-flex align-items-center">
              <div className="text-align-left">
                <h1 className="h1">Широкий асортимент мебелі </h1>
                <h3 className="h2"></h3>
                <p>Приємні ціни та подарунки при покупці від 10000 грн</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="container">
          <div className="row p-5">
            <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
              <img
                className="img-fluid"
                src="https://kyiv-city.com/sites/default/files/inline-images/image2_28.jpg"
                alt="decor"
              />
            </div>
            <div className="col-lg-6 mb-0 d-flex align-items-center">
              <div className="text-align-left">
                <h1 className="h1">Декор для дому </h1>
                <h3 className="h2">Створи затишок у своїй оселі</h3>
                <p>
                  We bring you 100% free CSS templates for your websites. If you
                  wish to support TemplateMo, please make a small contribution
                  via PayPal or tell your friends about our website. Thank you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  );
}
