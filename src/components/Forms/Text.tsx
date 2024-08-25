import Font from '../Edit/Font';
import Textarea from '../Textarea';

export default function TextForm({
  text,
  setText,
}: {
  text: any;
  setText: (text: any) => void;
}) {
  return (
    <>
      <p className="text-sm font-bold text-blue">text</p>
      <div className="py-2">
        <Textarea />
      </div>
      <p className="text-sm font-bold text-blue">font</p>
      <Font />
    </>
  );
}
