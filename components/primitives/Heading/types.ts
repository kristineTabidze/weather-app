type ISize = 'xl' | 'l' | 'm' | 's' | 'xs';

type IHeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export interface IHeadingProps {
    level: IHeadingLevel;
    weight?: string;
    size?: ISize;
    children: React.ReactNode;
}
