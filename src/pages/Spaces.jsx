import DashItem from '../components/dashboard/DashItem';

const spaces = Array.from(Array(4), (_, idx) => `Space ${idx + 1}`);

function Spaces() {
  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-center">
        <button>Joined Spaces</button>
      </div>

      <section className="flex flex-wrap gap-5">
        {spaces.map((space) => (
          <DashItem
            key={space}
            styling="w-[20rem] h-[14.5rem]"
            heading={space}
            headingStyling="self-center my-auto"
          />
        ))}

        <DashItem
          styling="w-[20rem] h-[14.5rem]"
          heading="Join Space +"
          bgColor="bg-slate-300"
          headingStyling="self-center my-auto"
        />
      </section>
    </section>
  );
}

export default Spaces;
