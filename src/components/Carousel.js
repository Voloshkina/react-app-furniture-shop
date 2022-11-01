export default function Carousel() {
  return (
    <div
      id="template-mo-zay-hero-carousel"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#template-mo-zay-hero-carousel"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div className="container">
            <div className="row p-5">
              <div className="mx-auto col-md-8 col-lg-6 order-lg-last">
                <img
                  className="img-fluid"
                  src="https://admin.cgon.ru/storage/blog_posts/September2019/tPsNvn0Ub2U6NCPmKs4r.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left align-self-center">
                  <h1 className="h1 text-warning">
                    <b>Crazy Nuts</b> Shop
                  </h1>
                  <h3 className="h2">
                    Інтернет магазін горіхів та сухофруктів
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
                  src="./assets/img/banner_img_02.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1">Акції тіжня </h1>
                  <h3 className="h2">Aliquip ex ea commodo consequat</h3>
                  <p>При замовленні подарункового набору в подарунок...</p>
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
                  src="./assets/img/banner_img_03.jpg"
                  alt=""
                />
              </div>
              <div className="col-lg-6 mb-0 d-flex align-items-center">
                <div className="text-align-left">
                  <h1 className="h1">Доставка за наш рахунок </h1>
                  <h3 className="h2">
                    Прі замовленні від 2000грн доставка за рахунок магазину
                  </h3>
                  <p>
                    We bring you 100% free CSS templates for your websites. If
                    you wish to support TemplateMo, please make a small
                    contribution via PayPal or tell your friends about our
                    website. Thank you.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev text-decoration-none w-auto ps-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="prev"
      >
        <i className="fas fa-chevron-left"></i>
      </a>
      <a
        className="carousel-control-next text-decoration-none w-auto pe-3"
        href="#template-mo-zay-hero-carousel"
        role="button"
        data-bs-slide="next"
      >
        <i className="fas fa-chevron-right"></i>
      </a>
    </div>
  );
}
