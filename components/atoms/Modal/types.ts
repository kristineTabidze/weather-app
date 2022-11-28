export interface IModal {
    children: React.ReactNode;
    isOpen: boolean;
    handleClose: () => void;
}