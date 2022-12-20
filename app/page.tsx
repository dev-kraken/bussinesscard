import Image from 'next/image';
import banner from "./123.jpg";
import facebook from "../icons/PNG/FrontView/Facebook.png";
import messenger from "../icons/PNG/FrontView/Messenger.png";
import instagram from "../icons/PNG/FrontView/Instagram.png";
import linkedin from "../icons/PNG/FrontView/LinkedIn.png";
import discord from "./profile.webp";

export default function Home() {
  return (
    <div className="container max-w-md mx-auto font-poppins">
      {/* Banner  */}
      <Image
        src={banner}
        alt="Picture of the author"
      /> 

      <Image className="bg-amber-100 rounded-full w-36 mx-auto -mt-16"
        src={discord}
        alt="Picture of the author"
      />

      {/* Title Header  */}
      <h4 className="font-mono text-center">Real Estate</h4>
      {/* Social Media Icons  */}
      <div className="gap-8 columns-4 mx-auto px-5">
        <div>
          <a href="">
          <Image className="hover:bg-sky-700"
            src={facebook}
            alt="Picture of the author"
          />
          <h5>Facebook </h5>
          </a>
        </div>

        <div>
          <Image
            src={messenger}
            alt="Picture of the author"
          />
          <h5>Messenger</h5>

        </div>

        <div>
          <Image
            src={instagram}
            alt="Picture of the author"
          />
          <h5>Instagram</h5>

        </div>


        <div>
          <Image
            src={linkedin}
            alt="Picture of the author"
          />
          <h5>Linkedin</h5>

        </div>
      </div>
      <div className="gap-8 columns-4 mx-auto px-5">
        <div>
          <Image
            src={facebook}
            alt="Picture of the author"
          />
          <h5>Facebook</h5>
        </div>

        <div>
          <Image
            src={messenger}
            alt="Picture of the author"
          />
          <h5>Messenger</h5>

        </div>

        <div>
          <Image
            src={instagram}
            alt="Picture of the author"
          />
          <h5>Instagram</h5>

        </div>


        <div>
          <Image
            src={linkedin}
            alt="Picture of the author"
          />
          <h5>Linkedin</h5>

        </div>
      </div>
      <div className="gap-8 columns-4 mx-auto px-5">
        <div>
          <Image
            src={facebook}
            alt="Picture of the author"
          />
          <h5>Facebook</h5>
        </div>

        <div>
          <Image
            src={messenger}
            alt="Picture of the author"
          />
          <h5>Messenger</h5>

        </div>

        <div>
          <Image
            src={instagram}
            alt="Picture of the author"
          />
          <h5>Instagram</h5>

        </div>


        <div>
          <Image
            src={linkedin}
            alt="Picture of the author"
          />
          <h5>Linkedin</h5>

        </div>
      </div>

      {/* About */}
      <h1 className="text-3xl mt-4 text-center font-sans"> About </h1>
      <p className="p-3 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>

      {/* Contant */}
      <h1 className="text-3xl mt-4 text-center font-sans"> Contant Me </h1>

      <form className="grid p-5" action="/send-data-here" method="post">
        <label htmlFor="first">First name:</label>
        <input className="bg-sky-100 focus:outline-none p-2" type="text" id="first" name="first" />
        <label htmlFor="last">Last name:</label>
        <input className="bg-sky-100 focus:outline-none p-2" type="text" id="last" name="last" />
        <label htmlFor="email">Email:</label>
        <input className="bg-sky-100 focus:outline-none p-2" type="email" id="email" name="email" />
        <label htmlFor="message">Message:</label>
        <textarea className="bg-sky-100 focus:outline-none p-2" id="message" name="message" />
      </form>


      {/* Footer  */}

      <footer className="p-4 bg-white  md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800">
        <div className="text-center mx-auto text-white">Business Card</div>
      </footer>

    </div>
  )
}
