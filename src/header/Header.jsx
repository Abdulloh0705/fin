import '../header/header.scss';

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="we_all">
            <div className="nav_we">
              <img src="goup.png" alt="" className="goup" />
              <div className="nav">
                <li><a href="" className='nav_link'>Home</a></li>
                <li><a href="" className='nav_link'>About Us</a></li>
                <li><a href="" className='nav_link'>How it Works</a></li>
                <li><a href="" className='nav_link'>Our Services</a></li>
                <li><a href="" className='nav_link'>More</a> <img src="ppp.png" alt="" className="str" /> </li>

              </div>
              <button className="cont">
              Contact Us
              </button>
            </div>
          </div>
          <div className="fin">
            <div className="fin1">
              <h1 className="fin2">Financial
                Solutions.</h1>
              <p className="fin3">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics</p>
            </div>
            <button className="lest">Let’s Talk</button>
          </div>


        </div>
      </header>
    </>
  );
};

export default Header;
