import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { useRouter } from "next/dist/client/router";

const menuItems = [
  { text: "Latest posts", href: "/" },
  { text: "Create a post", href: "/posts/CreatePost" },
];

export default function Navbar() {
  const router = useRouter();
  const NavBarWrapper = styled("div")`
    background-color: #fafafa;
    display: flex;
    padding: 3vmin 4vmin;
    font-size: 15px;
    line-height: 1.3em;
    font-weight: 500;
    font-family: Roboto;
    color: #15171a;
    ul {
      list-style-type: none;
    }
  `;

  return (
    <NavBarWrapper>
      {menuItems.map(({ text, href }, index) => (
        <ul key={index} onClick={() => router.push(href)}>
          <li>{text}</li>
        </ul>
      ))}
    </NavBarWrapper>
  );
}
