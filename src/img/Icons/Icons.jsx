import sprite from './Icons.svg';

export default function Icons({
  iconName,
  className = '',
  width = 16,
  height = 16,
  color = 'var(--secondary-text-color)',
}) {
  return (
    <svg className={className} width={width} height={height} fill={color}>
      <use href={`${sprite}#${iconName}`} />
    </svg>
  );
}
