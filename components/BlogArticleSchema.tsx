interface BlogArticleSchemaProps {
  title?: string;
  headline?: string;
  description: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  breadcrumbs?: { name: string; url: string }[];
}

export function BlogArticleSchema({
  title,
  headline,
  description,
  url,
  datePublished,
  dateModified,
  breadcrumbs,
}: BlogArticleSchemaProps) {
  const resolvedTitle = headline ?? title ?? "";
  const article = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: resolvedTitle,
    description,
    url,
    datePublished,
    ...(dateModified ? { dateModified } : {}),
    author: {
      "@type": "Organization",
      name: "Creatdrop",
      url: "https://creatdrop.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Creatdrop",
      url: "https://creatdrop.com",
      logo: {
        "@type": "ImageObject",
        url: "https://creatdrop.com/og-image.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };

  const customItems = breadcrumbs
    ? breadcrumbs.map((b, i) => ({ "@type": "ListItem", position: i + 2, name: b.name, item: b.url }))
    : [{ "@type": "ListItem", position: 2, name: "Blog", item: "https://creatdrop.com/blog" },
       { "@type": "ListItem", position: 3, name: resolvedTitle, item: url }];

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://creatdrop.com" },
      ...customItems,
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(article) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumb) }}
      />
    </>
  );
}
