// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExternalLink } from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES

const ExLink = () => {
  return (
    <section>
      <FontAwesomeIcon
        icon={faExternalLink as IconProp}
        color="#000"
        size="1x"
      />
    </section>
  );
};

export default ExLink;
