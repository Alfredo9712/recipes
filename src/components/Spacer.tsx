import React from "react";

import type { FC } from "react";

interface SpacerProps {
  height: number;
}

export const Spacer: FC<SpacerProps> = (props) => {
  return <div style={{ height: props.height }} />;
};
