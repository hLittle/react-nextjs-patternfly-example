"use client";

import "@patternfly/react-core/dist/styles/base.css";
import "@/app/global.css";
import {
  Button,
  Masthead,
  MastheadMain,
  MastheadToggle,
  Page,
  PageSection,
  PageSidebar,
  PageToggleButton,
  TextContent,
  Text,
  Nav,
  NavList,
  NavItem,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
} from "@patternfly/react-core";
import { BarsIcon, HomeIcon } from "@patternfly/react-icons";
import { useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getSummary } from "@/api/summary";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const queryClient = useQueryClient();

  const summary = useQuery("reviews", getSummary, {
    staleTime: 1000 * 60 * 60,
  });

  const onNavToggle = () => {
    setIsNavOpen(!isNavOpen);
  };

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
      <MastheadMain>
        <MastheadMain href="/">
          <HomeIcon />
        </MastheadMain>
      </MastheadMain>
    </Masthead>
  );

  const nav = (
    <Nav>
      <NavList>
        <NavItem itemId={0} isActive to={"/"}>
          Some link
        </NavItem>
      </NavList>
    </Nav>
  );

  const sidebar = (
    <PageSidebar nav={nav} isNavOpen={isNavOpen} id="vertical-sidebar" />
  );

  return (
    <Page header={header} sidebar={sidebar}>
      <PageSection variant="light">
        <TextContent>
          <Text component="h1">Heidi&apos;s Innovation Project 2023</Text>
          <Text component="p">This is some plain text, hello??</Text>
        </TextContent>
      </PageSection>
      <PageSection variant="default">
        <Toolbar>
          <ToolbarContent>
            <ToolbarItem>
              <Button type="button" variant="primary">
                Start
              </Button>
            </ToolbarItem>
          </ToolbarContent>
        </Toolbar>
      </PageSection>
      <PageSection>
        <TextContent>
          <Text component="h2">Summary</Text>
          <Text component="p">
            # Lessions: {summary?.data?.data?.lessons?.[0]?.subject_ids?.length}
          </Text>
          <Text component="p">
            # Reviews: {summary?.data?.data?.reviews?.[0]?.subject_ids?.length}
          </Text>
        </TextContent>
      </PageSection>
    </Page>
  );
}
