export interface ITab {
    title: string;
    isActive?: boolean;
    onClick: () => void;
    href: string;
}