"use client";

import { getSubject } from "@/api/subjects";
import { getSummary } from "@/api/summary";
import { Character } from "@/components/Character";
import DefaultLayout from "@/components/DefaultLayout";
import {
  Flex,
  FlexItem,
  PageSection,
  TextContent,
  TextInput,
  Text,
} from "@patternfly/react-core";
import { useQuery } from "react-query";

export default function Review() {
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
          <Text component="h2">Next Review Item</Text>
        </TextContent>
        <Flex
          direction={{ default: "column" }}
          alignItems={{ default: "alignItemsCenter" }}
        >
          <Character component="p">{subject?.data?.data?.characters}</Character>
          <FlexItem
            grow={{ default: "grow" }}
            alignSelf={{ default: "alignSelfStretch" }}
          >
            <TextContent>
              <TextInput id="review" />
            </TextContent>
          </FlexItem>
        </Flex>
      </PageSection>
    </DefaultLayout>
  );
}
