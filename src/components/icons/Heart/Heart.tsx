// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES

const Heart = () => {
  return (
    <section>
      <FontAwesomeIcon icon={faHeart as IconProp} color="#467e8d" size="2x" />
    </section>
  );
};

export default Heart;
