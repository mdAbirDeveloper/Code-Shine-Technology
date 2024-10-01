import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="description"
          content="Meet the talented team behind Code Shine Technology. Learn about our experts in web development, design, and digital solutions who are dedicated to delivering exceptional results."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          property="og:title"
          content="Code Shine Technology - Web Development, Design, and More"
        />
        <meta
          property="og:description"
          content="Meet the talented team behind Code Shine Technology. Learn about our experts in web development, design, and digital solutions who are dedicated to delivering exceptional results."
        />
        <meta
          property="og:image"
          content="https://codeShineTechnology.com/cogeshinetechnology.png"
        />
        <meta property="og:url" content="https://codeShineTechnology.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="author" content="code shine technology" />
        {/* Google Analytics */}
        <script
          async
          src={`https://www.googletagmanager.com/gtag/js?id=G-BW3T99XZ9Q`}
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-BW3T99XZ9Q', {
        send_page_view: true // Standard configuration for production
      });
    `,
          }}
        />
      </Head>

      <body className="bg-slate-800 text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
