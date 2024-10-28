import { motion } from 'framer-motion';

export const PhoneInterfacePersonalized = ({ className }: { className: string }) => (
  <svg
    className={className}
    width="460"
    height="950"
    viewBox="0 0 460 950"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_dd_539_42)">
      <g clipPath="url(#clip0_539_42)">
        <path d="M20 10H440V910H20V10Z" fill="#E0F2FE" />
        <path
          d="M58.3999 635.2C58.3999 621.945 69.1451 611.2 82.3999 611.2H377.6C390.855 611.2 401.6 621.945 401.6 635.2V822.4C401.6 835.655 390.855 846.4 377.6 846.4H82.3999C69.1451 846.4 58.3999 835.655 58.3999 822.4V635.2Z"
          fill="white"
        />
        <mask id="mask0_539_42" maskUnits="userSpaceOnUse" x="58" y="611" width="344" height="236">
          <path
            d="M58.3999 635.2C58.3999 621.945 69.1451 611.2 82.3999 611.2H377.6C390.855 611.2 401.6 621.945 401.6 635.2V822.4C401.6 835.655 390.855 846.4 377.6 846.4H82.3999C69.1451 846.4 58.3999 835.655 58.3999 822.4V635.2Z"
            fill="white"
          />
        </mask>
        <g mask="url(#mask0_539_42)">
          <motion.path
            d="M316.4 689.8C316.4 702.724 305.924 713.2 293 713.2C280.077 713.2 269.6 702.724 269.6 689.8C269.6 676.877 280.077 666.4 293 666.4C305.924 666.4 316.4 676.877 316.4 689.8Z"
            fill="#FBBF24"
            initial={{
              scale: 0.3,
              opacity: 0,
              translateX: 30,
              translateY: 30,
            }}
            animate={{
              scale: [0.5, 1.2, 1.5],
              opacity: [0, 1, 0.8, 1],
              translateX: [60, 0],
              translateY: [60, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'mirror',
              times: [0, 0.3, 1],
            }}
            style={{
              filter: 'blur(2px)',
            }}
          />
          <path
            d="M237.2 656.2C237.2 710.213 193.413 754 139.4 754C85.3866 754 41.6001 710.213 41.6001 656.2C41.6001 602.187 85.3866 558.4 139.4 558.4C193.413 558.4 237.2 602.187 237.2 656.2Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M139.4 742C186.786 742 225.2 703.586 225.2 656.2C225.2 608.814 186.786 570.4 139.4 570.4C92.0141 570.4 53.6001 608.814 53.6001 656.2C53.6001 703.586 92.0141 742 139.4 742ZM139.4 754C193.413 754 237.2 710.213 237.2 656.2C237.2 602.187 193.413 558.4 139.4 558.4C85.3866 558.4 41.6001 602.187 41.6001 656.2C41.6001 710.213 85.3866 754 139.4 754Z"
            fill="#E0F2FE"
          />
        </g>
        <path d="M401.6 876.4L190.4 876.4L401.6 674.8L401.6 876.4Z" fill="#BAE6FD" />
        <path
          d="M58.3999 565.6C58.3999 561.624 61.6235 558.4 65.5999 558.4H238.4C242.376 558.4 245.6 561.624 245.6 565.6C245.6 569.577 242.376 572.8 238.4 572.8H65.5999C61.6235 572.8 58.3999 569.577 58.3999 565.6Z"
          fill="white"
        />
        <mask id="path-11-inside-1_539_42" fill="white">
          <path d="M20 794.8H440V910H20V794.8Z" />
        </mask>
        <path d="M20 794.8H440V910H20V794.8Z" fill="#E0F2FE" />
        <path d="M20 797.8H440V791.8H20V797.8Z" fill="white" mask="url(#path-11-inside-1_539_42)" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M78.2718 829.002C79.124 829.036 79.8353 829.663 79.9755 830.504L85.8628 865.828L90.8693 848.306C91.0861 847.547 91.7719 847.018 92.5609 847.001C93.3499 846.984 94.0581 847.482 94.3076 848.231L97.4974 857.8H103.4C104.394 857.8 105.2 858.606 105.2 859.6C105.2 860.594 104.394 861.4 103.4 861.4H96.2C95.4252 861.4 94.7374 860.904 94.4924 860.169L92.7323 854.889L87.1307 874.495C86.8995 875.304 86.1385 875.845 85.2982 875.797C84.458 875.75 83.7628 875.126 83.6245 874.296L77.8473 839.633L72.7463 860.037C72.5459 860.838 71.826 861.4 71 861.4H63.8C62.8059 861.4 62 860.594 62 859.6C62 858.606 62.8059 857.8 63.8 857.8H69.5946L76.4537 830.364C76.6606 829.536 77.4197 828.968 78.2718 829.002Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M107 857.8C106.006 857.8 105.2 858.606 105.2 859.6C105.2 860.595 106.006 861.4 107 861.4C107.994 861.4 108.8 860.595 108.8 859.6C108.8 858.606 107.994 857.8 107 857.8ZM101.6 859.6C101.6 856.618 104.018 854.2 107 854.2C109.982 854.2 112.4 856.618 112.4 859.6C112.4 862.583 109.982 865 107 865C104.018 865 101.6 862.583 101.6 859.6Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M215.254 832.282C218.457 830.142 222.221 829 226.073 829V830.8L226.073 829C231.237 829.001 236.19 831.052 239.842 834.704C243.493 838.356 245.545 843.308 245.545 848.473V848.473C245.545 852.324 244.403 856.089 242.264 859.291C240.124 862.494 237.083 864.989 233.525 866.463C229.966 867.937 226.051 868.323 222.274 867.571C218.496 866.82 215.027 864.965 212.304 862.242C209.58 859.519 207.726 856.049 206.974 852.272C206.223 848.494 206.609 844.579 208.082 841.021C209.556 837.463 212.052 834.422 215.254 832.282ZM226.073 832.6C222.933 832.6 219.865 833.531 217.254 835.275C214.644 837.019 212.61 839.498 211.408 842.399C210.207 845.299 209.893 848.49 210.505 851.569C211.118 854.648 212.629 857.477 214.849 859.697C217.069 861.916 219.897 863.428 222.976 864.041C226.055 864.653 229.247 864.339 232.147 863.137C235.047 861.936 237.526 859.901 239.27 857.291C241.014 854.681 241.945 851.612 241.945 848.473"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M237.985 860.385C238.688 859.682 239.828 859.682 240.531 860.385L252.873 872.728C253.576 873.43 253.576 874.57 252.873 875.273C252.17 875.976 251.031 875.976 250.328 875.273L237.985 862.931C237.282 862.228 237.282 861.088 237.985 860.385Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M351.2 841.6C351.2 840.606 352.006 839.8 353 839.8H392.6C393.594 839.8 394.4 840.606 394.4 841.6C394.4 842.594 393.594 843.4 392.6 843.4H353C352.006 843.4 351.2 842.594 351.2 841.6Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M351.2 852.4C351.2 851.406 352.006 850.6 353 850.6H392.6C393.594 850.6 394.4 851.406 394.4 852.4C394.4 853.394 393.594 854.2 392.6 854.2H353C352.006 854.2 351.2 853.394 351.2 852.4Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M351.2 863.2C351.2 862.206 352.006 861.4 353 861.4H392.6C393.594 861.4 394.4 862.206 394.4 863.2C394.4 864.195 393.594 865 392.6 865H353C352.006 865 351.2 864.195 351.2 863.2Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M87.7589 113.091C88.8133 114.145 88.8133 115.855 87.7589 116.909L73.4681 131.2L87.7589 145.491C88.8133 146.545 88.8133 148.255 87.7589 149.309C86.7045 150.363 84.9949 150.363 83.9405 149.309L67.7405 133.109C66.6861 132.055 66.6861 130.345 67.7405 129.291L83.9405 113.091C84.9949 112.036 86.7045 112.036 87.7589 113.091Z"
          fill="white"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M69.1997 131.2C69.1997 129.709 70.4085 128.5 71.8997 128.5H104.75C106.241 128.5 107.45 129.709 107.45 131.2C107.45 132.691 106.241 133.9 104.75 133.9H71.8997C70.4085 133.9 69.1997 132.691 69.1997 131.2Z"
          fill="white"
        />
        <path
          d="M150.8 131.2C150.8 125.898 155.098 121.6 160.4 121.6H299.6C304.902 121.6 309.2 125.898 309.2 131.2C309.2 136.502 304.902 140.8 299.6 140.8H160.4C155.098 140.8 150.8 136.502 150.8 131.2Z"
          fill="#BAE6FD"
        />
        <path
          d="M58.3999 224.8C58.3999 220.824 61.6235 217.6 65.5999 217.6H166.4C170.376 217.6 173.6 220.824 173.6 224.8C173.6 228.777 170.376 232 166.4 232H65.5999C61.6235 232 58.3999 228.777 58.3999 224.8Z"
          fill="white"
        />
        <path
          d="M58.3999 258.4C58.3999 254.424 61.6235 251.2 65.5999 251.2H220.4C224.376 251.2 227.6 254.424 227.6 258.4C227.6 262.377 224.376 265.6 220.4 265.6H65.5999C61.6235 265.6 58.3999 262.377 58.3999 258.4Z"
          fill="white"
        />
        <path
          d="M192.8 224.8C192.8 220.824 196.023 217.6 200 217.6H320C323.976 217.6 327.2 220.824 327.2 224.8C327.2 228.777 323.976 232 320 232H200C196.023 232 192.8 228.777 192.8 224.8Z"
          fill="white"
        />
      </g>
      <rect x="22.5" y="12.5" width="415" height="895" rx="17.5" stroke="white" strokeWidth="5" />
    </g>
    <defs>
      <filter
        id="filter0_dd_539_42"
        x="0"
        y="0"
        width="460"
        height="950"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset />
        <feGaussianBlur stdDeviation="5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.07 0" />
        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_539_42" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="5"
          operator="erode"
          in="SourceAlpha"
          result="effect2_dropShadow_539_42"
        />
        <feOffset dy="20" />
        <feGaussianBlur stdDeviation="12.5" />
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
        <feBlend mode="normal" in2="effect1_dropShadow_539_42" result="effect2_dropShadow_539_42" />
        <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_539_42" result="shape" />
      </filter>
      <clipPath id="clip0_539_42">
        <rect x="20" y="10" width="420" height="900" rx="20" fill="white" />
      </clipPath>
    </defs>
  </svg>
);
