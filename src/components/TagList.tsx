interface TagListProps {
  tags: string[];
  label: string;
}

function TagList(props: TagListProps) {
  const { tags, label } = props;

  return (
    <ul aria-label={label} className="flex flex-wrap gap-1.5">
      {tags.map((tag) => (
        <li
          key={tag}
          className="font-code border-border bg-surface-1 text-muted-foreground rounded-md border px-2 text-xs leading-6"
        >
          {tag}
        </li>
      ))}
    </ul>
  );
}

export default TagList;
