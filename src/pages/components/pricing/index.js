import Head from "next/head";
import Link from "next/link";

const Pricing = () => {
  return (
    <div>
      <Head>
        <title>Pricing | Code Shine Technology</title>
        <meta
          name="description"
          content="Explore the affordable and competitive pricing plans offered by Code Shine Technology. We provide web development and digital solutions that meet your business needs."
        />
        <meta
          name="keywords"
          content="pricing, plans, web development pricing, digital solutions, Code Shine Technology"
        />
        <meta property="og:title" content="Pricing | Code Shine Technology" />
        <meta
          property="og:description"
          content="Discover the pricing plans offered by Code Shine Technology for web development and digital solutions."
        />
        <meta
          property="og:image"
          content="https://codeshinetechnology.com/codeshinetechnology.png"
        />
        <meta
          property="og:url"
          content="https://codeshinetechnology.com/components/pricing"
        />
        <meta property="og:site_name" content="Code Shine Technology" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="Code Shine Technology" />
      </Head>

      <div className="max-w-[1500px] mx-auto px-4">
        <h1 className="text-center text-5xl font-serif font-bold uppercase text-white my-10">
          Our Pricing Plans
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
          {/* Basic Plan */}
          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-6 py-12 text-center transition-transform transform hover:-translate-y-2 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl font-serif font-bold uppercase text-blue-400">
                Basic Plan
              </h2>
              <p className="text-5xl font-bold text-lime-400 mt-5">$299</p>
              <p className="text-lg text-white mt-3">per project</p>
              <ul className="text-left mt-6 text-white space-y-3">
                <li>
                  <span className="text-lime-400">✔️</span> 5 Pages Website
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Website Types:
                  Portfolio, Blog, Personal Website, and more
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Responsive Design
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Basic SEO Setup
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Hosting Setup
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> 2 Revisions
                </li>
              </ul>
            </div>

            <button className="mt-8 px-6 py-2 border shadow-lg shadow-slate-950 text-white font-bold rounded">
              Continue with{" "}
              <a
                className="text-blue-400 underline hover:text-blue-600"
                href="https://www.fiverr.com/shah_jalal_web"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiverr
              </a>{" "}
              or{" "}
              <a
                className="text-blue-400 underline hover:text-blue-600"
                href="https://www.upwork.com/freelancers/~01da9284068e6bfcca"
                target="_blank"
                rel="noopener noreferrer"
              >
                UpWork
              </a>{" "}
              for Discount
            </button>
          </div>

          {/* Standard Plan - Recommended */}
          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-6 py-12 text-center transition-transform transform hover:-translate-y-2 border-4 border-yellow-500 relative bg-gray-900 flex flex-col justify-between h-full">
            <div>
              <span className="absolute top-0 right-0 bg-yellow-500 text-white text-sm px-3 py-1 font-bold uppercase">
                Recommended
              </span>
              <h2 className="text-4xl font-serif font-bold uppercase text-blue-400">
                Standard Plan
              </h2>
              <p className="text-5xl font-bold text-lime-400 mt-5">$499</p>
              <p className="text-lg text-white mt-3">per project</p>
              <ul className="text-left mt-6 text-white space-y-3">
                <li>
                  <span className="text-lime-400">✔️</span> 10 Pages Website
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Website Types:
                  Business, Corporate, Startup, Non-profit, and more
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Responsive Design
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> SEO Setup
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Hosting Setup
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> 5 Revisions
                </li>
              </ul>
            </div>

            <button className="mt-8 px-6 py-2 border shadow-lg shadow-slate-950 text-white font-bold rounded">
              Continue with{" "}
              <a
                className="text-blue-400 underline hover:text-blue-600"
                href="https://www.fiverr.com/shah_jalal_web"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiverr
              </a>{" "}
              or{" "}
              <a
                className="text-blue-400 underline hover:text-blue-600"
                href="https://www.upwork.com/freelancers/~01da9284068e6bfcca"
                target="_blank"
                rel="noopener noreferrer"
              >
                UpWork
              </a>{" "}
              for Discount
            </button>
          </div>

          {/* Premium Plan */}
          <div className="shadow-lg shadow-blue-500 hover:shadow-blue-600 hover:shadow-2xl px-6 py-12 text-center transition-transform transform hover:-translate-y-2 flex flex-col justify-between h-full">
            <div>
              <h2 className="text-4xl font-serif font-bold uppercase text-blue-400">
                Premium Plan
              </h2>
              <p className="text-5xl font-bold text-lime-400 mt-5">$999</p>
              <p className="text-lg text-white mt-3">per project</p>
              <ul className="text-left mt-6 text-white space-y-3">
                <li>
                  <span className="text-lime-400">✔️</span> Unlimited Pages
                  Website
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Website Types:
                  E-Commerce, Large Scale Web Applications, Custom Solutions,
                  and more
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Responsive Design
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Basic SEO Setup
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Hosting Setup
                </li>
                <li>
                  <span className="text-lime-400">✔️</span> Unlimited Revisions
                </li>
              </ul>
            </div>

            <button className="mt-8 px-6 py-2 border shadow-lg shadow-slate-950 text-white font-bold rounded">
              Continue with{" "}
              <a
                className="text-blue-400 underline hover:text-blue-600"
                href="https://www.fiverr.com/shah_jalal_web"
                target="_blank"
                rel="noopener noreferrer"
              >
                Fiverr
              </a>{" "}
              or{" "}
              <a
                className="text-blue-400 underline hover:text-blue-600"
                href="https://www.upwork.com/freelancers/~01da9284068e6bfcca"
                target="_blank"
                rel="noopener noreferrer"
              >
                UpWork
              </a>{" "}
              for Discount
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
