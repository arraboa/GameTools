import React from "react";

const SvgWitchFace = props => (
  <svg viewBox="0 0 512 512" {...props}>
    <path d="M241.3 19.377a128.165 128.165 0 0 0-12.432.52c-4.82.436-15.03 4.464-26.424 11.068-11.393 6.605-24.356 15.539-37.074 24.967-11.685 8.662-22.986 17.619-33.023 25.732 8.018-2.067 16.066-4.112 24.672-6.646 24.24-7.138 48.511-14.896 63.638-17.348l13-2.105-2.76 12.877c-7.516 35.075-24.574 70.522-37.681 103.777 18.187 8.815 43.292 12.877 66.465 12.766 22.282-.107 43.167-4.817 52.793-9.182-4.679-50.21 1.188-101.671-23.883-139.539-4.415-6.669-12.89-11.51-23.897-14.23-7.223-1.786-15.35-2.604-23.394-2.657zm-56.817 126.178c-27.02 1.417-50.225 4.193-69.466 7.951-20.989 4.1-37.278 9.389-48.496 15.026-11.219 5.637-16.886 11.646-18.44 15.574-1.554 3.928-1.195 6.838 4.078 12.476 5.274 5.64 15.875 12.367 31.756 18.461 31.761 12.188 84.254 22.267 157.484 25.776 31.968 1.531 79.626-2.162 123.579-12.77 43.06-10.392 82.2-27.958 100.476-50.803-1.128-.947-3.151-2.423-6.701-4.035-9.315-4.23-25.461-8.536-44.191-12.129-26.283-5.04-57.82-8.911-85.647-11.53.36 10.339.861 20.478 1.95 30.23l.566 5.084-4.078 3.088c-14.249 10.788-39.197 14.894-67.586 15.03-28.39.137-59.495-4.749-82.621-19.015l-6.319-3.898 2.625-6.944c3.457-9.145 7.221-18.359 11.031-27.572zm204.551 94.701c-3.1.911-6.23 1.777-9.375 2.617a29.744 29.744 0 0 1 3.104 13.27c0 7.321-2.616 13.897-6.951 19.22 10.26 1.097 20.305 2.188 30.158 3.47-6.207-13.579-12.158-27.017-16.936-38.577zm-272.217 3.293c-18.479 67.013-53.67 127.494-92.668 196.063 19.275-9.251 34.683-24.222 47.909-42.067 9.341-14.154 18.046-28.475 25.859-42.593 1.058-2.032 2.217-4.032 3.248-6.065.04-.073.074-.145.113-.219 7.423-14.638 14.208-29.207 20.93-42.365l16.242 7.742c-6.023 13.588-13.151 27.987-21.006 42.639-.079.156-.16.305-.24.46-1.262 2.352-2.462 4.664-3.77 7.028-6.641 12.687-13.805 25.5-22.2 37.643-1.07 1.546-2.237 3.031-3.344 4.555-18.434 28.085-39.589 55.518-63.16 79.353a408.978 408.978 0 0 0 20.517-3.254c27.946-27.832 57.97-55.25 65.44-79.834l17.22 5.235c-7.462 24.558-27.432 45.877-48.435 66.402 11.276-3.418 21.633-7.36 29.687-11.48 15.417-12.521 23.74-28.25 29.164-45.364 6.93-21.863 8.394-45.602 12.373-65.582l17.655 3.516c-3.58 17.967-5.055 42.854-12.87 67.506-4.023 12.692-9.932 25.42-18.755 36.964.296.188.6.373.894.561l.053-.016.111.12c14.97 9.584 27.61 20.046 38.541 32.128 11.909-53.981 13.47-106.582 13.928-164.42l18 .141c-.28 35.343-.93 69.207-4.178 102.942 6.88 15.75 11.908 27.987 16.268 39.834l10.574-212.844c-46.193-2.625-84.117-7.796-114.1-14.729zm244.274 3.87a476.16 476.16 0 0 1-14.18 2.898 8.706 8.706 0 0 1 .738 3.482c.001 5.35-4.877 9.686-10.894 9.686-4.929-.001-9.243-2.944-10.52-7.176.114 7.472 7.86 14.838 19.258 14.838 11.482 0 19.27-7.475 19.27-15.004 0-3.091-1.33-6.165-3.672-8.725zm-52.865 8.71c-3.834.428-7.62.795-11.371 1.13a29.63 29.63 0 0 1 .917 7.312c0 19.426-18.383 33.406-38.841 33.406-4.09 0-8.091-.564-11.883-1.613l-1.781 35.841c7.214 13.142 12.493 21.677 18.35 27.051 7.723 7.089 17.493 10.648 39.187 13.46l1.203.155 1.119.47c5.877 2.462 9.152 8.093 10.105 13.26.954 5.168.153 10.435-2.125 15.374-4.555 9.878-16.833 17.953-32.076 15.29l-.324-.058-.318-.08c-13.592-3.413-26.601-7.537-38.694-13l-.798 16.069c14.752 26.766 27.717 51.521 63.017 68.12 6.282 2.955 18.812 4.183 28.207 3.044 3.899-.473 6.99-1.35 8.967-2.115l-20.682-82.42 6-3.368c18.881-10.59 28.742-24.112 36.912-39.59-25.69-2.783-49.06-9.521-74.06-11.128-9.644-.62-16.61-7.123-20.735-14.07-4.124-6.948-6.231-14.873-4.744-22.891l.932-5.028 4.797-1.771c20.29-7.499 36.416-7.302 55.295-6.877l-.406 17.996c-16.458-.37-28.2-.33-42.49 3.924.424 1.826 1.102 3.79 2.093 5.459 2.096 3.531 4.665 5.182 6.412 5.295 49.192 3.162 84.292 21.467 135.951 6.316l1.58-.465 1.643.127c24.426 1.875 41.94 13.525 58.266 23.696-1.046-7.387-1.815-14.488-3.127-21.157-2.353-11.955-6.259-22.497-16.28-33.072-43.987-13.813-89.815-15.112-122.99-21.232-33.175-6.12-37.228-19.265-37.228-32.846v-.014zm-30.2 2.455c-3.584.182-7.105.323-10.548.416a8.715 8.715 0 0 1 .775 3.577c0 5.348-4.878 9.683-10.895 9.683-3.685 0-6.936-1.631-8.908-4.12l-.472 9.5c3.089 1.447 6.781 2.337 10.953 2.337 12.502 0 20.841-7.874 20.841-15.406 0-2.026-.62-4.071-1.746-5.987zm165.666 97.233c.158.16.302.313.495.496a7.973 7.973 0 0 1-.495-.496zm.495.496zm-200.499 7.683l-.996 20.026c11.894 6.667 25.521 11.458 41.62 15.523 8.44 1.416 10.866-1.676 12.449-5.107.756-1.64.895-3.405.767-4.363-21.207-3.004-35.303-7.663-46.084-17.557-2.804-2.574-5.345-5.404-7.756-8.522zm154.731.506c-5.307.441-10.472.605-15.523.555a291.79 291.79 0 0 1-2.307 4.62c-8.347 16.322-19.719 32.975-39.455 45.798l7.574 30.186c11.658 11.973 23.365 24.075 35.346 34.507-5.244-15.44-7.194-29.844-7.7-50.506l-.568-23.17 16.057 16.715c6.898 7.183 19.878 13.617 34.39 17.442 7.9 2.082 16.195 3.373 24.157 3.994-20.276-24.918-38.643-53.588-51.971-80.14z" />
  </svg>
);

export default SvgWitchFace;