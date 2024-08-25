import TextForm from '@/components/Forms/Text';

export default function Text() {
  return (
    <>
      <TextForm />
      <div className="grid grid-cols-2 gap-2">
        <button
          type="button"
          className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
        >
          Trash
        </button>
        <button
          type="button"
          className="mt-4 rounded-md bg-blue p-1 text-xs text-white"
        >
          Add
        </button>
      </div>
    </>
  );
}
