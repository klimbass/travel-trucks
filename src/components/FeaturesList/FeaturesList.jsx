import Icons from '../../img/Icons/Icons.jsx';
import css from './FeaturesList.module.css';

export default function FeaturesList({ features, item }) {
  return (
    <ul className={css.features}>
      {features.length > 0 &&
        features.map(key => {
          return (
            <li key={`${item.name}${key}${item.id}`} className={css.feature}>
              <Icons iconName={`icon-${key}`} width={20} height={20} />
              <span className={css.text}>{key}</span>
            </li>
          );
        })}
    </ul>
  );
}
