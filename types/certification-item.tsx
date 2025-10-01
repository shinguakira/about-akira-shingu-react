type CertificationItemProps = {
  id?: number; // index of certification list (optional for API data)
  name: string; // name of certification
  organization?: string; // organization name (for local data)
  issuer?: string; // issuer name (for API data)
  date: string; // date of certified
  verifyLink?: string; // link to verify certification
  image?: string; // image URL (for API data)
  className?: string; // additional class name
};
