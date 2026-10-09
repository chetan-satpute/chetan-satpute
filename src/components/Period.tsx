import type { MonthYear } from '#content.ts';

interface PeriodProps {
  start: MonthYear;
  end?: MonthYear;
  className?: string;
}

function Period(props: PeriodProps) {
  const { start, end, className } = props;

  return (
    <p className={className}>
      <time dateTime={start.iso}>{start.label}</time> –{' '}
      {end ? <time dateTime={end.iso}>{end.label}</time> : 'Present'}
    </p>
  );
}

export default Period;
