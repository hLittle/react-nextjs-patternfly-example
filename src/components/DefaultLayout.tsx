"use client";

import {
  Masthead,
  MastheadMain,
  MastheadToggle,
  Nav,
  NavItem,
  NavList,
  Page,
  PageSidebar,
  PageToggleButton,
} from "@patternfly/react-core";
import { BarsIcon, HomeIcon } from "@patternfly/react-icons";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function DefaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

  const pathname = usePathname();

  const header = (
    <Masthead>
      <MastheadToggle>
        <PageToggleButton
          aria-label="Global navigation"
          variant="plain"
          isNavOpen={isNavOpen}
          onNavToggle={onNavToggle}
          id="vertical-nav-toggle"
        >
          <BarsIcon />
        </PageToggleButton>
      </MastheadToggle>
      <MastheadMain href="/">
        <HomeIcon />
      </MastheadMain>
    </Masthead>
  );

  const nav = (
    <Nav>
      <NavList>
        <NavItem itemId={0} isActive={pathname === "/"} to={"/"}>
          Home
        </NavItem>
        <NavItem itemId={1} isActive={pathname === "/reviews"} to={"/reviews"}>
          Reviews
        </NavItem>
      </NavList>
    </Nav>
  );

  const sidebar = (
    <PageSidebar nav={nav} isNavOpen={isNavOpen} id="vertical-sidebar" />
  );
  return (
    <Page header={header} sidebar={sidebar}>
      {children}
    </Page>
  );
}
