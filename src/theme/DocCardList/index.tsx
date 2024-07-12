import React from "react";
import clsx from "clsx";
import {
  useCurrentSidebarCategory,
  filterDocCardListItems,
} from "@docusaurus/theme-common";
import DocCard from "@theme/DocCard";
import type { Props } from "@theme/DocCardList";

import styles from "./styles.module.css";

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const category = useCurrentSidebarCategory();
  return <DocCardList items={category.items} className={className} />;
}

export default function DocCardList(props: Props): JSX.Element {
  const { items, className } = props;
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />;
  }
  const filteredItems = filterDocCardListItems(items);
  return (
    <section
      className={clsx(
        "row container padding-horiz--sm",
        styles.customDocCardList,
        className
      )}
    >
      {filteredItems.map((item, index) => (
        <article
          key={index}
          className="col col--6 padding-horiz--sm  margin-bottom--md"
        >
          <DocCard item={item} />
        </article>
      ))}
    </section>
  );
}
