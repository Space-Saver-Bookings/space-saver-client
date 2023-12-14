function BookNow() {
  const date = '30/11/23';
  const time = '4:20pm';
  return (
    <section className="flex h-full w-full items-center justify-center gap-6 p-2">
      <p className="w-44 font-coplette text-4xl text-blue-700">
        Next Available
      </p>
      <div className="flex flex-col items-center gap-3 rounded-xl bg-blue-600 px-4 py-4 font-coplette text-slate-100">
        <p className="text-3xl sm:text-4xl md:text-5xl">{date}</p>
        <p className="text-lg sm:text-xl md:text-2xl">{time}</p>
      </div>
    </section>
  );
}

export default BookNow;
