import React from "react";

const Footer = () => {
  return (
    <footer className="footer footer-center bg-neutral text-neutral-content p-6 shadow-inner">
      <aside>
        <h2 className="text-lg font-bold tracking-wide">Software Testing</h2>
        <p className="opacity-80">
          A hub for learning, sharing, and exploring Software Engineering
          concepts.
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Software Testing— All rights reserved.
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
