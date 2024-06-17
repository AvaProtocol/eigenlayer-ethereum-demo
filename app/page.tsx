import React from "react";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  DatePicker,
  TimeInput,
  Link,
  Image,
  Spacer,
  Button,
} from "@nextui-org/react";
import {
  parseZonedDateTime,
  now,
  Time,
  getLocalTimeZone,
  parseAbsoluteToLocal,
  parseTime,
} from "@internationalized/date";

import type { ZonedDateTime } from "@internationalized/date";

import moment from "moment";

import Subtitle from "@/components/typography/subtitle";
import Title from "@/components/typography/title";
import Body from "@/components/typography/body";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-12">
      <div className="text-center justify-center w-full">
        <div className="flex gap-12">
          <Card className="w-1/2 px-8 py-8">
            <CardHeader className="">
              <Title as="h2">Asset Dashboard</Title>
            </CardHeader>
            <CardBody className="flex flex-col gap-8">
              <div>
                <Subtitle as="h3" variant="large" className="mb-2">
                  Network
                </Subtitle>
                <Button>Select</Button>
              </div>
              <div>
                <Subtitle as="h3" variant="large" className="mb-2">
                  Wallet
                </Subtitle>
                <Button>Connect</Button>
                <div className="px-4 py-4">
                  <Subtitle as="h4" className="mb-2">
                    Assets
                  </Subtitle>
                  <ul>
                    <li>
                      <Body as="p">ETH: </Body>
                    </li>
                    <li>
                      <Body as="p">USDC: </Body>
                    </li>
                    <li>
                      <Body as="p">WBTC: </Body>
                    </li>
                  </ul>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="w-1/2 px-8 py-8">
            <CardHeader className="">
              <Title as="h2">Control Panel</Title>
            </CardHeader>
            <CardBody>
              <div>
                <div className="w-full max-w-xl flex flex-col gap-4">
                  <div>
                    <Subtitle as="h3" variant="large" className="mb-2">
                      Select a Workflow
                    </Subtitle>
                    <div className="flex flex-wrap gap-4">
                      <Button>Transfer ETH</Button>
                      <Button>Transfer USDC</Button>
                      <Button>Trade ETH/USDC on Uniswap</Button>
                    </div>
                    <Spacer y={4} />
                    <div>
                      <Subtitle as="h4" className="mb-2">
                        Smart Contract Details
                      </Subtitle>
                      <ul>
                        <li>
                          <Body as="p">Address: </Body>
                        </li>
                        <li>
                          <Body as="p">Method: </Body>
                        </li>
                        <li>
                          <Body as="p">Parameters: </Body>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Subtitle as="h3" variant="large">
                      Pick date and time
                    </Subtitle>
                    <DatePicker label="Pick a date" className="max-w-[284px]" />
                    <TimeInput label="Input time" className="max-w-[284px]" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <Body as="p">Estimated Gas:</Body>
                  </div>
                  <div className="flex flex-col gap-4">
                    <Button className="max-w-24">Submit</Button>
                  </div>

                  {/* <TimeInput
                    label="Event Time"
                    defaultValue={parseTime(moment.now().toString())}
                  /> */}
                  {/* <span>{getLocalTimeZone()}</span>
                  <span>{now(getLocalTimeZone())?.toString()}</span>
                  <span>{moment().toString()}</span>
                  <span>
                    {parseZonedDateTime(
                      now(getLocalTimeZone()).toString()
                    ).toString()}
                  </span> */}

                  {/* <DatePicker
                    label="Zoned Date Time"
                    className="max-w-xs"
                    defaultValue={now(getLocalTimeZone()) as ZonedDateTime}
                    labelPlacement="outside"
                  /> */}
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
      <Spacer y={4} />
      <Card className="w-full px-8 py-8">
        <CardHeader className="">
          <Title as="h2">Workflows</Title>
        </CardHeader>
      </Card>
    </section>
  );
}
