'use client';

import '@patternfly/react-core/dist/styles/base.css';
import { Button, Page } from "@patternfly/react-core";

export default function Home() {
  return (
    <Page>
      <Button type="button" variant="primary">Hello world</Button>
    </Page>
  )
}
