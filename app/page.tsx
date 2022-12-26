"use client";
import Image from "next/image";



import Banner1 from "../images/banner/banner1.jpg";
import Profile from "../images/banner/man.png";
import phone from "../images/icons/phone.png";
import sms from "../images/icons/sms.png";
import Email from "../images/icons/email-sign.png";
import Website from "../images/icons/internet.png";
// Social Media Icons
import Facebook from "../images/icons/facebook.png";
import Messenger from "../images/icons/messenger.png";
import Instagram from "../images/icons/instagram.png";
import Twitter from "../images/icons/twitter.png";
import Linkedin from "../images/icons/linkedin.png";
import Skype from "../images/icons/skype.png";
import Whatsapp from "../images/icons/whatsapp.png";
import Washington from "../images/icons/washington.png";

import Link from "next/link";




import {signIn} from "next-auth/react" 



export default function Home() {
  return (
    <div className="container max-w-md mx-auto font-poppins">
      {/* Banner  */}
      <Image className="h-44" src={Banner1} alt="Banner1" />
      <Image className="w-40 -mt-20 mx-auto mb-2" src={Profile} alt="Profile" />

      {/* Title Header  */}
      <h4 className="text-center">Real Estate</h4>
      <button onClick={()=>{signIn();}}>Login</button>
      <h2 className="text-center text-3xl font-dancing">Michael Jackson</h2>
      {/* Social Media Icons  */}
      <div className="gap-4 columns-4 mx-auto px-4 mt-3">
        {/* Phone For Call */}
        <div className="phone text-center">
          <Link href="tel:=12345678909">
            <Image className="w-14 mx-auto" src={phone} alt="Phone" />
            <h5>Phone </h5>
          </Link>
        </div>
        {/* Sms  */}
        <div className="sms text-center">
          <Link href="sms:+123123123123">
            <Image className="w-14 mx-auto" src={sms} alt="Message" />
            <h5>Message</h5>
          </Link>
        </div>

        {/* Email  */}
        <div className="email text-center">
          <Link href="mailto:demo@demo.com">
            <Image className="w-14 mx-auto" src={Email} alt="Email" />
            <h5>Email</h5>
          </Link>
        </div>

        {/* Website  */}
        <div className="website text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Website} alt="Website" />
            <h5>Website</h5>
          </Link>
        </div>
      </div>
      <div className="gap-4 columns-4 mx-auto px-4 mt-3">
        {/* Facebook  */}
        <div className="facebook text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Facebook} alt="Facebook" />
            <h5>Facebook</h5>
          </Link>
        </div>

        {/* Messenger  */}
        <div className="instagram text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Messenger} alt="Messenger" />
            <h5>Messenger</h5>
          </Link>
        </div>

        {/* Instagram  */}
        <div className="instagram text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Instagram} alt="Instagram" />
            <h5>Instagram</h5>
          </Link>
        </div>

        {/* Twitter  */}
        <div className="twitter text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Twitter} alt="Twitter" />
            <h5>Twitter</h5>
          </Link>
        </div>
      </div>
      <div className="gap-4 columns-4 mx-auto px-4 mt-3">
        {/* Linkedin  */}
        <div className="linkedin text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Linkedin} alt="Linkedin" />
            <h5>Linkedin</h5>
          </Link>
        </div>
        {/* Skype  */}
        <div className="skype text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Skype} alt="Skype" />
            <h5>Skype</h5>
          </Link>
        </div>
        {/* Whatsapp  */}
        <div className="linkedin text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Whatsapp} alt="Whatsapp" />
            <h5>Whatsapp</h5>
          </Link>
        </div>
        {/* Washington  */}
        <div className="washington text-center">
          <Link href="#">
            <Image className="w-14 mx-auto" src={Washington} alt="Washington" />
            <h5>Address</h5>
          </Link>
        </div>
      </div>

      {/* About */}
      <h1 className="text-4xl mt-4 text-center font-dancing"> About </h1>
      <p className="p-3 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>

      {/* Testimonials  */}
      <h1 className="text-4xl mt-4 text-center font-dancing"> Testimonials </h1>
      <section className="bg-white">
        <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
          <figure className="max-w-screen-md mx-auto">
            <svg
              className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
              viewBox="0 0 24 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                fill="currentColor"
              />
            </svg>
            <blockquote>
              <p className="text-1xl font-medium text-gray-900">
                Flowbite is just awesome. It contains tons of predesigned
                components and pages starting from login screen to complex
                dashboard. Perfect choice for your next SaaS application.
              </p>
            </blockquote>
            <figcaption className="flex items-center justify-center mt-6 space-x-3">
              <Image
                className="w-6 h-6 rounded-full"
                src={Profile}
                alt="profile picture"
              />
              <div className="flex items-center divide-x-2 divide-gray-500 ">
                <div className="pr-3 font-medium text-gray-900 ">
                  Micheal Gough
                </div>
                <div className="pl-3 text-sm font-light text-gray-500 ">
                  CEO at Kraken
                </div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Contant */}
      <h1 className="text-4xl mt-4 text-center font-dancing"> Contant Me </h1>

      <section className="bg-white">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
          <form action="#" className="space-y-5">
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 d"
                placeholder="name@domain.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="block mb-1 text-sm font-medium text-gray-900 "
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 d"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 "
              >
                Your message
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 "
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="py-3 px-5 text-sm font-medium text-center text-white bg-black rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
            >
              Send message
            </button>
          </form>
        </div>
      </section>

      {/* Footer  */}

      <footer className="p-4 bg-black  md:flex md:items-center md:justify-between">
        <div className="text-center mx-auto text-white">Business Card</div>
      </footer>
    </div>
  );
}
