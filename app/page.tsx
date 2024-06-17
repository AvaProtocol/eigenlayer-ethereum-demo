import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Link,
  Image,
  Spacer,
  Button,
} from "@nextui-org/react";

import { DatePicker } from "@nextui-org/react";
import {
  parseZonedDateTime,
  now,
  getLocalTimeZone,
} from "@internationalized/date";

import Subtitle from "@/components/typography/subtitle";
import Title from "@/components/typography/title";

export default function Home() {
  // console.log("now()", now());
  console.log("getLocalTimeZone()", getLocalTimeZone());
  console.log("now(getLocalTimeZone())", now(getLocalTimeZone()));
  console.log(
    "now(getLocalTimeZone()).toString()",
    now(getLocalTimeZone()).toString()
  );
  console.log(
    "parseZonedDateTime(now(getLocalTimeZone()).toString())",
    parseZonedDateTime(now(getLocalTimeZone()).toString())
  );

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 px-12">
      <div className="text-center justify-center w-full">
        <div className="flex gap-12">
          <Card className="w-1/2 px-8">
            <CardHeader className="py-8">
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
                    <li>ETH</li>
                    <li>USDC</li>
                    <li>WBTC</li>
                  </ul>
                </div>
              </div>
            </CardBody>
            <Divider />
          </Card>
          <Card className="w-1/2 px-8">
            <CardHeader className="py-8">
              <Title as="h2">Control Panel</Title>
            </CardHeader>
            <CardBody>
              <div>
                <div className="w-full max-w-xl flex flex-col gap-4">
                  <DatePicker label="Birth date" className="max-w-[284px]" />
                  <span>{getLocalTimeZone()}</span>
                  <span>{now(getLocalTimeZone())?.toString()}</span>
                  <span>{now(getLocalTimeZone())?.toAbsoluteString()}</span>
                  <span>
                    {parseZonedDateTime(
                      now(getLocalTimeZone()).toString()
                    ).toString()}
                  </span>

                  <DatePicker
                    label="Event Date"
                    className="max-w-[284px]"
                    variant="bordered"
                    hideTimeZone
                    showMonthAndYearPickers
                    defaultValue={parseZonedDateTime(
                      "2022-11-07T00:45[America/Los_Angeles]"
                    )}
                  />
                </div>
              </div>
            </CardBody>
            <Divider />
          </Card>
        </div>
      </div>
      <Spacer y={4} />
      <Card className="w-full px-8">
        <CardHeader className="py-8">
          <Title as="h2">Workflows</Title>
        </CardHeader>
      </Card>
    </section>
  );
}
