import cv from '../../../public/cv.pdf'

function About() {
  return (
    <>
          <div className="container m-5 py-2 p-5">
        <p className=" fs-5 m-0">Hey, I am Haroon 👋🏼 </p>
        <p className="text-warning fw-bolder m-0 fs-1">FullStack</p>
        <h1 className="fw-bolder fs-2 py-2">
         Developer <b className="text-warning">.</b>
        </h1>
        <p className="fs-2 py-2">
          I'm a seasoned full stack developer with 2+ years of experience, based
          in Lahore, Pakistan, dedicated to helping you build beautiful websites
          that your users will love. I am a tech enthusiast looking for oppurtinities so that I can enhance my skill set as well as gain experience.
        </p>
        </div>
        <div className=" d-flex mx-5 px-5 ">
          <a href="/cv.pdf" download={cv} className="text-decoration-none ">
          <button className="btn btn-success d-flex fs-4 p-1.5">
            <li className="d-flex align-items-center mx-1">
              <svg
                width="30"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="m-1 align-items-center"
              >
                <path
                  d="M3.5 2C3.22386 2 3 2.22386 3 2.5V12.5C3 12.7761 3.22386 13 3.5 13H11.5C11.7761 13 12 12.7761 12 12.5V6H8.5C8.22386 6 8 5.77614 8 5.5V2H3.5ZM9 2.70711L11.2929 5H9V2.70711ZM2 2.5C2 1.67157 2.67157 1 3.5 1H8.5C8.63261 1 8.75979 1.05268 8.85355 1.14645L12.8536 5.14645C12.9473 5.24021 13 5.36739 13 5.5V12.5C13 13.3284 12.3284 14 11.5 14H3.5C2.67157 14 2 13.3284 2 12.5V2.5Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
          Download CV
          </button>
          </a>
          <a href="https://www.linkedin.com/in/haroon-ali-02266b236" target="blank" rel="noopener noreferrer">
          <button className="btn btn-info mx-2 p-2">
            <li className="d-flex">
              <svg
                width="40"
                height="30"
                viewBox="0 0 15 15"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z"
                  fill="currentColor"
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </li>
          </button>
          </a>
        </div>
        <div className="py-2 my-2 "></div>
    </>
  )
}

export default About

