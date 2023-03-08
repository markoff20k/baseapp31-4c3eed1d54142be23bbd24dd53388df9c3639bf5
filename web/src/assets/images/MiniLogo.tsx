import * as React from 'react';

interface MiniLogoProps {
    className?: string;
    onClick?: (e?: any) => void;
}

export const MiniLogo: React.FC<MiniLogoProps> = (props: MiniLogoProps) => {
    return (
        <svg width="22.74" height="26" viewBox="0 0 206.493 230.903"><g transform="translate(6128.496 7094.569)"><path d="M3,0H126.025a3,3,0,0,1,3,3V38.746a3,3,0,0,1-3,3H35a35,35,0,0,1-35-35V3A3,3,0,0,1,3,0Z" transform="translate(-5999.419 -7052.823) rotate(180)" fill="#11ecc7"/><path d="M99.541,60.232A35.944,35.944,0,0,1,63.6,24.287a4.6,4.6,0,0,1,1.349-3.258,4.586,4.586,0,0,1-2.135.524h-97.2A4.608,4.608,0,0,1-39,16.944V-14.392A4.608,4.608,0,0,1-34.392-19H31.473A35.945,35.945,0,0,1,67.418,16.944,4.6,4.6,0,0,1,66.069,20.2a4.587,4.587,0,0,1,2.136-.524h94.2a4.608,4.608,0,0,1,4.608,4.609V55.624a4.608,4.608,0,0,1-4.608,4.608Z" transform="translate(-6089.496 -7000.233)" fill="#11ecc7"/><path d="M4.608,0h67.72a4.608,4.608,0,0,1,4.608,4.608V35.945a4.608,4.608,0,0,1-4.608,4.608H35.945A35.945,35.945,0,0,1,0,4.608v0A4.608,4.608,0,0,1,4.608,0Z" transform="translate(-5999.418 -7055.696)" fill="#f9a912"/><path d="M3,0H126.025a3,3,0,0,1,3,3V38.746a3,3,0,0,1-3,3H35a35,35,0,0,1-35-35V3A3,3,0,0,1,3,0Z" transform="translate(-6051.028 -6905.413)" fill="#11ecc7"/><path d="M4.608,0H75.276a4.608,4.608,0,0,1,4.608,4.608V35.945a4.608,4.608,0,0,1-4.608,4.608H35.945A35.945,35.945,0,0,1,0,4.608v0A4.608,4.608,0,0,1,4.608,0Z" transform="translate(-6048.559 -6903.539) rotate(180)" fill="#11ecc7"/></g></svg>
    );
};

// export const HugeCloseIcon: React.FC<CloseIconProps> = (props: CloseIconProps) => {
//     return (
//         <svg width="26" height="25" viewBox="0 0 26 25" className={props.className} onClick={props.onClick} fill="none" xmlns="http://www.w3.org/2000/svg">
//             <path d="M8.35978e-07 22.0625L9.54167 12.5L0 2.9375L2.9375 0L15.4375 12.5L2.9375 25L8.35978e-07 22.0625Z" fill="var(--icons)"/>
//             <path d="M25.4375 22.0625L15.8958 12.5L25.4375 2.9375L22.5 0L10 12.5L22.5 25L25.4375 22.0625Z" fill="var(--icons)"/>
//         </svg>
//     );
// };
