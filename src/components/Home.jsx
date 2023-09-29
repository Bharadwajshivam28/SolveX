import React from 'react'
import vg from "../assests/2.webp"
import {AiFillGoogleCircle,AiFillAmazonCircle, AiFillInstagram, AiFillYoutube} from "react-icons/ai"
const Home = () => {
  return (
    <>
    <div className='home'>
      <main>
        <h1>Solvex</h1>
        <p>Solution to all your problems</p>
      </main>
    </div>

    <div className='home2'>
    <img src={vg} alt="Graphics" />
    <div>
      <p>
      We are your one and only solution to the tech problems you face every day . We are leading tech company whose aim is to increase the problem solvind ability in children.
      </p>
    </div>
    </div>

    <div className='home3' id="about">
      <div>
        <h1>Who we are</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non vehicula nibh, quis rutrum metus. Aliquam erat volutpat. Integer gravida felis sed nulla consequat porttitor. Integer elementum, ante sed pretium rhoncus, lacus lacus lobortis diam, quis condimentum ex est iaculis nibh. Sed lectus tortor, tincidunt sit amet condimentum quis, dictum id sem. Etiam non nulla molestie, gravida turpis vel, lacinia leo. Duis ex leo, pulvinar eu augue id, varius sodales tortor. </p>
      </div>
    </div>

    <div className='home4' id="brands">
      <div>
        <h1>Brands</h1>
        <article>
          <div
          style={{
          animationDelay:"0.3s",
          }}
          >
            <AiFillGoogleCircle />
            <p>Google</p>
          </div>

          <div
          style={{
          animationDelay:"0.5s",
          }}
          >
            <AiFillAmazonCircle />
            <p>Amazon</p>
          </div>

          <div
          style={{
          animationDelay:"0.7s",
          }}
          >
            <AiFillYoutube />
            <p>YouTube</p>
          </div>

          <div
          style={{
          animationDelay:"1s",
          }}
          >
            <AiFillInstagram />
            <p>Instagram</p>
          </div>
        </article>
      </div>
    </div>
    </>
  )

}

export default Home
