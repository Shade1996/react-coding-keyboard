import React from 'react';
declare const Keys: React.FC<{
    style?: React.CSSProperties;
    className?: string;
    onKey?: (key: string) => void;
    onBackspace?: () => void;
    show?: boolean;
    onHide?: () => void;
}>;
export default Keys;
