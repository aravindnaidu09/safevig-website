export interface PressReleaseFile {
  updatedUtc?: string;
  items?: PressRelease[];
}

export interface PressRelease {
  id: string;
  title: string;
  name: string;              // short label for cards / quick refs
  publishedOn: string;       // YYYY-MM-DD
  client: {
    name: string;
    logoUrl: string;         // show client logo
    siteUrl?: string;        // click -> client site
  };
  heroImageUrl?: string;
  summary?: string;
  content?: string[];        // paragraphs
  tags?: string[];
}
