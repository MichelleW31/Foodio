// BASE MODULES

// CUSTOM MODULES
import { IRecipe } from '../../types';

interface LikesProps {
  likes: IRecipe[];
}

const Likes = ({ likes }: LikesProps) => {
  return <section>Likes</section>;
};

export default Likes;
