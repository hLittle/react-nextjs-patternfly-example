"use client";

import {
  Button,
  PageSection,
  TextContent,
  Text,
  Toolbar,
  ToolbarContent,
  ToolbarItem,
  DescriptionList,
  DescriptionListTerm,
  DescriptionListGroup,
  DescriptionListDescription,
} from "@patternfly/react-core";
import { useQuery } from "react-query";
import { getSummary } from "@/api/summary";
import { getSubject } from "@/api/subjects";
import DefaultLayout from "@/components/DefaultLayout";

export default function Home() {
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

  return (
    <DefaultLayout>
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
    </DefaultLayout>
  );
}
