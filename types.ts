import { ReactNode } from 'react';

export interface IDropdownOption {
    text: string;
    icon?: ReactNode;
    onClick: () => void;
}

export interface DropdownMenuProps {
    options: IDropdownOption[];
    trigger: string;
}
