import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const Payment = () => {
  return (
    <div className="w-11/12 m-auto">
      <h2 className="font-bold text-lg my-4">Payment Mode</h2>
      <div className="grid grid-cols-2 gap-3">
        <div className="flex items-baseline gap-3">
          <div>
            <FontAwesomeIcon icon={faCheck} className="text-green-600 w-5 h-5 align-bottom" />
          </div>
          <div>
            <p >Deposit to Account</p>
          </div>
        </div>
        <div className="flex items-baseline gap-3">
          <div>
            <FontAwesomeIcon icon={faCheck} className="text-green-600 w-5 h-5 align-bottom" />
          </div>
          <div>
            <p >Net Banking</p>
          </div>
        </div>
        <div className="flex items-baseline gap-3">
          <div>
            <FontAwesomeIcon icon={faCheck} className="text-green-600 w-5 h-5 align-bottom" />
          </div>
          <div>
            <p >Credit Card/Debit Card</p>
          </div>
        </div>
        <div className="flex items-baseline gap-3">
          <div>
            <FontAwesomeIcon icon={faCheck} className="text-green-600 w-5 h-5 align-bottom" />
          </div>
          <div>
            <p >UPI</p>
          </div>
        </div>
        <div className="flex items-baseline gap-3">
          <div>
            <FontAwesomeIcon icon={faCheck} className="text-green-600 w-5 h-5 align-bottom" />
          </div>
          <div>
            <p >Wallets (PayTM/PhonePe/Amazon etc.)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
