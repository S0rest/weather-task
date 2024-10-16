import './Skeleton.css';
import { SkeletonTypeProps } from './Skeleton.types'

const Skeleton = ({ classes }: SkeletonTypeProps) => {
    const classNames = `skeleton ${classes} animate-pulse`

  return <div className={classNames}></div>;
};

export default Skeleton;