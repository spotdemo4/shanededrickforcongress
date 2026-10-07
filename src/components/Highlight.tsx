// Wraps every occurrence of "Republican" in a bold highlight.
export default function Highlight(props: { text: string }) {
  return (
    <>
      {props.text.split(/\b(Republican)\b/).map((part) =>
        part === "Republican" ? (
          <mark class="highlight">
            <strong>{part}</strong>
          </mark>
        ) : (
          part
        ),
      )}
    </>
  );
}
