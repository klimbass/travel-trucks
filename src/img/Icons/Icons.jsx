import sprite from './Icons.svg';

export default function Icons({
  iconName,
  className = '',
  width = 16,
  height = 16,
}) {
  return (
    <svg className={className} width={width} height={height}>
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
}
