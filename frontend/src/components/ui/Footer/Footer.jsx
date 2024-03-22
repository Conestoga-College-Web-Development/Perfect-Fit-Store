import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <section>
        <div id='containerFooter'>
          <div id='webFooter'>
            <h3 style={{ color: 'white' }}> online store </h3>
            <p> men clothing </p>
            <p> women clothing </p>
            <p> kids clothing </p>
            <p> lorem ipsum </p>
          </div>
          <div id='webFooter'>
            <h3 style={{ color: 'white' }}> helpful link </h3>
            <p> home </p>
            <p> about </p>
            <p> contact </p>
          </div>
          <div id='webFooter'>
            <h3 style={{ color: 'white' }}> partners </h3>
            <p> zara </p>
            <p> pantaloons </p>
            <p> levis </p>
            <p> zudio </p>
            <p> + many more </p>
          </div>
          <div id='webFooter'>
            <h3 style={{ color: 'white' }}> address </h3>
            <p> building 104 </p>
            <p> central avenue </p>
            <p> N2P1N2 </p>
            <p> Canada </p>
          </div>
        </div>
        <div id='credit'>
          <a href='#'> © Perfect Fit </a> 2024
        </div>
      </section>
    </footer>
  );
};
export default Footer;
