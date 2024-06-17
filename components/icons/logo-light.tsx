import React from "react";
import { IconSvgProps } from "@/types";

const LogoLight: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="441"
      height="65"
      fill="none"
      viewBox="0 0 441 65"
    >
      <path
        fill="#fff"
        d="M74.994 52.802l14.085-42.064h13.384l14.021 42.064h-11.153l-9.433-33.715h-.382l-9.497 33.715H74.994zm7.966-7.457V38.08h26.832v7.265H82.96zM121.598 52.802l-10.133-33.65h10.962l5.799 25.11h.255l6.055-25.11h10.325l-10.134 33.65h-13.129zM154.169 53.694c-1.7 0-3.314-.297-4.844-.892a8.364 8.364 0 01-3.76-2.868c-.977-1.36-1.466-3.165-1.466-5.417 0-2.082.404-3.76 1.211-5.035a8.82 8.82 0 013.25-3.123 15.828 15.828 0 014.462-1.785 69.533 69.533 0 014.78-1.083c2.209-.425 3.866-.765 4.971-1.02 1.104-.255 1.848-.552 2.23-.892.425-.34.638-.807.638-1.402 0-1.232-.468-2.167-1.402-2.804-.893-.638-2.082-.956-3.569-.956-.935 0-1.87.17-2.805.51-.934.34-1.699.956-2.294 1.848-.595.85-.871 2.082-.829 3.696l-9.177-.637c-.085-2.677.318-4.886 1.211-6.628.892-1.785 2.103-3.166 3.632-4.143a15.94 15.94 0 015.099-2.167 24.965 24.965 0 015.545-.637c3.357 0 6.118.637 8.285 1.912 2.167 1.232 3.761 3.038 4.78 5.417 1.062 2.337 1.594 5.184 1.594 8.54v18.674h-8.923V48.15v-4.971h-.382c-.17 1.911-.808 3.675-1.912 5.29-1.063 1.571-2.486 2.846-4.271 3.823-1.742.935-3.76 1.402-6.054 1.402zm4.27-7.52c.722 0 1.487-.127 2.294-.382a7.081 7.081 0 002.358-1.403c.765-.637 1.381-1.508 1.849-2.613.467-1.147.701-2.549.701-4.206v-1.53l1.721-.19c-.34.551-.914.998-1.721 1.338-.765.34-1.636.616-2.613.828-.978.17-1.976.361-2.996.574-.977.17-1.891.425-2.74.764-.85.298-1.551.723-2.104 1.275-.509.51-.764 1.232-.764 2.167 0 1.105.382 1.955 1.147 2.55.807.552 1.763.828 2.868.828zM198.994 43.793v-5.474h7.315c2.325 0 4.068-.468 5.231-1.404 1.162-.969 1.743-2.551 1.743-4.747 0-1.938-.548-3.407-1.646-4.408-1.066-1.033-2.729-1.55-4.989-1.55h-7.654v-5.376h7.847c2.067 0 3.924.242 5.571.726 1.679.485 3.1 1.211 4.262 2.18 1.195.936 2.099 2.131 2.713 3.584.613 1.421.92 3.1.92 5.038 0 2.486-.565 4.585-1.695 6.296-1.131 1.68-2.81 2.955-5.038 3.827-2.196.872-4.94 1.308-8.234 1.308h-6.346zm-4.892 9.01v-31.97h6.975v31.97h-6.975zM222.415 52.802V20.834h12.982c1.743 0 3.326.145 4.746.436 1.421.258 2.681.645 3.779 1.162 1.097.517 2.018 1.163 2.76 1.938a7.155 7.155 0 011.744 2.615c.388.969.581 2.05.581 3.245 0 1.13-.177 2.164-.532 3.1a6.568 6.568 0 01-1.599 2.374c-.71.678-1.598 1.243-2.664 1.695-1.065.42-2.309.71-3.729.872v.727c1.646.161 2.954.549 3.923 1.162a6.082 6.082 0 012.325 2.373c.581 1.002 1.082 2.245 1.501 3.73l1.938 6.54h-7.702l-1.501-6.055c-.291-1.292-.711-2.293-1.259-3.004a4.294 4.294 0 00-2.083-1.55c-.84-.323-1.857-.484-3.052-.484h-5.183v11.092h-6.975zm6.975-16.323h5.522c2.196 0 3.891-.42 5.086-1.26 1.195-.84 1.792-2.147 1.792-3.923 0-1.744-.565-3.02-1.695-3.826-1.098-.84-2.761-1.26-4.989-1.26h-5.716V36.48zM266.237 53.48c-2.325 0-4.408-.355-6.248-1.065-1.841-.743-3.423-1.809-4.747-3.197-1.292-1.421-2.293-3.149-3.003-5.183-.678-2.067-1.017-4.424-1.017-7.072 0-3.778.662-6.894 1.986-9.348 1.323-2.487 3.132-4.343 5.424-5.57 2.325-1.26 4.941-1.89 7.847-1.89 2.261 0 4.311.372 6.152 1.115 1.84.71 3.407 1.776 4.698 3.196 1.324 1.389 2.341 3.133 3.052 5.232.71 2.066 1.065 4.44 1.065 7.12 0 2.745-.355 5.15-1.065 7.217-.711 2.067-1.744 3.81-3.1 5.231-1.324 1.389-2.923 2.438-4.795 3.149-1.873.71-3.956 1.065-6.249 1.065zm.194-5.57c1.711 0 3.148-.42 4.311-1.26 1.162-.839 2.05-2.05 2.664-3.632.613-1.582.92-3.52.92-5.813 0-2.39-.323-4.423-.969-6.103-.613-1.679-1.517-2.954-2.712-3.826-1.195-.904-2.648-1.357-4.359-1.357-1.68 0-3.117.436-4.311 1.308-1.163.84-2.067 2.067-2.713 3.682-.613 1.614-.92 3.616-.92 6.006 0 1.743.177 3.31.533 4.698.387 1.356.92 2.503 1.598 3.44a6.658 6.658 0 002.519 2.13c1.001.485 2.147.727 3.439.727zM290.317 52.802V20.834h6.974v31.968h-6.974zm-9.446-26.107v-5.861h25.866v5.86h-25.866zM321.16 53.48c-2.325 0-4.407-.355-6.248-1.065-1.841-.743-3.423-1.809-4.747-3.197-1.291-1.421-2.292-3.149-3.003-5.183-.678-2.067-1.017-4.424-1.017-7.072 0-3.778.662-6.894 1.986-9.348 1.324-2.487 3.132-4.343 5.425-5.57 2.325-1.26 4.94-1.89 7.847-1.89 2.26 0 4.311.372 6.151 1.115 1.841.71 3.407 1.776 4.699 3.196 1.324 1.389 2.341 3.133 3.051 5.232.711 2.066 1.066 4.44 1.066 7.12 0 2.745-.355 5.15-1.066 7.217-.71 2.067-1.744 3.81-3.1 5.231-1.324 1.389-2.922 2.438-4.795 3.149-1.873.71-3.956 1.065-6.249 1.065zm.194-5.57c1.712 0 3.149-.42 4.311-1.26 1.163-.839 2.051-2.05 2.664-3.632.614-1.582.92-3.52.92-5.813 0-2.39-.322-4.423-.968-6.103-.614-1.679-1.518-2.954-2.713-3.826-1.195-.904-2.648-1.357-4.359-1.357-1.679 0-3.116.436-4.311 1.308-1.162.84-2.067 2.067-2.712 3.682-.614 1.614-.921 3.616-.921 6.006 0 1.743.178 3.31.533 4.698.388 1.356.92 2.503 1.598 3.44a6.665 6.665 0 002.519 2.13c1.001.485 2.148.727 3.439.727zM354.081 53.48c-2.486 0-4.714-.339-6.684-1.017-1.938-.71-3.601-1.744-4.989-3.1-1.356-1.388-2.39-3.1-3.1-5.134-.711-2.035-1.066-4.392-1.066-7.072 0-2.712.355-5.118 1.066-7.217.743-2.1 1.792-3.875 3.148-5.328a13.368 13.368 0 014.892-3.342c1.873-.743 3.956-1.114 6.249-1.114 1.776 0 3.423.242 4.94.726 1.518.452 2.826 1.114 3.924 1.986a9.154 9.154 0 012.567 3.197c.646 1.26.985 2.68 1.017 4.262l-6.442 1.696c0-1.357-.307-2.487-.92-3.391a5.463 5.463 0 00-2.325-2.034 6.446 6.446 0 00-3.003-.727c-.937 0-1.873.194-2.81.581-.904.356-1.744.97-2.519 1.841-.742.84-1.356 1.954-1.84 3.342-.452 1.389-.678 3.084-.678 5.086 0 2.616.371 4.73 1.114 6.345.775 1.615 1.824 2.81 3.148 3.585 1.324.742 2.81 1.114 4.456 1.114 1.777 0 3.149-.355 4.118-1.066 1.001-.743 1.711-1.679 2.131-2.81.452-1.162.694-2.389.726-3.68l6.104 1.017c-.033 1.711-.291 3.326-.775 4.843a10.639 10.639 0 01-2.277 3.924c-1.033 1.098-2.39 1.953-4.069 2.567-1.679.614-3.713.92-6.103.92zM383.274 53.48c-2.325 0-4.408-.355-6.249-1.065-1.84-.743-3.423-1.809-4.747-3.197-1.291-1.421-2.292-3.149-3.003-5.183-.678-2.067-1.017-4.424-1.017-7.072 0-3.778.662-6.894 1.986-9.348 1.324-2.487 3.132-4.343 5.425-5.57 2.325-1.26 4.941-1.89 7.847-1.89 2.26 0 4.311.372 6.151 1.115 1.841.71 3.407 1.776 4.699 3.196 1.324 1.389 2.341 3.133 3.051 5.232.711 2.066 1.066 4.44 1.066 7.12 0 2.745-.355 5.15-1.066 7.217-.71 2.067-1.743 3.81-3.1 5.231-1.324 1.389-2.922 2.438-4.795 3.149-1.873.71-3.956 1.065-6.248 1.065zm.193-5.57c1.712 0 3.149-.42 4.311-1.26 1.163-.839 2.051-2.05 2.664-3.632.614-1.582.921-3.52.921-5.813 0-2.39-.323-4.423-.969-6.103-.614-1.679-1.518-2.954-2.713-3.826-1.194-.904-2.647-1.357-4.359-1.357-1.679 0-3.116.436-4.311 1.308-1.162.84-2.066 2.067-2.712 3.682-.614 1.614-.921 3.616-.921 6.006 0 1.743.178 3.31.533 4.698.388 1.356.921 2.503 1.599 3.44a6.655 6.655 0 002.518 2.13c1.001.485 2.148.727 3.439.727zM401.471 52.802V20.834h6.975v31.968h-6.975zm1.453 0v-5.86h19.036v5.86h-19.036zM430.46 52.614v-5.048h1.239v5.048h-1.239zm-1.468-4.023v-1.025h4.191v1.025h-4.191zM433.826 52.614v-5.048h1.843l1.316 3.633h.038l1.285-3.633h1.759v5.048h-1.163l.069-3.793h-.084l-1.461 3.793h-1.009l-1.431-3.793h-.084l.069 3.793h-1.147z"
      ></path>
      <g clipPath="url(#clip0_7743_13100)">
        <path
          fill="url(#paint0_linear_7743_13100)"
          stroke="#fff"
          strokeWidth="1.741"
          d="M63.017 31.583c0 17.232-13.905 31.194-31.05 31.194C14.824 62.777.919 48.815.919 31.583S14.823.388 31.968.388c17.144 0 31.05 13.963 31.05 31.195z"
        ></path>
        <path
          fill="#fff"
          d="M29.679 19.074l.879 1.927v.007l-.88-1.932v-.002zM41.696 45.429L37.072 35.29l-.986-2.165v-.005l.988 2.17 4.622 10.138zM29.834 39.591v.191H20.63l-2.49 5.782-5.468.017 9.657-22.452 2.813 6.164-2.346 5.454h4.83l2.21 4.844zM26.928 25.132l-.005.009-.919-2.018.012.005.913 2.004z"
        ></path>
        <path
          fill="#fff"
          d="M41.727 45.494l-5.508.015-9.29-20.376-.913-2.005-2.082-4.56 5.51-.017.235.522-.002.002.881 1.932V21l1.195 2.62 4.333 9.5v.005l.986 2.165 4.623 10.137.032.067z"
        ></path>
        <path
          fill="#fff"
          d="M37.074 35.29h-.002l-.986-2.166v-.005l.988 2.17zM51.169 26.937c0 4.606-3.73 8.353-8.315 8.353H40.75l-2.296-5.036h4.4a3.312 3.312 0 003.302-3.317c0-1.83-1.48-3.317-3.302-3.317h-7.425l-2.296-5.036h9.72c4.586 0 8.316 3.747 8.316 8.353zM29.679 19.074l.879 1.927v.007l-.88-1.932v-.002z"
        ></path>
        <path
          fill="#fff"
          d="M41.696 45.429L37.072 35.29l-.986-2.165v-.005l.988 2.17 4.622 10.138z"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_7743_13100"
          x1="0.325"
          x2="64.733"
          y1="6.031"
          y2="57.571"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#802CFD"></stop>
          <stop offset="1" stopColor="#F684FF"></stop>
        </linearGradient>
        <clipPath id="clip0_7743_13100">
          <path fill="#fff" d="M0 0H63.84V64.13H0z"></path>
        </clipPath>
      </defs>
    </svg>
  );
};

export default LogoLight;