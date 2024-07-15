import React from "react";

type Props = React.PropsWithChildren &
  React.HTMLAttributes<HTMLParagraphElement>;

const CustomParagraph = ({ children, ...props }: Props) => {
  const renderChild = (child: React.ReactNode) => {
    if (React.isValidElement(child) && child.type === "p") {
      return React.Children.map(child.props.children, renderChild);
    }

    return child;
  };

  return <p {...props}>{React.Children.map(children, renderChild)}</p>;
};

export default CustomParagraph;
