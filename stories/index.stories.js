import React from "react";

import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import Button from "../src/Button";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories.add("default", () => <Button>{text("Label", "Hello Button")}</Button>);

stories.add("with some props", () => (
  // <Button onClick={action('clicked')}>{text('Label', 'Hello Button')}</Button>)
  <Button
    color={text("Button Color", "orange")}
    disabled={boolean("Disabled", false)}
    textColor={text("Text Color", "white")}
    width={text("Width", "150px")}
    onClick={action('clicked')}
  >
    {text("Label", "Hello Button")}
  </Button>
));
