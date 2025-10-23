import { Helmet } from "react-helmet-async";

interface SeoProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
  schemaMarkup?: Record<string, unknown>;
}

export default function Seo({ title, description, path = "", image, schemaMarkup }: SeoProps) {
  const siteUrl = import.meta.env.VITE_SITE_URL;
  const canonical = `${siteUrl}${path}`;
  const ogImage = image || import.meta.env.VITE_OG_IMAGE || `${siteUrl}/og-default.jpg`;
  const twitterSite = import.meta.env.VITE_TWITTER_SITE || "@votre_compte";

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {schemaMarkup && (
        <script type="application/ld+json">{JSON.stringify(schemaMarkup)}</script>
      )}
    </Helmet>
  );
}