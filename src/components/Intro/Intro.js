import './Intro.css';

const Intro = () => {
  return (
    <div id="intro">
      <p className="text-orange text-300 text-lg">Hi, my name is</p>
      <h1>Sara Lotfi</h1>
      <p className="text-md text-300 mt-3">I’m a developer and illustrator based in Uppsala, Sweden. I'm currently looking to join a team as a front end developer. Most recently I graduated from Le Wagon, a full-time web development bootcamp. Here's a few technologies I've worked with: </p>
      <div className="d-flex text-20px mt-3">
        <div className="ml-5">
          <ul className="text-orange">
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
            <li><span>JavaScript (ES6+)</span></li>
          </ul>
        </div>
        <div>
          <ul className="text-orange">
            <li><span>React</span></li>
            <li><span>Ruby on Rails</span></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Intro;