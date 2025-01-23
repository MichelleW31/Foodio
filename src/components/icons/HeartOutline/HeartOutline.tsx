// BASE MODULES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

// CUSTOM MODULES

interface HeartOutlineProps {
  color: string;
  setUpLikes: () => void;
}

const HeartOutline = ({ color, setUpLikes }: HeartOutlineProps) => {
  return (
    <section>
      <FontAwesomeIcon
        icon={faHeart as IconProp}
        color={color}
        size="lg"
        onClick={() => {
          setUpLikes();
        }}
      />
    </section>
  );
};

export default HeartOutline;
