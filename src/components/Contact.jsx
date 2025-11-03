/* eslint-disable no-unused-vars */
import React from "react";

export default function Contact() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <p>
          Email:{" "}
          <a href="mailto:info@mysite.com" className="underline">
            info@mysite.com
          </a>
        </p>
        <p className="mt-2">Phone: +1 234 567 890</p>
      </div>
      <form className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-2 border rounded"
        />
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
        />
        <textarea
          rows="4"
          placeholder="Message"
          className="w-full p-2 border rounded"
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 bg-[#191733] text-white rounded"
        >
          Send
        </button>
      </form>
    </div>
  );
}
