import clsx from 'clsx';
import React from 'react';
import BungieImage, { BungieImageProps } from './BungieImage';
import styles from './BungieImageAndAmmo.m.scss';

type BungieImageAndAmmoProps = BungieImageProps & {
  hash: number;
};

/**
 * A display for perk images that knows about certain items that have
 * corresponding ammo types.
 */
export default function BungieImageAndAmmo(props: BungieImageAndAmmoProps) {
  const { hash, className, ...otherProps } = props;

  let ammoImage;
  switch (hash) {
    case 143442373:
      ammoImage = 'ammo-primary';
      break;
    case 2620835322:
      ammoImage = 'ammo-special';
      break;
    case 2867719094:
      ammoImage = 'ammo-heavy';
      break;
  }

  return (
    <div className={clsx(className, styles.container)}>
      <BungieImage {...otherProps} />
      {ammoImage && <div className={`${styles.ammo} ${ammoImage}`} />}
    </div>
  );
}
