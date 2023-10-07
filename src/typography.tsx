import { Heading } from "@chakra-ui/react";
import "@fontsource/rubik";

type HeadingProps = React.ComponentProps<typeof Heading>;

export const H1 = (props: HeadingProps) => (
  <Heading
    as="h1"
    fontSize="37px"
    lineHeight="19px"
    fontWeight={700}
    {...props}
  />
);
export const H2 = (props: HeadingProps) => (
  <Heading
    as="h2"
    fontSize="32px"
    lineHeight="40px"
    fontWeight={600}
    {...props}
  />
);
export const H3 = (props: HeadingProps) => (
  <Heading
    as="h3"
    fontSize="24px"
    lineHeight="32px"
    fontWeight={500}
    {...props}
  />
);
export const H4 = (props: HeadingProps) => (
  <Heading
    as="h4"
    fontSize="18px"
    lineHeight="20px"
    fontWeight={400}
    {...props}
  />
);
export const H5 = (props: HeadingProps) => (
  <Heading
    as="h5"
    fontSize="16px"
    lineHeight="24px"
    fontWeight={600}
    {...props}
  />
);
export const H6 = (props: HeadingProps) => (
  <Heading
    as="h6"
    fontSize="14px"
    lineHeight="22px"
    fontWeight={400}
    {...props}
  />
);

export const H7 = (props: HeadingProps) => (
  <Heading
    as="h6"
    fontSize="12px"
    lineHeight="20px"
    fontWeight={500}
    {...props}
  />
);

export const Header = (
  props: HeadingProps & { as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" }
) => {
  switch (props.as) {
    case "h1":
      return <H1 {...props} />;
    case "h2":
      return <H2 {...props} />;
    case "h3":
      return <H3 {...props} />;
    case "h4":
      return <H4 {...props} />;
    case "h5":
      return <H5 {...props} />;
    case "h6":
      return <H6 {...props} />;
    default:
      return <H1 {...props} />;
  }
};
