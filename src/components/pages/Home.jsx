
import edu from '../../assets/edu.png';
import story from '../../assets/story.png';


function Home() {
  return (
    <>

      {/* Qualification Section (Image Left + Text Right) */}
      <div className="container my-3  ">
        <h1 className="fw-bold my-2 mx-1">
          Qualification <b className="text-warning">.</b>
        </h1>


        <div className="d-flex flex-wrap justify-content-between align-items-start">
          {/* LEFT SIDE (Image) */}
          <div className="text-center order-1 order-md-0 mb-4 mb-md-0 ">
            <img
              src={edu}
              alt="Education"
              style={{ maxWidth: '450px' }}
              className='img-flex'

            />
          </div>
          {/* RIGHT SIDE (Text) */}
          <div className=" flex-end py-5 my-3">

            <div className="d-flex align-items-center mb-2 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-info"
              >
                <path d="M18 6 7 17l-5-5"></path>
                <path d="m22 10-7.5 7.5L13 16"></path>
              </svg>
              <h5 className="px-3 mb-0">
                Bachelor's of Science (Computer Science)
              </h5>
            </div>
            <p className="mx-5 text-secondary">Virtual University of Pakistan, 2025</p>

            {/* Qualification 2 */}
            <div className="d-flex align-items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-info"
              >
                <path d="M18 6 7 17l-5-5"></path>
                <path d="m22 10-7.5 7.5L13 16"></path>
              </svg>
              <h5 className="px-3 mb-0">Intermediate (FSc. Pre-Engineering)</h5>
            </div>
            <p className="mx-5 text-secondary">Aspire Group of Colleges, 2021</p>

            {/* Qualification 3 */}
            <div className="d-flex align-items-center mb-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-info"
              >
                <path d="M18 6 7 17l-5-5"></path>
                <path d="m22 10-7.5 7.5L13 16"></path>
              </svg>
              <h5 className="px-3 mb-0">Matric (Computer Science)</h5>
            </div>
            <p className="mx-5 text-secondary">
              Govt. Comprehensive Higher Secondary School, 2019
            </p>
          </div>
        </div>
      </div>

      {/* My Story Section (Image Right + Text Left) */}

      <div className="container my-5">
  <div className="row align-items-center">
    {/* LEFT SIDE (Text) */}
    <div className="col-md-8">
      <h1 className="fw-bold mb-4">
        My Story <b className="text-warning">.</b>
      </h1>
      <p className="fs-5 text-start lh-lg">
        I’m Haroon Ali, a passionate Front-End Developer and Computer Science graduate
        driven by creativity, innovation, and a deep desire to make technology more impactful
        for people. I’m currently interning at BitKnox Global, where I’m gaining real-world
        experience in modern web development practices.
        <br /><br />
        Alongside this, I’m sharpening my front-end expertise through a React.js course at
        Bano Qabil, continuously learning to build fast, responsive, and visually appealing
        applications. My journey in tech started with curiosity and has evolved into a mission —
        to craft digital experiences that are both functional and inspiring.
        <br /><br />
        Beyond coding, I’m also enjoying my hobbies, where I aim to always remain fit.
        Reading financial books and gaining knowledge about the stock exchange is my passion.
        I love music, and guitar has been my friend for over 4 years now. I believe in maintaining
        a perfect balance between work, hobbies, and learning advanced skills. These give me
        motivation to keep both a healthy lifestyle and a stable professional life.
      </p>
    </div>

    {/* RIGHT SIDE (Image) */}
    <div className="col-md-4 text-center">
      <img
        src={story}
        alt="My Story"
        className="img-flex"
        style={{ maxWidth: '450px' }}
      />
    </div>
  </div>
</div>

    </>
  );
}

export default Home;
