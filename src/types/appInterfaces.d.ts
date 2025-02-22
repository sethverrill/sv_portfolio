export interface Project {
  title: string;
  description: string;
  tools: string[];
  liveLink?: string;
  repoLink?: string;
}

export interface ProfilePicProps {
  to?: string;
  size?: string;
  altText?: string;
}

export interface ProjectPictureProps {
  to?: string;
  size?: string;
  altText?: string;
}

export interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export interface FooterProps {
  showHomeLink?: boolean;
}