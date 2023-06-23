"use client";

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
  Bullseye,
  TextInput,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
  Flex,
  FlexItem,
} from "@patternfly/react-core";
import { BarsIcon, HomeIcon } from "@patternfly/react-icons";
import { useState } from "react";
import { useQuery } from "react-query";
import { getSummary } from "@/api/summary";
import { getSubject } from "@/api/subjects";
import { Character } from "@/app/components/Character";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const summary = useQuery("reviews", getSummary, {
    staleTime: 1000 * 60 * 60,
  });

  let firstReviewId = summary?.data?.data?.reviews?.[0]?.subject_ids?.[0];

  const subject = useQuery(
    ["subject", firstReviewId],
    () => getSubject(firstReviewId),
    {
      enabled: typeof firstReviewId === "number",
      staleTime: 1000 * 60 * 60 * 24 * 30,
    }
  );

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
      <PageSection variant="light">
        <TextContent>
          <Text component="h2">Summary</Text>
        </TextContent>
        <DescriptionList>
          <DescriptionListGroup>
            <DescriptionListTerm>Lessions</DescriptionListTerm>
            <DescriptionListDescription>
              {summary?.data?.data?.lessons?.[0]?.subject_ids?.length}
            </DescriptionListDescription>
          </DescriptionListGroup>
          <DescriptionListGroup>
            <DescriptionListTerm>Reviews</DescriptionListTerm>
            <DescriptionListDescription>
              {summary?.data?.data?.reviews?.[0]?.subject_ids?.length}
            </DescriptionListDescription>
          </DescriptionListGroup>
        </DescriptionList>
      </PageSection>
      <PageSection variant="light">
        <TextContent>
          <Text component="h2">Next Review Item</Text>
        </TextContent>
        <Flex
          direction={{ default: "column" }}
          alignItems={{ default: "alignItemsCenter" }}
        >
          <Character component="p">{subject?.data?.data?.characters}</Character>
          <FlexItem>
            <TextContent>
              <TextInput />
            </TextContent>
          </FlexItem>
        </Flex>
      </PageSection>
    </Page>
  );
}
