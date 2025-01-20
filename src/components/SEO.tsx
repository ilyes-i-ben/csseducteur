import React from "react";
import { Helmet } from "react-helmet";

interface SEOProps {
  title: string;
  description: string;
  keywords?: string[];
  url?: string;
}

export function SEO({
  title,
  description,
  keywords = [],
  url = "https://csseducteur.me",
}: SEOProps) {
  const siteTitle = `${title} | CSSeducteur`;

  return (
    <Helmet>
      {/* Google search console verification */}
      <meta
        name="google-site-verification"
        content="Vr2OMRt0BsMdmjgHXIs54IJN36IeB-Y6fU3H63r16q8"
      />

      <html lang="fr" />

      <title>{siteTitle}</title>
      <meta name="description" content={description} />
      <meta
        name="keywords"
        content={["CSSeducteur", "CSS framework", ...keywords].join(", ")}
      />

      {/* Open Graph */}
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={description} />

      {/* Schema.org */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "CSSeducteur",
          description,
          url,
        })}
      </script>
    </Helmet>
  );
}
