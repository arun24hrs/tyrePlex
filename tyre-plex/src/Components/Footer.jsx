import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="py-5 w-11/12 m-auto">
      <div className="sm:flex sm:justify-around">
      <div className="p-3 sm:">
        <div>
          <img
            src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png?tr=w-150,q-77&v=512"
            alt="Tyre Plex Logo"
            className="w-24 m-auto sm:w-32 lg:w-36"
          />
        </div>
        <div className="flex justify-center gap-3 m-4">
          <FontAwesomeIcon
            icon={faFacebookF}
            className="text-blue-700 size-6 lg:size-8"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-pink-600 size-6 lg:size-8"
          />
        </div>
      </div>
      <div className="mb-3 flex gap-8 justify-center sm:gap-12">
        <div>
          <ul className="text-gray-500 sm:text-lg">
            <li>
              <a href="https://www.tyreplex.com/about-us">Who We Are</a>
            </li>
            <li>
              <a href="https://www.tyreplex.com/dealer-details">
                Are you a Tyre Dealer?
              </a>
            </li>
            <li>
              <a href="https://www.tyreplex.com/dealer-order">
                Place Bulk Order
              </a>
            </li>
            <li>
              <a href="https://www.tyreplex.com/refund-and-return-policy">
                Refund Policy
              </a>
            </li>
          </ul>
        </div>

        <div>
          <ul className="text-gray-500 sm:text-lg">
            <li>
              <a href="https://www.tyreplex.com/contact">Contact Us</a>
            </li>
            <li>
              <a href="https://www.tyreplex.com/privacy-policy">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="https://www.tyreplex.com/terms-of-use">Terms of use</a>
            </li>
            <li>
              <a href="https://www.tyreplex.com/career">Career</a>
            </li>
            <li>
              <a href="https://www.tyreplex.com/shipping-return-policy">
                Shipping & Return Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
      </div>
      <hr />
      <div>
        <p class="mb-0 text-gray-500 text-center sm:text-lg sm:mb-10">
          ©2024 TyrePlex Technologies &amp; Commerce Pvt. Ltd. All Rights
          Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
