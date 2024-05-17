import {
  Body,
  Button,
  Container,
  Font,
  Head,
  Heading,
  Hr,
  Html,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  subject: string;
  email: string;
  msg: string;
}

const tailwindConfig = {
  theme: {
    colors: {
      transparent: "transparent",
      background: "#0E0F1E",
      primary: "#F300AE",
      secondary: "#8E39C5",
      card: "#7B61FF",
      white: "#ffffff",
      error: "#B3001B",
    },
    fontSize: {
      xxs: "8px",
      xs: "10px",
      sm: "12px",
      md: "16px",
      lg: "25px",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
    },
  },
};

export default function InquiryTemplate(props: EmailTemplateProps) {
  return (
    <Html lang="en" dir="ltr">
      <Head>
        <Font
          fontFamily="JetBrains Mono"
          fallbackFontFamily="monospace"
          webFont={{
            url: "https://fonts.gstatic.com/s/jetbrainsmono/v18/tDbV2o-flEEny0FZhsfKu5WU4xD_OwG_TA.woff2",
            format: "woff2",
          }}
          fontWeight={400}
          fontStyle="normal"
        />
        <Font
          fontFamily="Inter"
          fallbackFontFamily="sans-serif"
          webFont={{
            url: "https://fonts.gstatic.com/s/inter/v13/UcC73FwrK3iLTeHuS_fvQtMwCp50KnMa2JL7SUc.woff2",
            format: "woff2",
          }}
          fontWeight={700}
          fontStyle="normal"
        />
      </Head>
      <Tailwind config={tailwindConfig}>
        <Body className="bg-background text-white m-0 p-0">
          <div className="flex items-center justify-between h-[50px] px-7 z-50 bg-background w-full box-border mb-[25px]">
            <div>
              <h5 className="text-sm leading-3 m-0">MJP</h5>
              <h6 className="text-xs opacity-75 leading-3 m-0 font-normal" style={{ fontFamily: "JetBrains Mono" }}>Web Solutions</h6>
            </div>
            <div className="flex items-center justify-end gap-4">
              <Button
                href="https://mattpandolfo.com"
                className="p-2 px-4 font-bold text-white w-full text-center text-sm"
                style={customBorder}>
                Visit Site
              </Button>
            </div>
          </div>
          <h2 className="text-lg m-0 mb-[25px] text-center">
            New Website Inquiry
          </h2>
          <div className="h-[500px] min-w-[250px] flex flex-col items-start justify-start gap-[3px] bg-card/5 rounded-[10px] m-auto relative overflow-hidden box-border mx-2">
            <div className="py-[15px] px-[15px] w-full box-border">
              <h3 className="text-md m-0">
                {props.firstName} {props.lastName}
              </h3>
              <h4
                className="text-sm m-0 opacity-75 font-normal"
                style={{ fontFamily: "JetBrains Mono" }}>
                {props.subject}
              </h4>
              <h4
                className="text-sm m-0 opacity-75 font-normal"
                style={{ fontFamily: "JetBrains Mono" }}>
                {props.email}
              </h4>
            </div>
            <Hr className="w-full h-px border-none bg-white/10 m-0 box-border" />
            <div className="py-[15px] px-[15px] w-full box-border">
              <Text
                className="text-sm opacity-75 m-0"
                style={{ fontFamily: "JetBrains Mono" }}>
                {props.msg}
              </Text>
            </div>
            <section className="px-[15px] w-full absolute bottom-0 pb-[15px] box-border">
              <Button
                href={`mailto:${props.email}`}
                className="py-2 font-bold text-white w-full text-center"
                style={customBorder}>
                Reply
              </Button>
            </section>
          </div>
        </Body>
      </Tailwind>
    </Html>
  );
}

const customBorder = {
  borderImage: `url("data:image/svg+xml,%3csvg width='100' height='100' viewBox='0 0 100 100' fill='none' xmlns='http://www.w3.org/2000/svg'%3e %3crect x='1' y='1' width='98' height='98' rx='1' stroke='url(%23paint0_linear_59_93)' stroke-width='2'/%3e %3cdefs%3e %3clinearGradient id='paint0_linear_59_93' x1='0' y1='0' x2='100' y2='100' gradientUnits='userSpaceOnUse'%3e %3cstop stop-color='%23F300AE'/%3e %3cstop offset='1' stop-color='%238E39C5'/%3e %3c/linearGradient%3e %3c/defs%3e %3c/svg%3e") 2 / 2px stretch`,
};

// export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
//   firstName,
// }) => (
//   <Tailwind config={tailwindConfig}>
//     <Html lang="en" dir="ltr">
//       <Head/>
//       <Body>
//         <h1 className="">Welcome, {firstName}!</h1>
//       </Body>
//     </Html>
//   </Tailwind>
// );
