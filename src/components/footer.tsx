import '../styles/components/footer.scss';
// import logo from '../assets/logo.svg';

function Footer() {
  return (
    <footer id="contact">
      <hr />
      <div className="information-box">
        <div className="logo-box">
          {/* <img src={logo} alt={logo} /> */}
          <span>© Copyright 2022 </span>
          <span>Healthymenu s.r.o.</span>
        </div>
        <div className="contact">
          <div>
            <h2>Contact</h2>
            <span>
              <a href="mailto: hello@healthymenu.com" target="_blanc">
                tereza@healthymenu.com
              </a>
            </span>
            <span>
              <a href="mailto: hello@healthymenu.com" target="_blanc">
                hello@healthymenu.com
              </a>
            </span>
          </div>
          <div>
            <h2>Healthymenu s.r.o.</h2>
            <span>IČ: 06628842</span>
            <span>DIČ: CZ06628842</span>
          </div>
        </div>
        <div className="footer-news">
          <h2>Newsletter</h2>
          <span>
            Are you interested in news from the world of healthy eating, or just
            want to know about new features in our application? Enter your email
            and you won't miss a thing.
          </span>
          <div className="subscribe">
            <input placeholder="E-mail" />
            <button>Send</button>
          </div>
        </div>
        <div className="info">
          <h2>Useful information</h2>
          <span>
            <a href="/">Documents to download</a>
          </span>
          <span>
            <a href="/">Terms and Conditions</a>
          </span>
          <span>
            <a href="/">Protection of personal data</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
