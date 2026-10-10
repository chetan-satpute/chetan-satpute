interface BoldTermsProps {
  /** Plain text in which `**term**` marks a bold term. */
  text: string;
}

function BoldTerms(props: BoldTermsProps) {
  const { text } = props;

  // The capture group keeps each marked term in the split, so terms land at
  // the odd indices and the plain text between them at the even ones.
  return text.split(/\*\*(.+?)\*\*/).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index} className="text-foreground font-semibold">
        {part}
      </strong>
    ) : (
      part
    ),
  );
}

export default BoldTerms;
