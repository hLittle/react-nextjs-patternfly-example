"use client";

import "@patternfly/react-core/dist/styles/base.css";
import {
  Button,
  Masthead,
  MastheadMain,
  MastheadToggle,
  Page,
  PageSidebar,
  PageToggleButton,
} from "@patternfly/react-core";
import { BarsIcon, HomeIcon } from "@patternfly/react-icons";
import { useState } from "react";

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  const sidebar = (
    <PageSidebar nav="Navigation" isNavOpen={isNavOpen} id="vertical-sidebar" />
  );

  return (
    <Page header={header} sidebar={sidebar}>
      <Button type="button" variant="primary">
        Hello world
      </Button>
    </Page>
  );
}
