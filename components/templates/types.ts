export type LayoutProps = {
  className?: string;
  hasHeader?: boolean;
  hasFooter?: boolean;
  metaData?: MetaDataProps;
  children: React.ReactNode;
  hasInformationalAlert?: boolean;
};

export type MetaDataProps = {
  title?: string;
  description?: string;
  indexable?: boolean;
};
